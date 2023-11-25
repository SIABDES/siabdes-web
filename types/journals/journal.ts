import { JournalCategoryType } from ".";

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
  occured_at: Date | string;
  evidence: string;
  data_transactions: JournalTransactionType[];
};
