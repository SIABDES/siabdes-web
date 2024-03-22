import { BackendResponseType, WithCount, WithPagination } from "@/common/types";
import { LedgerTransactionItemType, LedgerType } from ".";

export type GetLedgerByIdResponse = BackendResponseType<
  WithCount &
    WithPagination<string> &
    LedgerType & {
      next_cursor: string;
    }
>;
