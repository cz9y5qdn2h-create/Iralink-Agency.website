import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let nom: string, email: string, reseau: string, franchises: string, role: string;

  try {
    const body = await req.json();
    nom = body.nom;
    email = body.email;
    reseau = body.reseau;
    franchises = body.franchises;
    role = body.role ?? "";
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (!nom || !email || !reseau) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ success: true });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "DIPpro Waitlist <onboarding@resend.dev>",
      to: ["consultin@iralink-agency.com"],
      replyTo: email,
      subject: `[Waitlist DIPpro] ${nom} — ${reseau}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
          <h2 style="color:#C8A96E;">Nouvelle inscription — Liste d'attente DIPpro</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Nom</td><td style="padding:8px 0;font-size:13px;">${nom}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Email</td><td style="padding:8px 0;font-size:13px;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Réseau</td><td style="padding:8px 0;font-size:13px;">${reseau}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Franchisés</td><td style="padding:8px 0;font-size:13px;">${franchises}</td></tr>
            ${role ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;">Rôle</td><td style="padding:8px 0;font-size:13px;">${role}</td></tr>` : ""}
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
