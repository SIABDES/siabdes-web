import { AxiosNoAuth } from "@/common/api";
import { AuthLoginResponse } from "@/types/auth/response";
import { AxiosError } from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
