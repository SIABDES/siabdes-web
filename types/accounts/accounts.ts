import { UnitBusinessType } from ".";

export type AccountType = AccountSubgroupType & {
  id: number;
  group_ref: string;
  ref: string;
  business_type: UnitBusinessType;
  name: string;
  slug: string;
  is_credit: boolean;
};

export type AccountsType = {
  _count: number;
  accounts: AccountType[];
};

export type AccountGroupType = {
  group_ref: string;
  group_name: string;
  subgroups: AccountSubgroupType[];
};

export type AccountSubgroupType = {
  subgroup_ref: string;
  subgroup_name: string;
};
