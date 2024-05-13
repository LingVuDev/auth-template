import authConfig from "./auth.config"
import NextAuth from "next-auth"
import { DEFAULT_LOGIN_REDIRECT, publicRoutes, apiAuthPrefix, authRoutes } from "@/routes"

export const { auth } = NextAuth(authConfig)

export const middleware = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // Allow access to all API auth routes and public routes
  if (isApiAuthRoute || (!isLoggedIn && isAuthRoute) || isPublicRoute) {
    return;
  }

  // Redirect to the default login route if the user is logged in and is trying to access an auth route
  if (isLoggedIn && isAuthRoute) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }

  // Protect all routes that are not public or auth routes
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
