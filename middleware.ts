import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default async function middleware(request: NextRequest) {
  const soft = request.headers.get("x-deployment-id");

  if (soft && request.nextUrl.pathname.startsWith("/en/photos")) {
    console.log("rewriting to overlay");
    request.nextUrl.pathname = `/en/overlay/photos/${request.nextUrl.pathname.split("/").pop()}`;
    console.log(request.nextUrl);
  }

  const response = createMiddleware(routing)(request);

  return response;
}

export const config = {
  matcher: "/((?!api|_next|_vercel|admin|.*/opengraph-image|.*/icon|.*\\..*).*)",
  runtime: "nodejs",
};
