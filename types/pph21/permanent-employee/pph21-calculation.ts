export type PPh21CalculationType = {
  // Penghasilan bruto
  gaji_pokok?: string;
  tunjangan_tetap?: string;
  bonus?: string;
  thr?: string;
  tunjangan_pph?: string;
  jumlah_premi?: string;
  jumlah_bruto?: string;

  // PPenghasilan Neto
  biaya_jabatan?: string;
  iuran_dibayar?: string;
  penghasilan_neto?: string;

  // Penghasilan Pajak
  penghasilan_neto_disetahunkan?: string;
  penghasilan_tidak_kena_pajak?: string;
  penghasilan_kena_pajak?: string;
  pph_21_setahun?: string;
  pph_21_bulan_ini?: string;
};
