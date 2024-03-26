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
  unit_id: string;
  category: JournalCategoryType;
  description: string;
  occurred_at: Date | string;
  evidence?: string;
  updated_at: Date | string;
  created_at: Date | string;
  transaction_amount: number;
  data_transactions: JournalTransactionType[];
};

export type JournalTransactionFormDataType = {
  unique_id: string;
  account_id: number | undefined;
  credit: number;
  debit: number;
};

export type JournalsPrint = {
  id: string;
  date: Date | string;
  account_name: string;
  account_ref: string;
  debit: number;
  credit: number;
};
