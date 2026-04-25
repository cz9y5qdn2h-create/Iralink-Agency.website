import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { nom, email, reseau, franchises } = await req.json();

    if (!nom || !email || !reseau || !franchises) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // Dev fallback: no API key → log and succeed silently
    if (!process.env.RESEND_API_KEY) {
      console.log("[Contact form] No RESEND_API_KEY — would send:", {
        nom, email, reseau, franchises,
      });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "DIP Pilot <onboarding@resend.dev>",
      to: ["consultin@iralink-agency.com"],
      replyTo: email,
      subject: `[DIP Pilot] Demande d'audit — ${reseau}`,
      text: [
        "Nouvelle demande d'audit DIP",
        "─────────────────────────────",
        `Nom       : ${nom}`,
        `Email     : ${email}`,
        `Réseau    : ${reseau}`,
        `Franchisés: ${franchises}`,
        "─────────────────────────────",
        "Répondre à cet email pour contacter le prospect directement.",
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#080808;color:#F4F2EE;padding:48px 40px;border:1px solid rgba(200,169,110,0.18);">
          <p style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#C8A96E;margin:0 0 24px 0;">DIP Pilot — Demande d'audit</p>
          <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:300;color:#F4F2EE;margin:0 0 32px 0;line-height:1.2;">${reseau}</h1>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:12px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#5A5A5A;width:38%;">Nom</td><td style="padding:12px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:14px;font-weight:300;color:#F4F2EE;">${nom}</td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#5A5A5A;">Email</td><td style="padding:12px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:14px;font-weight:300;color:#C8A96E;"><a href="mailto:${email}" style="color:#C8A96E;">${email}</a></td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#5A5A5A;">Réseau</td><td style="padding:12px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:14px;font-weight:300;color:#F4F2EE;">${reseau}</td></tr>
            <tr><td style="padding:12px 0;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#5A5A5A;">Franchisés</td><td style="padding:12px 0;font-size:14px;font-weight:300;color:#F4F2EE;">${franchises}</td></tr>
          </table>
          <p style="margin:32px 0 0;font-size:12px;color:#5A5A5A;">Réponds à cet email pour contacter ${nom} directement.</p>
        </div>`,
    });

    if (error) {
      console.error("[Resend error]", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Réessaie dans quelques instants." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact route error]", err);
    return NextResponse.json(
      { error: "Erreur serveur inattendue." },
      { status: 500 }
    );
  }
}
