import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_req: NextRequest) {
  return new NextResponse(
    `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/><meta name="robots" content="noindex,nofollow"/><title>Site hors ligne</title><style>*{margin:0;padding:0;box-sizing:border-box}body{background:#080808;display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:'DM Sans',sans-serif}p{color:#2A2A2A;font-size:12px;letter-spacing:.1em}</style></head><body><p>—</p></body></html>`,
    {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    }
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
