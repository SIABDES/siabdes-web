import { BackendResponseType } from "@/common/types";
import {
  Employee,
  EmployeeCurrentTerTariff,
  EmployeeOverview,
} from "./employees";
import { Pph21TaxOverview } from "../pph21/request";

export type EmployeesOverviewResponse = {
  _count: number;
  employees: EmployeeOverview[];
};

export type GetEmployeesResponse =
  BackendResponseType<EmployeesOverviewResponse>;

export type GetEmployeeDetailsResponse = BackendResponseType<Employee>;

export type AddEmployeeDataResponse = BackendResponseType<{
  id: string;
  created_at: string;
}>;

export type UpdateEmployeeDataResponse = BackendResponseType<{
  id: string;
  updated_at: string;
}>;

export type GetEmployeeTerResponse =
  BackendResponseType<EmployeeCurrentTerTariff>;

export type GetEmployeeTaxesResponse = BackendResponseType<{
  _count: number;
  _total: {
    gross_salary: number;
    net_salary: number;
    pph21: number;
  };
  taxes: Pph21TaxOverview[];
}>;
