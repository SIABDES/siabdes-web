import { BackendResponseType, WithCount, WithPagination } from "@/common/types";
import { LedgerAccountDetailType, LedgerType } from ".";

export type GetLedgerByIdResponse = BackendResponseType<
  WithCount &
    WithPagination<string> &
    LedgerType & {
      next_cursor: string;
    }
>;

export type GetAllLedgersResponse = BackendResponseType<
  WithPagination<string> & {
    _count: number;
    accounts: LedgerAccountDetailType[];
  }
>;
