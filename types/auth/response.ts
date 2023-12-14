import { BackendResponseType } from "@/common/types";
import { LoginBackendTokens, LoginUser } from ".";

export type AuthRegisterResponse = BackendResponseType<{
  userId: string;
  bumdesId: string;
}>;

export type AuthLoginResponse = BackendResponseType<{
  user: LoginUser;
  backendTokens: LoginBackendTokens;
}>;
