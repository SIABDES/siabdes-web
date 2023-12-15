import { BackendResponseType, WithCount, WithPagination } from "@/common/types";
import { BumdesUnitType } from "../bumdes";

export type NewUnitResponse = BackendResponseType<{
  unitId: string;
  bumdesId: string;
}>;

export type GetUnitsResponse = BackendResponseType<
  WithPagination<string> &
    WithCount & {
      units: BumdesUnitType[];
    }
>;
