export type PPh21CalculationType = {
  // Penghasilan bruto
  pensiun_sebulan?: string;

  // Penghasilan neto
  biaya_pensiun?: string;
  iuran_dibayar?: string;
  penghasilan_neto?: string;

  // Penghasilan Pajak
  masa_penghasilan?: string;
  penghasilan_neto_disetahunkan?: string;
  penghasilan_tidak_kena_pajak?: string;
  penghasilan_kena_pajak?: string;
  pph_21_setahun?: string;
  pph_21_atas_pensiun_bulan_ini?: string;
};
