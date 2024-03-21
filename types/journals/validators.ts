import { z } from "zod";

export const JournalInputItemSchema = z
  .object({
    account_id: z.coerce.number(),
    debit: z.number().nonnegative().default(0),
    credit: z.number().nonnegative().default(0),
  })
  .refine(
    (data) => {
      return data.debit > 0 || data.credit > 0;
    },
    { message: "Debit atau kredit harus diisi!" }
  )
  .refine(
    (data) => {
      return data.account_id !== null || data.account_id !== -1;
    },
    { message: "Akun harus diisi!" }
  );

export const AddJournalRequestSchema = z.object({
  description: z.string({ required_error: "Deskripsi tidak boleh kosong!" }),
  occurred_at: z
    .date({ required_error: "Tanggal transaksi tidak boleh kosong!" })
    .max(new Date(), "Tanggal tidak boleh melebihi hari ini"),
  data_transactions: z
    .array(JournalInputItemSchema)
    .min(2, "Minimal 2 data transaksi")
    .refine(
      (data) => {
        const hasSameAccount = data.every((item, index, arr) => {
          return (
            arr.findIndex((i) => i.account_id === item.account_id) === index
          );
        });
        return hasSameAccount;
      },
      { message: "Tidak boleh ada akun yang sama!" }
    )
    .refine(
      (data) => {
        return data.every((item) => {
          return item.debit > 0 || item.credit > 0;
        });
      },
      { message: "Data debit dan kredit harus diisi!" }
    )
    .refine(
      (data) => {
        const totalDebit = data.reduce((acc, curr) => {
          return curr.debit + acc;
        }, 0);

        const totalCredit = data.reduce((acc, curr) => {
          return curr.credit + acc;
        }, 0);

        return totalDebit === totalCredit;
      },
      { message: "Total debit dan kredit harus sama!" }
    ),
});
