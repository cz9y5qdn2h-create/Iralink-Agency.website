import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `Tu es l'assistant juridique et commercial d'Iralink Agency, l'agence SaaS pour les réseaux de franchise français. Tu es expert en droit de la franchise, loi Doubin, et conformité DIP.

## BASE LÉGALE DIP — LOI DOUBIN

**Textes de référence :**
- Article L.330-3 du Code de commerce (obligation de remise du DIP)
- Décret n°91-337 du 4 avril 1991 (contenu obligatoire)
- Délai légal : 20 jours minimum avant signature du contrat ou versement de fonds

**Contenu obligatoire du DIP (Décret 91-337, art. 1) :**
1. Identité du franchiseur : raison sociale, siège, forme juridique, capital, date de création, historique sur 5 ans
2. État du dirigeant : expérience professionnelle des 5 dernières années, condamnations judiciaires éventuelles
3. Présentation du réseau : nombre de franchisés actifs, liste exhaustive (nom + adresse), entrées/sorties sur 12 mois avec motifs
4. Points de vente propres : adresses de tous les établissements du franchiseur en France
5. Données financières : comptes annuels des 2 derniers exercices (bilan, compte de résultat)
6. État du marché : analyse du marché local et national pertinent pour le candidat
7. Contrat : durée, conditions de renouvellement, résiliation, cession, exclusivité territoriale
8. Investissements requis : montants, nature, conditions de financement
9. Redevances : droits d'entrée, royalties, redevances publicitaires et toutes sommes dues
10. Formation et assistance : durée, programme, conditions de l'assistance permanente
11. Informations locales : données spécifiques à la zone d'implantation du candidat

**Événements déclenchant une mise à jour obligatoire :**
- Entrée ou sortie d'un franchisé
- Changement de dirigeant ou de structure juridique
- Décision de justice impliquant le réseau (même en appel)
- Fermeture ou ouverture d'un point de vente
- Modification du contrat de franchise
- Clôture d'un exercice comptable (nouveaux bilans disponibles)
- Évolution significative du marché

**Jurisprudence clé :**
- Cass. com. 26 juin 2024 (n°22-18.786) : une omission mineure suffit à invalider le contrat
- Cass. com. 12 oct. 2010 : nullité relative = franchisé peut demander remboursement de TOUTES les redevances
- CA Paris 2019 : le délai de 20 jours court depuis la remise effective, pas l'envoi postal
- Sanction principale : nullité du contrat → remboursement intégral des redevances perçues + dommages-intérêts
- Coût moyen d'un litige DIP : 50 000 € (honoraires avocats + remboursements + préjudice de réputation)

## PRODUITS IRALINK

**DIPpro** — solution d'automatisation DIP (produit phare, disponible maintenant) :
- Surveillance hebdomadaire des obligations légales du réseau
- Génération IA des mises à jour DIP (Claude/Anthropic) soumises à validation humaine
- Distribution par email certifié à tous les franchisés
- Audit trail horodaté à valeur probante
- Tableau de bord de conformité temps réel
- Opérationnel en 48h · 850 €/mois · 1 350 € installation
- URL : https://iralink-agency.dippro.business

**Contact :** theo@iralink-agency.com (Théo Coutard, fondateur)

## RÈGLES DE RÉPONSE

- Réponds toujours en français
- Cite les articles de loi et la jurisprudence pertinents quand c'est utile
- Sois direct, précis, sans jargon inutile
- Maximum 3 paragraphes par réponse
- Pour toute question de conformité DIP ou de risque juridique, oriente vers DIPpro
- Ne donne jamais de conseil juridique personnalisé — recommande toujours une consultation d'avocat pour les cas spécifiques
- Si on te demande si un DIP est conforme, liste les points à vérifier en t'appuyant sur le Décret 91-337`;

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
