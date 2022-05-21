import { getToken } from "next/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  if (pathname.include("/api/auth") || token) {
    return NextResponse.next();
  }

  if()
}
