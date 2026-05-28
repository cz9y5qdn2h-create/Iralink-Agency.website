import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `Tu es l'assistant de DIP Pilot, la solution d'automatisation DIP pour les réseaux de franchise. Tu réponds aux questions sur le DIP, la loi Doubin, la conformité franchise, et le produit DIP Pilot. Sois direct, concis, expert. Si quelqu'un veut parler à Théo, dis-leur d'envoyer un message via le formulaire ou à theo@iralink-agency.com. Réponds toujours en français. Maximum 3 paragraphes par réponse.`;

// In-memory rate limiter (per serverless instance; protects against burst abuse)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 20) return true;
  entry.count++;
  return false;
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "Chat non disponible pour le moment." },
      { status: 503 }
    );
  }

  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de requêtes. Réessayez dans une minute." },
      { status: 429 }
    );
  }

  let messages: Array<{ role: string; content: string }>;

  try {
    const body = await req.json();
    messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages manquants ou invalides." },
        { status: 400 }
      );
    }

    // Hard limits to prevent token abuse
    if (messages.length > 20) {
      return NextResponse.json(
        { error: "Trop de messages dans la conversation." },
        { status: 400 }
      );
    }

    const totalLength = messages.reduce(
      (acc, m) => acc + String(m.content ?? "").length,
      0
    );
    if (totalLength > 16_000) {
      return NextResponse.json(
        { error: "Contenu trop long." },
        { status: 400 }
      );
    }

    // Validate role values
    const validRoles = new Set(["user", "assistant"]);
    if (messages.some((m) => !validRoles.has(m.role))) {
      return NextResponse.json(
        { error: "Format de message invalide." },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Corps de requête invalide." },
      { status: 400 }
    );
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await client.messages.stream({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages: messages.map((m) => ({
            role: m.role as "user" | "assistant",
            content: String(m.content).slice(0, 4000),
          })),
        });

        for await (const chunk of response) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            const text = chunk.delta.text;
            controller.enqueue(new TextEncoder().encode(text));
          }
        }

        controller.close();
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Erreur inconnue";
        controller.enqueue(
          new TextEncoder().encode(
            `[Erreur: impossible de contacter l'assistant. ${message}]`
          )
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
