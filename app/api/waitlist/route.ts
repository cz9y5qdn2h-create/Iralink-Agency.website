import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

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

  if (!ALLOWED_FRANCHISES.has(franchises)) {
    return NextResponse.json({ error: "Valeur invalide pour franchisés." }, { status: 400 });
  }

  if (!ALLOWED_ROLES.has(role)) {
    return NextResponse.json({ error: "Rôle invalide." }, { status: 400 });
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.warn("[waitlist] Supabase env vars missing — skipping save");
    return NextResponse.json({ success: true });
  }

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { error } = await supabase.from("waitlist").insert({
      nom,
      email,
      reseau,
      franchises: franchises || null,
      role: role || null,
    });

    if (error) {
      // Duplicate email → success silencieux (l'utilisateur est déjà inscrit)
      if (error.code === "23505") {
        return NextResponse.json({ success: true });
      }
      console.error("[waitlist] Supabase error:", error);
      return NextResponse.json({ error: "Erreur lors de l'inscription." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[waitlist]", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
