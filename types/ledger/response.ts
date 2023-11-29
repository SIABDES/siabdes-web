import { BackendResponseType } from "@/common/types";
import { LedgerTransactionItemType, LedgerType } from ".";

export type GetLedgerByIdResponse = BackendResponseType<
  LedgerType & {
    next_cursor: string;
  }
>;
