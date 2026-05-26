import { NextRequest, NextResponse } from "next/server";
import { revokeSession } from "@/lib/session-store";

export async function POST(req: NextRequest) {
  const token = req.cookies.get("admin_auth")?.value;
  revokeSession(token);

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_auth", "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
