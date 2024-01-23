import { z } from "zod";
import { PPh21EmployeeBaseSchema, Pph21TaxPeriodMonth } from "../general";

export const PermanentEmployeeGrossIncomeJanNovSchema = z.object({
  salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().positive())
    .or(z.number().positive()),
  allowance: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  thr: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  bonus: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  overtime_salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  assurance: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  gross_income: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
});

export const PermanentEmployeeGrossIncomeDecSchema = z.object({
  salary_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  allowance_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  thr_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  bonus_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  overtime_salary_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  assurance_dec: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  gross_total: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
});

export const PermanentEmployeeGrossIncomeSchema = z.union([
  PermanentEmployeeGrossIncomeJanNovSchema,
  PermanentEmployeeGrossIncomeDecSchema,
]);

export type PermanentEmployeeGrossIncomeUnionFormData = z.infer<
  typeof PermanentEmployeeGrossIncomeSchema
>;

export const NetCalculationSchema = z.object({
  position_allowance: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  annual_fee: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  assurance: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  net_income: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
});

export const PKPCalculationSchema = z.object({
  non_taxable_income: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  taxable_income: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
});

export const PPh21CutInDecember = z.object({
  pph21_payable: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  pph21_deducted_until_november: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
  pph21_deducted_until_december: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
});

export const PermanentEmployeeBaseSchema = PPh21EmployeeBaseSchema.extend({
  period: z.object({
    month: z.union([
      z.literal(Pph21TaxPeriodMonth.JANUARY),
      z.literal(Pph21TaxPeriodMonth.FEBRUARY),
      z.literal(Pph21TaxPeriodMonth.MARCH),
      z.literal(Pph21TaxPeriodMonth.APRIL),
      z.literal(Pph21TaxPeriodMonth.MAY),
      z.literal(Pph21TaxPeriodMonth.JUNE),
      z.literal(Pph21TaxPeriodMonth.JULY),
      z.literal(Pph21TaxPeriodMonth.AUGUST),
      z.literal(Pph21TaxPeriodMonth.SEPTEMBER),
      z.literal(Pph21TaxPeriodMonth.OCTOBER),
      z.literal(Pph21TaxPeriodMonth.NOVEMBER),
    ]),
    years: z.number().int().positive(),
  }),
  gross_salary: PermanentEmployeeGrossIncomeSchema,
  net_calculations: NetCalculationSchema,
  pkp_calculations: PKPCalculationSchema,
});

export const PermanentEmployeeBeforeDecemberSchema =
  PermanentEmployeeBaseSchema.extend({
    gross_salary: PermanentEmployeeGrossIncomeJanNovSchema,
    constants: z.object({
      tariff_ter: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      tariff_tax_non_npwp: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
    }),
    calculations: z.object({
      pph21_has_npwp: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      pph21_non_npwp: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
    }),
  });

export const PermanentEmployeeDecemberSchema =
  PermanentEmployeeBaseSchema.extend({
    pph21_cut_in_december: PPh21CutInDecember,
    period: z.object({
      month: z.literal(Pph21TaxPeriodMonth.DECEMBER),
      years: z.number().int().positive(),
    }),
  });

export const PermanentEmployeeUnionSchema = z.union([
  PermanentEmployeeBeforeDecemberSchema,
  PermanentEmployeeDecemberSchema,
]);

export type PermanentEmployeeFormData = z.infer<
  typeof PermanentEmployeeUnionSchema
>;
export type PermanentEmployeeBeforeDecemberFormData = z.infer<
  typeof PermanentEmployeeBeforeDecemberSchema
>;
export type PermanentEmployeeDecemberFormData = z.infer<
  typeof PermanentEmployeeDecemberSchema
>;
