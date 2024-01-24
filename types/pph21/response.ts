import { BackendResponseType } from "@/common/types";
import { Pph21EmployeeTaxOverview } from "./pph21";

export type AddPph21Response = BackendResponseType<{
  id: string;
  created_at: string;
}>;

export type GetManyPph21Response = BackendResponseType<{
  _count: number;
  taxes: Pph21EmployeeTaxOverview[];
}>;
