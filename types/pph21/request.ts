import { z } from "zod";
import { EmployeesType } from "../employees/employees";

export const Pph21BasicSalarySchema = z.object({
  salary: z.number().positive("Gaji harus lebih dari 0"),
});

export const Pph21MonthlySalarySchema = z.object({
  daily_salary: z.number().positive("Gaji harian harus lebih dari 0"),
  monthly_salary: z.number().positive("Gaji bulanan harus lebih dari 0"),
  working_days: z.number().int().positive("Hari kerja harus lebih dari 0"),
});

export const Pph21PermanentEmployeeSalarySchema = z.object({
  salary: z.number().positive("Gaji harus lebih dari 0"),
  thr: z.number().nonnegative("Tunjangan hari raya tidak kurang dari 0"),
  bonus: z.number().nonnegative("Bonus tidak kurang dari 0"),
  allowance: z.number().nonnegative("Tunjangan tidak kurang dari 0"),
  overtime_salary: z.number().nonnegative("Lembur tidak kurang dari 0"),
  assurance: z.number().nonnegative("Premi tidak kurang dari 0"),
});

export const Pph21ResultSchema = z.object({
  total_salary: z.number().positive("Penghasilan bruto harus lebih dari 0"),
  total_pph21: z.number().nonnegative("PPh21 tidak kurang dari 0"),
  net_receipts: z.number().nonnegative("Penghasilan netto tidak kurang dari 0"),
});

export const Pph21PkpCalculationsSchema = z
  .object({
    ptkp: z.number().nonnegative("PTKP tidak boleh kurang dari 0").optional(),
    percentage: z
      .number()
      .nonnegative("Persentase tarif tidak boleh kurang dari 0")
      .optional(),
    amount: z.number().nonnegative("Jumlah tidak boleh kurang dari 0"),
    result: z.number().nonnegative("Hasil tidak boleh kurang dari 0"),
  })
  .refine(({ ptkp, percentage }) => {
    if (ptkp !== undefined && percentage !== undefined) {
      return false;
    }

    return true;
  }, "PTKP dan persentase tarif tidak boleh diisi bersamaan")
  .refine(({ ptkp, percentage }) => {
    if (ptkp === undefined && percentage === undefined) {
      return false;
    }

    return true;
  }, "PTKP atau persentase tarif tidak boleh kosong");

export const Pph21TariffSchema = z.object({
  tariff_percentage: z.number().nonnegative(),
  amount: z.number().nonnegative(),
  result: z.number().nonnegative(),
});

export const Pph21CalculationsSchema = z.array(Pph21TariffSchema).min(1);

export const Pph21NetCalculationsSchema = z.object({
  position_deduction: z
    .number()
    .nonnegative("Potongan jabatan tidak kurang dari 0"),
  annual_contribution: z
    .number()
    .nonnegative("Iuran tahunan tidak kurang dari 0"),
  annual_assurance: z.number().nonnegative("Premi tahunan tidak kurang dari 0"),
  result: z.number().nonnegative("Hasil tidak kurang dari 0"),
});

export const Pph21DecemberTaxableResultSchema = z.object({
  current_year_amount: z
    .number()
    .nonnegative("Jumlah tahun ini tidak kurang dari 0"),
  before_december_amount: z
    .number()
    .nonnegative("Jumlah sebelum desember tidak kurang dari 0"),
});

export const Pph21GrossSalarySchema = Pph21BasicSalarySchema.partial()
  .and(Pph21MonthlySalarySchema.partial())
  .and(Pph21PermanentEmployeeSalarySchema.partial());

export const Pph21MutationSchema = z.object({
  employee_id: z.string(),
  period_month: z
    .number()
    .int()
    .min(1, "Bulan tidak valid")
    .max(12, "Bulan tidak valid")
    .nullish()
    .refine(
      (value) => {
        if (value === null) {
          return false;
        }

        return true;
      },
      { message: "Bulan tidak boleh kosong" }
    ),
  period_years: z
    .number()
    .int()
    .min(1900, "Tahun harus lebih dari 1900")
    .max(2100, "Tahun harus kurang dari 2100"),
  employee_type: z.enum(
    [
      EmployeesType.PEGAWAI_TETAP,
      EmployeesType.BUKAN_PEGAWAI,
      EmployeesType.PESERTA_KEGIATAN,
      EmployeesType.PENGAWAS_NON_PEGAWAI,
      EmployeesType.DIBAYAR_BULANAN,
      EmployeesType.DIBAYAR_HARIAN,
      EmployeesType.DIBAYAR_BERKALA,
      EmployeesType.DIBAYAR_SEKALIGUS,
    ],
    {
      required_error: "Tipe pegawai tidak boleh kosong",
      invalid_type_error: "Tipe pegawai tidak diketahui",
    }
  ),
  gross_salary: Pph21GrossSalarySchema,
  pkp_calculations: Pph21PkpCalculationsSchema.optional(),
  net_calculations: Pph21NetCalculationsSchema.optional(),
  pph21_calculations: Pph21CalculationsSchema,
  pph21_december_taxable_result: Pph21DecemberTaxableResultSchema.optional(),
  result: Pph21ResultSchema,
});

export type PPh21PostPayloadRequest = z.infer<typeof Pph21MutationSchema>;
export type Pph21TaxDetails = PPh21PostPayloadRequest & {
  id: string;
  has_npwp: boolean;
  employee_id: string;
  created_at: Date;
};

export type Pph21TaxOverview = {
  id: string;
  employee_id: string;
  employee_type: EmployeesType;
  name: string;
  nik: string;
  npwp: string;
  period_month: number;
  period_years: number;
  gross_salary: number;
  pph21: number;
  status: string;
};
