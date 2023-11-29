import { AmountType } from "./account";

export type WtbSummaryType = {
  sum: SumType;
  laba_rugi_bersih: LabaRugiBersihType;
  total: TotalType;
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
