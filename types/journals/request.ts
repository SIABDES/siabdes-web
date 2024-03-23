import { z } from "zod";
import {
  MutationJournalRequestSchema,
  JournalInputItemSchema,
} from "./validators";

export type MutationJournalRequest = z.infer<
  typeof MutationJournalRequestSchema
>;
export type JournalInputItem = z.infer<typeof JournalInputItemSchema>;

export type JournalInputItemOld = {
  account_id: number;
  amount: number;
  is_credit: boolean;
};
