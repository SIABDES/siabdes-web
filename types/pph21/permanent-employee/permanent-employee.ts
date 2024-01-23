import { z } from "zod";

export type Pph21TaxPeriodMonth =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export const LaborDataSchema = z.object({
  nik: z.number().min(1),
  name: z.string().min(1),
  npwp: z.number().min(1),
  gender: z.string().min(1),
  tax_period: z.string().min(1),
  status_ptkp: z.string().min(1),
  category: z.string().min(1),
  ptkp: z.number().min(1),
});

export const GrossIncomeJanNevSchema = z.object({
  salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  allowance: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  thr: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  bonus: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  overtime_salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  assurance: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  gross_income: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
});

export const GrossIncomeDecSchema = z.object({
  salary_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  allowance_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  thr_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  bonus_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  overtime_salary_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  assurance_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  gross_total: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
});

export const GrossIncomeScema = z.union([
  GrossIncomeJanNevSchema,
  GrossIncomeDecSchema,
]);

export const NetCalculationSchema = z.object({
  position_allowance: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  annual_fee: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  assurance: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  net_income: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
});

export const PKPCalculationSchema = z.object({
  non_taxable_income: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  taxable_income: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
});

export const PPh21CutInDecember = z.object({
  pph21_payable: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  pph21_deducted_until_november: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
  pph21_deducted_until_december: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative()),
});

export const PermanentEmployeeSchema = z.object({
  constants: z.object({
    tariff_ter: z.number().nonnegative(),
    tariff_tax_non_npwp: z.number().nonnegative(),
  }),
  calculations: z.object({
    pph21_has_npwp: z.number().nonnegative(),
    pph21_non_npwp: z.number().nonnegative(),
  }),
  period: z.object({
    month: z.number().int().min(1).max(12),
    years: z.number().int(),
  }),
  gross_salary: GrossIncomeScema,
  net_calculations: NetCalculationSchema,
  pkp_calculations: PKPCalculationSchema,
  pph21_cut_in_december: PPh21CutInDecember,
  result: z.object({
    total_pph21: z.number().nonnegative(),
    total_salary: z.number().nonnegative(),
    net_receipts: z.number().nonnegative(),
    total_salary_dec: z.number().nonnegative(),
    total_pph21_dec: z.number().nonnegative(),
    net_receipts_dec: z.number().nonnegative(),
  }),
});

export type PermanentEmployeeFormData = z.infer<typeof PermanentEmployeeSchema>;
// export type GrossIncomeFormData = z.infer<typeof GrossIncomeJanNevSchema>;
