import { AxiosNoAuth } from "@/common/api";
import { BACKEND_URL } from "@/common/configs";
import { AuthLoginResponse } from "@/types/auth/response";
import { AxiosError } from "axios";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

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

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        identifier: {
          label: "Identifier",
          type: "text",
          placeholder: "johnsmith",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) return null;
        const { identifier, password } = credentials;

        try {
          const response = await AxiosNoAuth.post<AuthLoginResponse>(
            "/auth/login",
            {
              identifier,
              password,
            }
          );

          const { backendTokens, user } = response.data.data;

          return {
            id: user.id,
            user,
            backendTokens,
          };
        } catch (error) {
          console.log("error");

          if (error instanceof AxiosError) {
            if (error.response?.status === 403)
              throw new Error("Kredensial atau password salah");
          }

          throw error;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      //   if (new Date().getTime() < token.backendTokens.expiresIn)
      //     return token;

      return token;

      // return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
