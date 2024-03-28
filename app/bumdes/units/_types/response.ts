import { BackendResponseType } from "@/common/types";
import { UnitBusinessType } from "./common";

type BumdesUnitOverview = {
  id: string;
  name: string;
  business_type: UnitBusinessType;
  created_at: string;
};

export type GetAllUnitsResponse = { response: Response } & BackendResponseType<{
  _count: number;
  units: BumdesUnitOverview[];
}>;

export type AddUnitResponse = BackendResponseType<{
  id: string;
  created_at: string;
}>;
