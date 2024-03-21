import { z } from 'zod';
import { PPh21EmployeeBaseSchema } from '../general';

export const NotEmployeeGrossSalaryScema = z.object({
  salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().positive())
    .or(z.number().positive()),
  pkp: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().nonnegative())
    .or(z.number().nonnegative()),
});

export type NotEmployeeGrossSalaryFormData = z.infer<
  typeof NotEmployeeGrossSalaryScema
>;

export const NotEmployeeBaseScema = PPh21EmployeeBaseSchema.extend({
  gross_salary: NotEmployeeGrossSalaryScema,
});

export const NotEmployeeScema = NotEmployeeBaseScema.extend({
  gross_salary: NotEmployeeGrossSalaryScema,
  constants: z.object({
    tariff_pkp: z
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
    pph21_pkp: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    pph21_non_npwp: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    total_pph21_non_npwp: z
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
  }),
});

export type NotEmployeeFormData = z.infer<typeof NotEmployeeScema>;
