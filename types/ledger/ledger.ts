import { WithCount, WithPagination } from "@/common/types";

export type LedgerType = WithCount &
  WithPagination<string> & {
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
