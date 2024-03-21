import { AmountType } from "./account";

export type WtbSummaryType = {
  sum: SumType;
  laba_rugi_bersih: LabaRugiBersihType;
  total: TotalType;
  total_subGroup: subGroupType;
};
export type subGroupType = {
  aset_lancar: number;
  aset_tidak_lancar: number;
  aset_tidak_berwujud: number;
  aset_lainnya: number;
  liabilitas_jangka_pendek: number;
  liabilities_jangka_panjang: number;
  ekuitas: number;
  pendapatan_operasional: number;
  pendapatan_rupa_rupa: number;
  beban_pokok_penjualan: number;
  beban_operasional: number;
  pendapatan_non_operasional: number;
  beban_non_operasional: number;
};

export type SumType = {
  penyesuaian: AmountType;
  neraca_saldo: AmountType;
  neraca_setelahnya: AmountType;
  laba_rugi: AmountType;
  posisi_keuangan: AmountType;
};
export type LabaRugiBersihType = {
  laba_rugi: AmountType;
  posisi_keuangan: AmountType;
};
export type TotalType = {
  penyesuaian: AmountType;
  neraca_saldo: AmountType;
  neraca_setelahnya: AmountType;
  laba_rugi: AmountType;
  posisi_keuangan: AmountType;
};
