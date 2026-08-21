import { Resend } from "resend";
import { NextResponse } from "next/server";
import { SOCLE, OPTIONAL_MODULES, fmtEUR } from "@/lib/configurator";

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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const contact = body.contact ?? {};
    const nom: string = String(contact.nom ?? "").trim().slice(0, FIELD_MAX);
    const reseau: string = String(contact.reseau ?? "").trim().slice(0, FIELD_MAX);
    const email: string = String(contact.email ?? "").trim().slice(0, EMAIL_MAX);
    const telephone: string = String(contact.telephone ?? "").trim().slice(0, 40);
    const pointsDeVente: string = String(contact.pointsDeVente ?? "").trim().slice(0, 20);

    const rawModuleIds: unknown[] = Array.isArray(body.moduleIds) ? body.moduleIds : [];
    const validIds = new Set(OPTIONAL_MODULES.map((m) => m.id));
    const moduleIds = rawModuleIds.filter((id): id is string => typeof id === "string" && validIds.has(id));
    const modules = OPTIONAL_MODULES.filter((m) => moduleIds.includes(m.id));

    if (!nom || !reseau || !email || !telephone) {
      return NextResponse.json({ error: "Tous les champs obligatoires doivent être renseignés." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.log("[Configurateur] No RESEND_API_KEY — would send:", { nom, reseau, email, telephone, pointsDeVente, moduleIds });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const eNom = escapeHtml(nom);
    const eReseau = escapeHtml(reseau);
    const eEmail = escapeHtml(email);
    const eTelephone = escapeHtml(telephone);
    const ePointsDeVente = escapeHtml(pointsDeVente || "Non renseigné");

    const modulesTextList = modules.length
      ? modules.map((m) => `  — ${m.name} (${m.pricingLabel})`).join("\n")
      : "  — Aucune option sélectionnée";

    const modulesHtmlList = modules.length
      ? modules
          .map(
            (m) =>
              `<tr><td style="padding:8px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:13px;color:#F4F2EE;">${escapeHtml(m.name)}</td><td style="padding:8px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:11px;color:#C8A96E;text-align:right;">${escapeHtml(m.pricingLabel)}</td></tr>`
          )
          .join("")
      : `<tr><td colspan="2" style="padding:8px 0;font-size:13px;color:#5A5A5A;">Aucune option sélectionnée</td></tr>`;

    // Notification to Théo
    const notifyResult = await resend.emails.send({
      from: "DIPpro <theo@iralink-agency.com>",
      to: ["theo@iralink-agency.com"],
      replyTo: email,
      subject: `[DIPpro] Nouvelle demande configurateur — ${eReseau}`,
      text: [
        "Nouvelle demande via le configurateur DIPpro",
        "─────────────────────────────",
        `Nom        : ${nom}`,
        `Réseau     : ${reseau}`,
        `Email      : ${email}`,
        `Téléphone  : ${telephone}`,
        `Pts. vente : ${pointsDeVente || "Non renseigné"}`,
        "─────────────────────────────",
        `Socle DIPpro : ${fmtEUR(SOCLE.monthlyPrice)}/mois + ${fmtEUR(SOCLE.installPrice)} installation`,
        "Options sélectionnées :",
        modulesTextList,
        "─────────────────────────────",
        "Répondre à cet email pour contacter le prospect directement.",
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#080808;color:#F4F2EE;padding:48px 40px;border:1px solid rgba(156,138,104,0.18);">
          <p style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#C8A96E;margin:0 0 24px 0;">DIPpro — Demande configurateur</p>
          <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:300;color:#F4F2EE;margin:0 0 32px 0;line-height:1.2;">${eReseau}</h1>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#5A5A5A;width:38%;">Nom</td><td style="padding:8px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:14px;color:#F4F2EE;">${eNom}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#5A5A5A;">Email</td><td style="padding:8px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:14px;"><a href="mailto:${eEmail}" style="color:#C8A96E;">${eEmail}</a></td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#5A5A5A;">Téléphone</td><td style="padding:8px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:14px;color:#F4F2EE;">${eTelephone}</td></tr>
            <tr><td style="padding:8px 0;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#5A5A5A;">Pts. de vente</td><td style="padding:8px 0;font-size:14px;color:#F4F2EE;">${ePointsDeVente}</td></tr>
          </table>
          <p style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#5A5A5A;margin:0 0 10px;">Configuration</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:13px;color:#F4F2EE;">Socle DIPpro</td><td style="padding:8px 0;border-bottom:1px solid rgba(244,242,238,0.06);font-size:11px;color:#F4F2EE;text-align:right;">${fmtEUR(SOCLE.monthlyPrice)}/mois + ${fmtEUR(SOCLE.installPrice)}</td></tr>
            ${modulesHtmlList}
          </table>
          <p style="margin:32px 0 0;font-size:12px;color:#5A5A5A;">Réponds à cet email pour contacter ${eNom} directement.</p>
        </div>`,
    });

    if (notifyResult.error) {
      console.error("[Resend error — notify]", notifyResult.error);
      return NextResponse.json({ error: "Erreur lors de l'envoi. Réessaie dans quelques instants." }, { status: 500 });
    }

    // Auto-reply to the prospect — best-effort, doesn't fail the request if it errors
    const ackResult = await resend.emails.send({
      from: "Théo Coutard — DIPpro <theo@iralink-agency.com>",
      to: [email],
      replyTo: "theo@iralink-agency.com",
      subject: "Votre demande DIPpro a bien été transmise",
      text: [
        `Bonjour ${nom},`,
        "",
        "Votre demande de configuration DIPpro a bien été transmise à Théo, qui vous recontacte sous 24h pour valider votre configuration.",
        "",
        "Vous pouvez aussi réserver directement un créneau si vous préférez ne pas attendre son appel.",
        "",
        "À très vite,",
        "Théo Coutard — Iralink Agency",
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;background:#080808;color:#F4F2EE;padding:40px 36px;border:1px solid rgba(156,138,104,0.18);">
          <p style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#C8A96E;margin:0 0 20px 0;">DIPpro</p>
          <p style="font-size:15px;line-height:1.6;">Bonjour ${eNom},</p>
          <p style="font-size:15px;line-height:1.6;">Votre demande a bien été transmise à Théo, qui vous recontacte sous 24h pour valider votre configuration.</p>
          <p style="font-size:13px;line-height:1.6;color:#A0A0A0;">Vous pouvez aussi réserver directement un créneau depuis la page de confirmation si vous préférez ne pas attendre son appel.</p>
          <p style="font-size:13px;color:#5A5A5A;margin-top:28px;">Théo Coutard — Iralink Agency</p>
        </div>`,
    });

    if (ackResult.error) {
      console.error("[Resend error — auto-reply, non-blocking]", ackResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Configurateur route error]", err);
    return NextResponse.json({ error: "Erreur serveur inattendue." }, { status: 500 });
  }
}
