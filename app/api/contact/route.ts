import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { nom, email, reseau, franchises } = await req.json();

    if (!nom || !email || !reseau || !franchises) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "DIP Pilot <onboarding@resend.dev>",
      to: ["consultin@iralink-agency.com"],
      replyTo: email,
      subject: `Demande d'audit DIP — ${reseau}`,
      text: [
        "Nouvelle demande d'audit DIP reçue via iralink-agency.com",
        "",
        `Nom       : ${nom}`,
        `Email     : ${email}`,
        `Réseau    : ${reseau}`,
        `Franchisés: ${franchises}`,
        "",
        "---",
        "Répondre directement à cet email pour contacter le prospect.",
      ].join("\n"),
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #080808; color: #F4F2EE; padding: 48px 40px;">
          <p style="font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #C8A96E; margin: 0 0 32px;">
            DIP Pilot — Nouvelle demande d'audit
          </p>
          <h1 style="font-family: Georgia, serif; font-size: 28px; font-weight: 300; color: #F4F2EE; margin: 0 0 32px; line-height: 1.2;">
            ${reseau}
          </h1>
          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ["Nom", nom],
              ["Email", email],
              ["Réseau / Entreprise", reseau],
              ["Nombre de franchisés", franchises],
            ]
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid rgba(244,242,238,0.06); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #5A5A5A; width: 40%;">${label}</td>
                <td style="padding: 14px 0; border-bottom: 1px solid rgba(244,242,238,0.06); font-size: 15px; font-weight: 300; color: #F4F2EE;">${value}</td>
              </tr>`
              )
              .join("")}
          </table>
          <p style="margin: 40px 0 0; font-size: 12px; color: #5A5A5A; letter-spacing: 0.05em;">
            Répondre à cet email pour contacter directement ${nom}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Réessaie." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Erreur serveur. Réessaie." },
      { status: 500 }
    );
  }
}
