import { Backend_URL } from "@/lib/constants";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(Backend_URL + "/auth/refresh", {
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

      async authorize(credentials, req) {
        if (!credentials?.identifier || !credentials?.password) return null;
        const { identifier, password } = credentials;

        const res = await fetch(Backend_URL + "/auth/login", {
          method: "POST",
          body: JSON.stringify({
            identifier,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status == 401) {
          return null;
        }

        const responseResult = await res.json();

        return responseResult.data;
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
    error: "/error",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
