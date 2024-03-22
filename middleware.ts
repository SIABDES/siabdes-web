export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/unit/:path*",
    "/bumdes/:path*",
    "/regency/:path*",
    "/district/:path*",
  ],
};
