import { z } from 'zod';
import { EmployeesStatus, EmployeesType } from '../employees/employees';
import {
  PPh21PostPayloadRequest,
  Pph21CalculationsSchema,
  Pph21NetCalculationsSchema,
  Pph21PkpCalculationsSchema,
  Pph21ResultSchema,
} from './request';

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
  period_month: number;
  period_years: number;
};

export type Pph21TaxDetails = PPh21PostPayloadRequest & {
  id: string;
  has_npwp: boolean;
  created_at: Date;
  name: string;
  gender: string;
  nik: string;
  npwp: string;
  ptkp_status: string;
  ter_category: string;
};

export type Pph21PkpCalculationsType = z.infer<
  typeof Pph21PkpCalculationsSchema
>;
export type Pph21NetCalculationsType = z.infer<
  typeof Pph21NetCalculationsSchema
>;
export type Pph21CalculationsType = z.infer<typeof Pph21CalculationsSchema>;
export type Pph21ResultType = z.infer<typeof Pph21ResultSchema>;
