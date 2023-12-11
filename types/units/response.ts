import { BackendResponseType } from "@/common/types";

export type NewUnitResponse = BackendResponseType<{
  unitId: string;
  bumdesId: string;
}>;
