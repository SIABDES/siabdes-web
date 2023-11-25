import { BussinessType } from '.';

export type AccountType = {
  id: number;
  group_ref: string;
  ref: string;
  business_type: BussinessType;
  name: string;
  slug: string;
  is_credit: boolean;
};

export type AccountsType = {
  _count: number;
  accounts: AccountType[];
};
