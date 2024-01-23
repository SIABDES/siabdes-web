import { BackendResponseType } from '@/common/types';
import {
  PpnItemType,
  PpnObjectItem,
  PpnTaxObjectType,
  PpnTransaction,
  PpnTransactionType,
} from './ppn';

export type GetPPNResponse = BackendResponseType<{
  _count: number;
  taxes: PpnTransaction[];
}>;

export type GetPPNDetailsResponse = BackendResponseType<{
  id: string;
  given_to: string;
  item_type: PpnItemType;
  transaction_type: PpnTransactionType;
  transaction_date: string;
  transaction_number: string;
  tax_object: PpnTaxObjectType;
  objects: PpnObjectItem[];
}>;

export type AddPPNDataResponse = BackendResponseType<{
  id: string;
  created_at: string;
}>;

export type UpdatePPNDataResponse = BackendResponseType<{
  id: string;
  updated_at: string;
}>;
