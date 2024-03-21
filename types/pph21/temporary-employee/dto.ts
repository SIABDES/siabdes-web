import { z } from 'zod';

export const GrossSalaryScema = z.object({
  daily_income: z.number().min(1),
  working_days: z.number().min(1),
  monthly_income: z.number().min(1),
});

export const TaxPPh21CalculationScema = z.object({
  ter: z.number().min(1),
  gross_salary: z.number().min(1),
  pph_21: z.number().min(1),
  tarif: z.number().min(1),
  pph_21_no_npwp: z.number().min(1),
  total: z.number().min(1),
});
