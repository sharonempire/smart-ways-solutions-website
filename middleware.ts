import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow login page and login API through
  if (pathname === "/admin/login" || pathname.startsWith("/api/admin/login")) {
    return NextResponse.next();
  }

  // Protect all /admin routes at the edge
  if (pathname.startsWith("/admin")) {
    const auth = req.cookies.get("admin_auth")?.value;
    // Require a 64-char hex token — rejects the old static "1" value too
    const valid = auth && /^[0-9a-f]{64}$/.test(auth);
    if (!valid) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
