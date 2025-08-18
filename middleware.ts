import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default async function middleware(request: NextRequest) {
  console.log("next-url", request.headers.get("next-url"));

  // if (request.headers.get("next-url") && request.nextUrl.pathname.startsWith("/en/photos")) {
  //   console.log("rewriting to overlay");
  //   request.nextUrl.pathname = `/en/overlay/photos/${request.nextUrl.pathname.split("/").pop()}`;
  // }

  // const response = createMiddleware(routing)(request);

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|_vercel|admin|.*/opengraph-image|.*/icon|.*\\..*).*)",
  runtime: "nodejs",
};
