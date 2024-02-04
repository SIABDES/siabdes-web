import { z } from 'zod';
import { PPh21EmployeeBaseSchema } from '../general';

export const SeverencePayOneTimeGrossSalaryScema = z.object({
  gross_salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().positive())
    .or(z.number().positive()),
});

export const SeverencePayPeriodicGrossSalaryScema = z.object({
  gross_salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().positive())
    .or(z.number().positive()),
});

export const SeverencePayGrossSalaryScema = z.union([
  SeverencePayOneTimeGrossSalaryScema,
  SeverencePayPeriodicGrossSalaryScema,
]);

export type SeverencePayGrossSalaryUnionFormData = z.infer<
  typeof SeverencePayGrossSalaryScema
>;

export const SeverencePayBaseScema = PPh21EmployeeBaseSchema.extend({
  gross_salary: SeverencePayGrossSalaryScema,
});

export const SeverencePayOneTimeScema = SeverencePayBaseScema.extend({
  gross_salary: SeverencePayOneTimeGrossSalaryScema,
  constants: z.object({
    tariff_0_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    tariff_5_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    tariff_15_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    tariff_25_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
  }),
  calculations: z.object({
    pph21_0_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    pph21_5_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    pph21_15_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    pph21_25_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    total_pph21_0_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    total_pph21_5_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    total_pph21_15_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
    total_pph21_25_percent: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
  }),
});

export const SeverencePayPeriodicScema = SeverencePayBaseScema.extend({
  gross_salary: SeverencePayPeriodicGrossSalaryScema,
  constants: z.object({
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
    tariff_tax_non_npwp: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
  }),
  calculations: z.object({
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
    total_pph21_non_npwp: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().nonnegative())
      .or(z.number().nonnegative()),
  }),
});

export const SeverencePayUnionScema = z.union([
  SeverencePayOneTimeScema,
  SeverencePayPeriodicScema,
]);

export type SeverencePayFormData = z.infer<typeof SeverencePayUnionScema>;

export type SeverencePayOneTimeFormData = z.infer<
  typeof SeverencePayOneTimeScema
>;

export type SeverencePayPeriodicFormData = z.infer<
  typeof SeverencePayPeriodicScema
>;
