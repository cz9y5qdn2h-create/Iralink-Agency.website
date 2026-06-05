import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return NextResponse.json({ count: null });
  }

  try {
    const supabase = createClient(url, key);
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (error) return NextResponse.json({ count: null });
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null });
  }
}
