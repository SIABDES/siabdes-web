import { AxiosNoAuth } from "@/common/api";
import { BACKEND_URL } from "@/common/configs";
import { authOptions } from "@/lib/next-auth-options";
import { AuthLoginResponse } from "@/types/auth/response";
import { AxiosError } from "axios";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(BACKEND_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.backendTokens.refreshToken}`,
    },
  });

  const response = await res.json();

  return {
    ...token,
    backendTokens: response,
  };
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
