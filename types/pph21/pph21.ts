import { EmployeesStatus, EmployeesType } from "../employees/employees";

export type Pph21EmployeeTaxOverview = {
  id: string;
  employee_id: string;
  employee_type: EmployeesType;
  name: string;
  nik: string;
  npwp: string | undefined;
  status: EmployeesStatus;
  gross_salary: number;
  pph21: number;
  period: {
    month: number;
    years: number;
  };
};
