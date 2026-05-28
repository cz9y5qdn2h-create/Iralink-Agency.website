import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const FIELD_MAX = 300;
const EMAIL_MAX = 254;

const ALLOWED_ROLES = new Set([
  "",
  "directeur-reseau",
  "juriste",
  "responsable-developpement",
  "dirigeant",
  "autre",
]);

const ALLOWED_FRANCHISES = new Set(["", "1-10", "11-30", "31-100", "100+"]);

export async function POST(req: Request) {
  let nom: string, email: string, reseau: string, franchises: string, role: string;

  try {
    const body = await req.json();
    nom = String(body.nom ?? "").trim().slice(0, FIELD_MAX);
    email = String(body.email ?? "").trim().slice(0, EMAIL_MAX);
    reseau = String(body.reseau ?? "").trim().slice(0, FIELD_MAX);
    franchises = String(body.franchises ?? "").trim();
    role = String(body.role ?? "").trim();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (!nom || !email || !reseau) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  // Validate enum fields against allowed values to prevent injection of arbitrary data
  if (!ALLOWED_FRANCHISES.has(franchises)) {
    return NextResponse.json({ error: "Valeur invalide pour franchisés." }, { status: 400 });
  }
  if (!ALLOWED_ROLES.has(role)) {
    return NextResponse.json({ error: "Rôle invalide." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ success: true });
  }

  const eNom = escapeHtml(nom);
  const eEmail = escapeHtml(email);
  const eReseau = escapeHtml(reseau);
  const eFranchises = escapeHtml(franchises);
  const eRole = escapeHtml(role);

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "DIPpro Waitlist <onboarding@resend.dev>",
      to: ["consultin@iralink-agency.com"],
      replyTo: email,
      subject: `[Waitlist DIPpro] ${nom} — ${reseau}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#080808;color:#F4F2EE;padding:40px;border:1px solid rgba(200,169,110,0.18);">
          <h2 style="color:#C8A96E;font-size:14px;letter-spacing:.2em;text-transform:uppercase;margin:0 0 24px 0;">Nouvelle inscription — Liste d'attente DIPpro</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Nom</td><td style="padding:8px 0;font-size:13px;">${eNom}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Email</td><td style="padding:8px 0;font-size:13px;"><a href="mailto:${eEmail}" style="color:#C8A96E;">${eEmail}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Réseau</td><td style="padding:8px 0;font-size:13px;">${eReseau}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Franchisés</td><td style="padding:8px 0;font-size:13px;">${eFranchises}</td></tr>
            ${eRole ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;">Rôle</td><td style="padding:8px 0;font-size:13px;">${eRole}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[waitlist]", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
