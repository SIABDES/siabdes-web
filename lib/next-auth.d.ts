import NextAuth, { User } from "next-auth";

export type UserRole = "BUMDES" | "UNIT";

declare module "next-auth" {
  interface Session {
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
