import { JournalCategoryType } from '.';

export type GeneralJournalTransactionType = {
  account_id: number;
  amount: number;
  is_credit: boolean;
};

export type GeneralJournalType = {
  id: string;
  category: JournalCategoryType;
  description: string;
  occured_at: Date | string;
  evidence: string;
  data_transactions: GeneralJournalTransactionType[];
};
