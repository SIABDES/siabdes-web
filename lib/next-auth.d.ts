import NextAuth, { DefaultSession, User } from "next-auth";

export type UserRole = "BUMDES" | "UNIT";

declare module "next-auth" {
  interface User {
    id: string;
    bumdesId: string;
    unitId?: string;
    role: UserRole;
  }

  interface Session extends DefaultSession {
    user: User;

    backendTokens: {
      accessToken: string;
      refreshToken: string;
      //   expiresIn: number;
    };
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      bumdesId: string;
      unitId?: string;
      role: UserRole;
    };

    backendTokens: {
      accessToken: string;
      refreshToken: string;
      //   expiresIn: number;
    };
  }
}
