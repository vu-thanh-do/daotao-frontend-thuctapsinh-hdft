import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocalePrefix = pathname.startsWith('/en/') || pathname.startsWith('/vi/') || pathname === '/en' || pathname === '/vi';
  if (!hasLocalePrefix && pathname !== '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/", 
    "/(en|vi)/:path*",
    // Thêm matcher cho các URL thiếu locale prefix
    "/((?!_next|favicon.ico|.*\\.).*)"
  ],
};