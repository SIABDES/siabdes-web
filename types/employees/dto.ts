import { z } from 'zod';
import {
  EmployeesChildrenAmount,
  EmployeesExistenceNPWP,
  EmployeesGender,
  EmployeesMarriageStatus,
  EmployeesNPWPStatus,
  EmployeesStatus,
  EmployeesType,
} from './employees';

export const EmployeesSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  gender: z.enum([EmployeesGender.PRIA, EmployeesGender.WANITA]),
  nik: z.string().min(1),
  start_working_at: z.date(),
  npwp: z.string().min(1),
  // existence_npwp: z.enum([
  //   EmployeesExistenceNPWP.ADA,
  //   EmployeesExistenceNPWP.TIDAK_ADA,
  // ]), //tambahan
  npwp_status: z.enum([
    EmployeesNPWPStatus.DIGABUNG_DENGAN_SUAMI,
    EmployeesNPWPStatus.DIPISAH_DENGAN_SUAMI,
  ]),
  marriage_status: z.enum([
    EmployeesMarriageStatus.KAWIN,
    EmployeesMarriageStatus.BELUM_KAWIN,
  ]),
  children_amount: z.enum([
    EmployeesChildrenAmount.TIDAK_ADA,
    EmployeesChildrenAmount.SATU,
    EmployeesChildrenAmount.DUA,
    EmployeesChildrenAmount.TIGA,
  ]),
  employee_status: z.enum([
    EmployeesStatus.KARYAWAN_BARU,
    EmployeesStatus.KARYAWAN_LAMA,
  ]),
  employee_type: z.enum([
    EmployeesType.PEGAWAI_TETAP,
    EmployeesType.DIBAYAR_BULANAN,
    EmployeesType.DIBAYAR_HARIAN,
    EmployeesType.BUKAN_PEGAWAI,
    EmployeesType.DIBAYAR_BERKALA,
    EmployeesType.DIBAYAR_SEKALIGUS,
    EmployeesType.PESERTA_KEGIATAN,
    EmployeesType.PENGAWAS_NON_PEGAWAI,
  ]),
});

export type EmployeeFormDataType = z.infer<typeof EmployeesSchema>;
