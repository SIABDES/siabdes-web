import { z } from 'zod';
import { PPh21EmployeeBaseSchema } from '../general';

export const NonPermanentEmployeeMonthlyGrossSalaryScema = z.object({
  daily_salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().positive())
    .or(z.number().positive()),
  monthly_salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().positive())
    .or(z.number().positive()),
  working_days: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().positive())
    .or(z.number().positive()),
});

export const NonPermanentEmployeeNotMonthlyGrossSalaryScema = z.object({
  salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().positive())
    .or(z.number().positive()),
});

export const NonPermanentEmployeeGrossSalaryScema = z.union([
  NonPermanentEmployeeMonthlyGrossSalaryScema,
  NonPermanentEmployeeNotMonthlyGrossSalaryScema,
]);

export type NonPermanentEmployeeGrossSalaryUnionFormData = z.infer<
  typeof NonPermanentEmployeeGrossSalaryScema
>;

export const NonPermanentEmployeeBaseScema = PPh21EmployeeBaseSchema.extend({
  gross_salary: NonPermanentEmployeeGrossSalaryScema,
});

export const NonPermanentEmployeeMonthlyScema =
  NonPermanentEmployeeBaseScema.extend({
    gross_salary: NonPermanentEmployeeMonthlyGrossSalaryScema,
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

export const NonPermanentEmployeeNotMonthlyScema =
  NonPermanentEmployeeBaseScema.extend({
    gross_salary: NonPermanentEmployeeNotMonthlyGrossSalaryScema,
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
      tariff_chapter_17_5_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      tariff_chapter_17_15_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      tariff_chapter_17_25_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      tariff_chapter_17_30_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      tariff_chapter_17_35_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
    }),

    calculations: z.object({
      pph21_has_npwp_less_then_450: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      pph21_has_npwp_more_then_450: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      pph21_has_npwp_more_then_2500: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      pph21_chapter_17_5_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      pph21_chapter_17_15_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      pph21_chapter_17_25_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      pph21_chapter_17_30_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      pph21_chapter_17_35_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      total_pph21_chapter_17_5_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      total_pph21_chapter_17_15_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      total_pph21_chapter_17_25_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      total_pph21_chapter_17_30_percent: z
        .string()
        .transform((val) => Number(val))
        .pipe(z.number().nonnegative())
        .or(z.number().nonnegative()),
      total_pph21_chapter_17_35_percent: z
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

export const NonPermanentEmployeeUnionScema = z.union([
  NonPermanentEmployeeMonthlyScema,
  NonPermanentEmployeeNotMonthlyScema,
]);

export type NonPermanentEmployeeFormData = z.infer<
  typeof NonPermanentEmployeeUnionScema
>;

export type NonPermanentEmployeeMonthlyFormData = z.infer<
  typeof NonPermanentEmployeeMonthlyScema
>;

export type NonPermanentEmployeeNotMonthlyFormData = z.infer<
  typeof NonPermanentEmployeeNotMonthlyScema
>;
