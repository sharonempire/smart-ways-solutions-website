import { NextRequest, NextResponse } from "next/server";
import { randomBytes, timingSafeEqual } from "crypto";
import { createSession } from "@/lib/session-store";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "changeme";

export async function POST(req: NextRequest) {
  let password = "";
  try {
    ({ password } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Constant-time comparison — prevents timing oracle
  const a = Buffer.from(password ?? "");
  const b = Buffer.from(ADMIN_PASSWORD);
  const match = a.length === b.length && timingSafeEqual(a, b);

  if (!match) {
    // Fixed delay so response time leaks nothing even with short passwords
    await new Promise((r) => setTimeout(r, 200));
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  // Cryptographically random 32-byte (64 hex char) session token
  const token = randomBytes(32).toString("hex");
  createSession(token);

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_auth", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 8,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
