import { EmployeesType } from "../employees/employees";

export type PPh21PostPayloadRequest<T extends object> = {
  employee_type: EmployeesType;
  period: {
    month: number;
    years: number;
  };
  gross_salary: T;
  result: {
    total_pph21: number;
    total_salary: number;
    net_receipts: number;
  };
};
