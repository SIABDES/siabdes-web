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
