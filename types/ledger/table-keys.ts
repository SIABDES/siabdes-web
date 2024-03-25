import { LedgerAccountDetailType, LedgerTransactionItemType } from "./ledger";

export type LedgerTransactionItemDataType = LedgerTransactionItemType & {
  no: number;
  is_debit: boolean;
};

export type LedgerDataType = LedgerAccountDetailType & {
  transactions: LedgerTransactionItemDataType[];
};
