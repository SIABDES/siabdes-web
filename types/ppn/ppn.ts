// type untuk menambahkan perhitungan nilai object ppn
export type PpnTransactionFormDataType = {
  unique_id: string;
  name: string | undefined;
  type: string | undefined;
  price: number;
  amount: number;
  total_price: number;
  discount: number;
  dpp: number;
  tax: number;
  ppn: number;
};

export enum PpnTaxObjectType {
  TIDAK_KENA_PAJAK = "NO_TAXES",
  KENA_PAJAK_DALAM_NEGERI = "DOMESTIC_TAXES",
  KENA_PAJAK_LUAR_NEGERI = "INTERNATIONAL_TAXES",
}

export const PpnTariffPercentageMap: Record<PpnTaxObjectType, number> = {
  NO_TAXES: 0,
  INTERNATIONAL_TAXES: 0,
  DOMESTIC_TAXES: 11,
};

export enum PpnItemType {
  BARANG = "GOODS",
  JASA = "SERVICE",
}

export enum PpnTransactionType {
  PEMBELIAN = "PURCHASE",
  PENJUALAN = "SALES",
}

export type PpnTransaction = {
  id: string;
  given_to: string;
  item_type: PpnItemType;
  transaction_type: PpnTransactionType;
  transaction_date: string;
  transaction_number: string;
  tax_object: PpnTaxObjectType;
  total_ppn: number;
  total_dpp: number;
};

export type PpnObjectItem = {
  id: string;
  name: string;
  quantity: string;
  price: string;
  discount: string;
  total_price: string;
  dpp: string;
  ppn: string;
};
