import { z } from 'zod';

export const PermanentEmployeeSchema = z.object({
  nik: z.number().min(1),
  name: z.string().min(1),
  npwp: z.number().min(1),
  gender: z.string().min(1),
  tax_period: z.string().min(1),
  status_ptkp: z.string().min(1),
  category: z.string().min(1),
  ptkp: z.number().min(1),
});

export const GrossIncomeSchema = z.object({
  salary: z.number().min(1),
  allowance: z.number().min(1),
  thr: z.number().min(1),
  bonus: z.number().min(1),
  overtime_salary: z.number().min(1),
  premi: z.number().min(1),
  gross_income: z.number().min(1),
});

export type PermanentEmployeeFormData = z.infer<typeof PermanentEmployeeSchema>;
export type GrossIncomeFormData = z.infer<typeof GrossIncomeSchema>;
