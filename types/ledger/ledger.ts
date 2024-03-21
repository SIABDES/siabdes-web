export type LedgerType = {
  account_name: string;
  account_ref: string;
  account_is_credit: boolean;
  result_balance: number;
  _count: number;
  transactions: LedgerTransactionItemType[];
};

export type LedgerTransactionItemType = {
  id: string;
  amount: number;
  is_credit: boolean;
  occurred_at: string;
  description: string;
  account_name: string;
  calculation_result: number;
};
