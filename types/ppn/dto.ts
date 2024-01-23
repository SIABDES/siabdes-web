import { z } from 'zod';
import { PpnItemType, PpnTaxObjectType, PpnTransactionType } from './ppn';

export const PpnObjectItemSchema = z.object({
  name: z.string().min(1),
  quantity: z.preprocess((value) => Number(value), z.number().min(1)),
  price: z.preprocess((value) => Number(value), z.number().min(1)),
  discount: z.preprocess((value) => Number(value), z.number().min(0)),
  total_price: z.preprocess((value) => Number(value), z.number().min(1)),
  dpp: z.preprocess((value) => Number(value), z.number().min(1)),
  ppn: z.preprocess((value) => Number(value), z.number().min(1)),
});

export const CreatePPNSchema = z.object({
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

export type CreatePPNFormData = z.infer<typeof CreatePPNSchema>;

export type PPNTransactionFormDataType = z.infer<typeof PpnObjectItemSchema>;

export const UpdatePPNRequest = z.object({
  given_to: z.string().min(1).optional(),
  item_type: z.enum([PpnItemType.BARANG, PpnItemType.JASA]).optional(),
  transaction_date: z.date().optional(),
  transaction_type: z
    .enum([PpnTransactionType.PEMBELIAN, PpnTransactionType.PENJUALAN])
    .optional(),
  transaction_number: z.string().min(1).optional(),
  tax_object: z
    .enum([
      PpnTaxObjectType.TIDAK_KENA_PAJAK,
      PpnTaxObjectType.KENA_PAJAK_DALAM_NEGERI,
      PpnTaxObjectType.KENA_PAJAK_LUAR_NEGERI,
    ])
    .optional(),
  object_items: z.array(PpnObjectItemSchema).min(1).optional(),
});

export type UpdatePPNFormData = z.infer<typeof UpdatePPNRequest>;
