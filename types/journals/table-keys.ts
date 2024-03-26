import { JournalTransactionType, JournalType } from './journal';

export type JournalsTransactionItemDataType = JournalType &
  JournalTransactionType & {
    no: number;
    is_debit: boolean;
  };

export type JournalsDataType = JournalType & {
  transactions: JournalsTransactionItemDataType[];
};
