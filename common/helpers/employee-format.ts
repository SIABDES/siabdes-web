export const formatEmployeeStatus = (status: string) => {
  switch (status) {
    case 'NEW':
      return 'Karyawan Baru';
    case 'OLD':
      return 'Karyawan Lama';
    default:
      return status;
  }
};

export const formatEmployeeGender = (gender: string) => {
  switch (gender) {
    case 'MALE':
      return 'Laki-laki';
    case 'FEMALE':
      return 'Perempuan';
    default:
      return gender;
  }
};

export const formatEmployeeMarriageStatus = (status: string) => {
  switch (status) {
    case 'MARRIED':
      return 'Kawin';
    case 'NOT_MARRIED':
      return 'Belum Kawin';
    default:
      return status;
  }
};

export const formatEmployeeExistenceNPWP = (existence: string) => {
  switch (existence) {
    case 'EXIST':
      return 'Ada';
    case 'NOT_EXIST':
      return 'Tidak Ada';
    default:
      return existence;
  }
};

export const formatEmployeeNPWPStatus = (status: string) => {
  switch (status) {
    case 'MERGED_WITH_HUSBAND':
      return 'Digabung dengan Suami';
    case 'SEPARATED_WITH_HUSBAND':
      return 'Dipisah dengan Suami';
    default:
      return status;
  }
};

export const formatEmployeeChildrenAmount = (amount: string) => {
  switch (amount) {
    case 'NONE':
      return 'Tidak Ada';
    case 'ONE':
      return '1';
    case 'TWO':
      return '2';
    case 'THREE':
      return '3';
    default:
      return amount;
  }
};

export const formatEmployeeType = (type: string) => {
  switch (type) {
    case 'PERMANENT_MONTHLY':
      return 'Pegawai Tetap';
    case 'NON_PERMANENT_MONTHLY':
      return 'Dibayar Bulanan';
    case 'NON_PERMANENT_NOT_MONTHLY':
      return 'Dibayar Harian';
    case 'NON_EMPLOYEE':
      return 'Bukan Pegawai';
    case 'SEVERANCE_PERIODICAL':
      return 'Dibayar Berkala';
    case 'SEVERANCE_OUTRIGHT':
      return 'Dibayar Sekaligus';
    case 'OTHER_ACTIVITY_MEMBER':
      return 'Peserta Kegiatan';
    case 'OTHER_SUPERVISOR_NON_EMPLOYEE':
      return 'Pengawas Non Pegawai';
    default:
      return type;
  }
};
