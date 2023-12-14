import { BussinessType } from "@/types/accounts";
import NextAuth, { DefaultSession, User } from "next-auth";

export type UserRole = "BUMDES" | "UNIT";
export type BackendTokensStruct = {
  accessToken: string;
  refreshToken: string;
};
export type UserStruct = {
  id: string;
  bumdesId: string;
  bumdesName: string;
  unitId?: string;
  unitName?: string;
  role: UserRole;
  businessType?: BussinessType;
};

declare module "next-auth" {
  interface User {
    user: UserStruct;
    backendTokens: BackendTokensStruct;
  }

  interface Session extends DefaultSession {
    user: UserStruct;
    backendTokens: BackendTokensStruct;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: UserStruct;

    backendTokens: BackendTokensStruct;
  }
}
