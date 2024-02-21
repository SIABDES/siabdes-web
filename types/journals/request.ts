import { z } from "zod";
import { AddJournalRequestSchema, JournalInputItemSchema } from "./validators";

export type AddJournalRequest = z.infer<typeof AddJournalRequestSchema>;
export type JournalInputItem = z.infer<typeof JournalInputItemSchema>;

export type JournalInputItemOld = {
  account_id: number;
  amount: number;
  is_credit: boolean;
};
