import { z } from 'zod';
import { PpnItemType, PpnTaxObjectType, PpnTransactionType } from './ppn';

export const PpnObjectItemSchema = z.object({
  // name: z.string().min(1),
  // quantity: z.preprocess((value) => Number(value), z.number().min(1)),
  // price: z.preprocess((value) => Number(value), z.number().min(1)),
  // discount: z.preprocess((value) => Number(value), z.number().min(0)),
  // total_price: z.preprocess((value) => Number(value), z.number().min(1)),
  // dpp: z.preprocess((value) => Number(value), z.number().min(1)),
  // ppn: z.preprocess((value) => Number(value), z.number().min(1)),

  // name: z.string().min(1, 'Nama harus diisi.'),
  // quantity: validateNonNegativeAndNotEmpty('Kuantitas'),
  // price: validateNonNegativeAndNotEmpty('Harga'),
  // discount: optionalDiscount,
  // total_price: validateNonNegativeAndNotEmpty('Total harga'),
  // dpp: validateNonNegativeAndNotEmpty('DPP'),
  // ppn: validateNonNegativeAndNotEmpty('PPN'),

  name: z.string().min(1, 'Nama harus diisi.'),
  quantity: z
    .string()
    .transform((value) => parseFloat(value))
    .pipe(z.number())
    .or(z.number()),
  price: z
    .string()
    .min(1, 'Harga harus diisi.')
    .transform((value) => parseFloat(value))
    .pipe(z.number())
    .or(z.number()),
  discount: z
    .string()
    .transform((value) => parseFloat(value))
    .pipe(z.number())
    .or(z.number()),
  total_price: z
    .string()
    .transform((value) => parseFloat(value))
    .pipe(z.number())
    .or(z.number()),
  dpp: z
    .string()
    .transform((value) => parseFloat(value))
    .pipe(z.number())
    .or(z.number()),
  ppn: z
    .string()
    .transform((value) => parseFloat(value))
    .pipe(z.number())
    .or(z.number()),
});

export const CreatePPNSchema = z.object({
  given_to: z.string().min(1, 'Nama pengusaha kena pajak tidak boleh kosong'),
  item_type: z
    .enum([PpnItemType.BARANG, PpnItemType.JASA])
    .refine((val) => [PpnItemType.BARANG, PpnItemType.JASA].includes(val), {
      message: 'Pilih salah satu jenis barang atau jasa',
    }),
  transaction_date: z.date(),
  transaction_type: z.enum([
    PpnTransactionType.PEMBELIAN,
    PpnTransactionType.PENJUALAN,
  ]),
  transaction_number: z
    .string()
    .min(1, 'Nomor bukti transaksi tidak boleh kosong'),
  tax_object: z.enum([
    PpnTaxObjectType.TIDAK_KENA_PAJAK,
    PpnTaxObjectType.KENA_PAJAK_DALAM_NEGERI,
    PpnTaxObjectType.KENA_PAJAK_LUAR_NEGERI,
  ]),
  object_items: z.array(PpnObjectItemSchema).min(1),
});

export type CreatePPNFormData = z.infer<typeof CreatePPNSchema>;

// export type PPNTransactionFormDataType = z.infer<typeof PpnObjectItemSchema>;

export const UpdatePPNSchema = z.object({
  given_to: z.string().min(1),
  item_type: z.enum([PpnItemType.BARANG, PpnItemType.JASA]),
  transaction_date: z.date(),
  transaction_type: z.enum([
    PpnTransactionType.PEMBELIAN,
    PpnTransactionType.PENJUALAN,
  ]),
  transaction_number: z.string().min(1),
  tax_object: z.enum([
    PpnTaxObjectType.TIDAK_KENA_PAJAK,
    PpnTaxObjectType.KENA_PAJAK_DALAM_NEGERI,
    PpnTaxObjectType.KENA_PAJAK_LUAR_NEGERI,
  ]),
  object_items: z.array(PpnObjectItemSchema).min(1),
});

export type UpdatePPNFormData = z.infer<typeof UpdatePPNSchema>;
