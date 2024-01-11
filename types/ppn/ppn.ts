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
  TIDAK_KENA_PAJAK = 'NO_TAXES',
  KENA_PAJAK_DALAM_NEGERI = 'DOMESTIC_TAXES',
  KENA_PAJAK_LUAR_NEGERI = 'INTERNATIONAL_TAXES',
}

export const PpnTariffPercentageMap: Record<PpnTaxObjectType, number> = {
  NO_TAXES: 0,
  INTERNATIONAL_TAXES: 0,
  DOMESTIC_TAXES: 11,
};

export enum PpnItemType {
  BARANG = 'GOODS',
  JASA = 'SERVICE',
}

export enum PpnTransactionType {
  PEMBELIAN = 'PURCHASE',
  PENJUALAN = 'SALES',
}
