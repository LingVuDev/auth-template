/**
 * An array of public routes that are accessible to all users
 * These routes are not protected by authentication
 * @type {Array<String>}
 */
export const publicRoutes = [
  "/",
  "/auth/verify-email",
];

/**
 * An array of public routes that are used for authentication
 * These routes are not protected by authentication
 * @type {Array<String>}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
];

/**
 * The prefix for the authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {String}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default route to redirect after a successful login
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";