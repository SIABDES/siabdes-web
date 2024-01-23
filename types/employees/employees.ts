export enum EmployeesGender {
  PRIA = "MALE",
  WANITA = "FEMALE",
}

export enum EmployeesExistenceNPWP {
  ADA = "EXIST",
  TIDAK_ADA = "NOT_EXIST",
}

export enum EmployeesNPWPStatus {
  DIGABUNG_DENGAN_SUAMI = "MERGED_WITH_HUSBAND",
  DIPISAH_DENGAN_SUAMI = "SEPARATED_WITH_HUSBAND",
}

export enum EmployeesMarriageStatus {
  KAWIN = "MARRIED",
  BELUM_KAWIN = "NOT_MARRIED",
}

export enum EmployeesChildrenAmount {
  TIDAK_ADA = "NONE",
  SATU = "ONE",
  DUA = "TWO",
  TIGA = "THREE",
}

export enum EmployeesStatus {
  KARYAWAN_BARU = "NEW",
  KARYAWAN_LAMA = "OLD",
}

export enum EmployeesType {
  PEGAWAI_TETAP = "PERMANENT_MONTHLY",
  DIBAYAR_BULANAN = "NON_PERMANENT_MONTHLY",
  DIBAYAR_HARIAN = "NON_PERMANENT_NOT_MONTHLY",
  BUKAN_PEGAWAI = "NON_EMPLOYEE",
  DIBAYAR_BERKALA = "SEVERANCE_PERIODICAL",
  DIBAYAR_SEKALIGUS = "SEVERANCE_OUTRIGHT",
  PESERTA_KEGIATAN = "OTHER_ACTIVITY_MEMBER",
  PENGAWAS_NON_PEGAWAI = " OTHER_SUPERVISOR_NON_EMPLOYEE",
}

export type Employee = {
  id: string;
  name: string;
  gender: EmployeesGender;
  nik: string;
  npwp: string;
  npwp_status: EmployeesNPWPStatus;
  marriage_status: EmployeesMarriageStatus;
  children_amount: EmployeesChildrenAmount;
  employee_status: EmployeesStatus;
  employee_type: EmployeesType;
  start_working_at: string;
};

export type EmployeeOverview = {
  id: string;
  name: string;
  nik: string;
  employee_type: EmployeesType;
};
