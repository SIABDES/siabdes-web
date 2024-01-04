import { BackendResponseType } from "@/common/types";
import { BumdesOrganization, BumdesProfile } from ".";

export type UpdateBumdesProfileResponse = BackendResponseType<{
  id: string;
  updated_at: string;
}>;

export type GetBumdesProfileResponse = BackendResponseType<BumdesProfile>;

export type UpdateBumdesOrganizationResponse = BackendResponseType<{
  id: string;
  updated_at: string;
}>;

export type GetBumdesOrganizationResponse =
  BackendResponseType<BumdesOrganization>;
