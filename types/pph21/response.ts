import { BackendResponseType } from "@/common/types";
import { Pph21EmployeeTaxOverview, Pph21TaxDetails } from "./pph21";

export type AddPph21Response = BackendResponseType<{
  id: string;
  created_at: string;
}>;

export type GetManyPph21Response = BackendResponseType<{
  _count: number;
  taxes: Pph21EmployeeTaxOverview[];
}>;

export type UpdatePPh21Response = BackendResponseType<{
  id: string;
  updated_at: string;
}>;

export type GetDetailsPph21Response = BackendResponseType<Pph21TaxDetails>;
