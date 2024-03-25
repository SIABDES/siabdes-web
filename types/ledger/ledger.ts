export type LedgerType = {
  account_is_credit: boolean;
  last_balance: number;
  result_balance: number;
  transactions: LedgerTransactionItemType[];
};

export type LedgerTransactionItemType = {
  id: string;
  occurred_at: string;
  description: string;
  is_credit: boolean;
  amount: number;
  previous_balance: number;
  result_balance: number;
};

export type LedgerAccountDetailType = {
  account_id: number;
  account_name: string;
  account_ref: string;
  account_group_ref: string;
  account_subgroup_ref: string;
  account_is_credit: boolean;
  transaction_count: number;
  result_balance: number;
  transactions: LedgerTransactionItemType[];
};
