import { z } from "zod";

export enum Pph21TaxPeriodMonth {
  JANUARY = 1,
  FEBRUARY = 2,
  MARCH = 3,
  APRIL = 4,
  MAY = 5,
  JUNE = 6,
  JULY = 7,
  AUGUST = 8,
  SEPTEMBER = 9,
  OCTOBER = 10,
  NOVEMBER = 11,
  DECEMBER = 12,
}

export const PPh21EmployeeBaseSchema = z.object({
  employee_id: z.string(),
  period: z.object({
    month: z.nativeEnum(Pph21TaxPeriodMonth),
    years: z.number().int().positive(),
  }),
  result: z.object({
    total_pph21: z.number().nonnegative(),
    total_salary: z.number().nonnegative(),
    net_receipts: z.number().nonnegative(),
  }),
});

export type PPh21EmployeeBaseFormData = z.infer<typeof PPh21EmployeeBaseSchema>;
