import { getToken } from "next/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;
  // allow request if
  // 1.request for next-auth session & provider fetching
  // 2.token exist
  if (pathname.include("/api/auth") || token) {
    return NextResponse.next();
  }
  // redirect to login page if there is no token and
  if (!token && pathname !== "/api/auth") {
    return NextResponse.redirect("/login");
  }
}
