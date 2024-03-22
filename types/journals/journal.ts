import { JournalCategoryType } from '.';

export type JournalTransactionType = {
  account_id: number;
  amount: number;
  is_credit: boolean;
  account_ref: string;
  account_name: string;
};

export type JournalType = {
  id: string;
  category: JournalCategoryType;
  description: string;
  occurred_at: Date | string;
  updated_at: Date | string;
  created_at: Date | string;
  evidence: string;
  data_transactions: JournalTransactionType[];
};

export type JournalTransactionFormDataType = {
  unique_id: string;
  account_id: number | undefined;
  credit: number;
  debit: number;
};
