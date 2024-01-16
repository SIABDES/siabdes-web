import { z } from 'zod';

export const EmployeesScema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  gender: z.string().min(1),
  nik: z.number().min(1),
  npwp: z.number().min(1),
  npwp_status: z.string().min(1),
  marriage_status: z.string().min(1),
  children_amount: z.number().min(1),
  employee_status: z.string().min(1),
  employee_type: z.string().min(1),
  start_working_at: z.string().min(1),
});

export type EmployessFormDataType = z.infer<typeof EmployeesScema>;
