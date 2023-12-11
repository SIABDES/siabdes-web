import { BackendResponseType } from "@/common/types";

export type AuthRegisterResponse = BackendResponseType<{
  userId: string;
  bumdesId: string;
}>;
