import { z } from "zod";
import {
  AddGeneralJournalRequestSchema,
  JournalInputItemSchema,
} from "./validators";

export type AddGeneralJournalRequest = z.infer<
  typeof AddGeneralJournalRequestSchema
>;
export type JournalInputItem = z.infer<typeof JournalInputItemSchema>;
