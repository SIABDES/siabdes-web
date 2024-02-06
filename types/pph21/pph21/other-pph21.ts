import { z } from 'zod';
import { PPh21EmployeeBaseSchema } from '../general';

export const PPh21OtherActivityParticipantGrossSalarySchema = z.object({
  salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().positive())
    .or(z.number().positive()),
});

export const PPh21OtherNonEmployeeSupervisorGrossSalarySchema = z.object({
  salary: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number().positive())
    .or(z.number().positive()),
});

export const PPh21OtherGrossSalarySchema = z.union([
  PPh21OtherActivityParticipantGrossSalarySchema,
  PPh21OtherNonEmployeeSupervisorGrossSalarySchema,
]);

export type PPh21OtherGrossSalaryUnionFormData = z.infer<
  typeof PPh21OtherGrossSalarySchema
>;

export const PPh21OtherScema = PPh21EmployeeBaseSchema.extend({
  gross_salary: PPh21OtherGrossSalarySchema,
});

export const PPh21OtherActivityParticipantSchema = PPh21OtherScema.extend({
  gross_salary: PPh21OtherActivityParticipantGrossSalarySchema,
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

export const PPh21OtherNonEmployeeSupervisorSchema = PPh21OtherScema.extend({
  gross_salary: PPh21OtherNonEmployeeSupervisorGrossSalarySchema,
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

export const PPh21OtherUnionScema = z.union([
  PPh21OtherActivityParticipantSchema,
  PPh21OtherNonEmployeeSupervisorSchema,
]);

export type PPh21OtherFormData = z.infer<typeof PPh21OtherUnionScema>;

export type PPh21OtherActivityParticipantFormData = z.infer<
  typeof PPh21OtherActivityParticipantSchema
>;

export type PPh21OtherNonEmployeeSupervisorFormData = z.infer<
  typeof PPh21OtherNonEmployeeSupervisorSchema
>;
