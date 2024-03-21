export type PPh21CalculationType = {
  // Penghasilan bruto
  upah_mingguan?: string;
  hari_kerja?: string;
  upah_per_hari?: string;
  frekuensi_upah?: string;
  total_upah?: string;

  // Penghasilan Pajak
  ptkp?: string;
  upah_kena_pajak?: string;
  pph21_terutang_sehari?: string;
  pph_21_atas_upah_mingguan?: string;
  penghasilan_disetahunkan?: string;
  penghasilan_tidak_kena_pajak?: string;
  penghasilan_kena_pajak?: string;
  pph_21_setahun?: string;
  pph_21_sebulan?: string;
  pph_21_seminggu?: string;
};
