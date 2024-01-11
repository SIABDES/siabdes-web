import { z } from 'zod';
import { PpnItemType, PpnTaxObjectType, PpnTransactionType } from './ppn';

export const PpnObjectItemSchema = z.object({
  name: z.string().min(1),
  quantity: z.number().min(1),
  price: z.number().min(1),
  discount: z.number().min(0),
  total_price: z.number().min(1),
  dpp: z.number().min(1),
  taxRate: z.number().min(1),
  ppn: z.number().min(1),
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
  transaction_evidence: z.string().min(1),
  object_items: z.array(PpnObjectItemSchema).min(1),
});

export type CreatePPNFormData = z.infer<typeof CreatePPNSchema>;

export type PPNTransactionFormDataType = z.infer<typeof PpnObjectItemSchema>;
