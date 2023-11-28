import { BackendResponseType } from "@/common/types";
import { JournalCategoryType, JournalType } from ".";

export type JournalDetailsResponse = JournalType;

export type JournalResponse = {
  journals: JournalType[];
};

export type JournalResponseWithCount = {
  journals: JournalType[];
  _count: number;
};

export type GetGeneralJournalsResponse =
  BackendResponseType<JournalResponseWithCount>;

export type GetAdjustmentJournalsResponse =
  BackendResponseType<JournalResponseWithCount>;

export type AddGeneralJournalResponse = BackendResponseType<{
  id: string;
  category: JournalCategoryType;
}>;

export type AddAdjustmentJournalResponse = BackendResponseType<{
  id: string;
  category: JournalCategoryType;
}>;
