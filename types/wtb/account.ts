// export type WtbType = {
//   accounts: WtbAccountsType[];
// };

export type WtbType = {
  account: AccountType;
  result: ResultType;
};

export type AccountType = {
  id: string;
  name: string;
  is_credit: boolean;
  ref: RefType;
  is_posisi_keuangan: boolean;
};
export type RefType = {
  account_ref: string;
  complete_ref: string;
  group_ref: string;
};

export type ResultType = {
  neraca_saldo: AmountType;
  penyesuaian: AmountType;
  neraca_setelahnya: AmountType;
  laba_rugi: AmountType;
  posisi_keuangan: AmountType;
};
export type AmountType = {
  credit: number;
  debit: number;
};
