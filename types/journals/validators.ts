import { z } from "zod";

export const JournalInputItemSchema = z.object({
  account_id: z.number(),
  amount: z.number().min(1),
  is_credit: z.boolean(),
});

export const AddGeneralJournalRequestSchema = z.object({
  description: z.string({ required_error: "Deskripsi tidak boleh kosong!" }),
  occured_at: z
    .date({ required_error: "Tanggal transaksi tidak boleh kosong!" })
    .max(new Date(), "Tanggal tidak boleh melebihi hari ini"),
  data_transactions: z
    .array(JournalInputItemSchema)
    .min(2, "Minimal 2 data transaksi"),
});
