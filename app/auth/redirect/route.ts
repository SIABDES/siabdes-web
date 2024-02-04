import { authOptions } from "@/lib/next-auth-options";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const baseUrl = req.nextUrl.origin;

  if (!session) {
    return NextResponse.redirect(new URL("/auth/login", baseUrl));
  }

  if (session.user) {
    const role = session.user.role;

    switch (role) {
      case "BUMDES":
        return NextResponse.redirect(new URL("/bumdes", baseUrl));
      case "UNIT":
        return NextResponse.redirect(new URL("/unit/dashboard", baseUrl));
    }
  }

  return NextResponse.redirect(new URL("/", baseUrl));
}
