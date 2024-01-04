export type BankType = {
  name: string;
  account_number: string;
};

export type CapitalParticipationType = {
  initial: string;
  additional: string;
};

export type SocialsType = {
  facebook: string;
  twitter: string;
  instagram: string;
  website: string;
  other_socials: string;
};

export type BumdesProfileType = {
  name: string;
  email: string;
  founded_at: string;
  phone: string;
  complete_address: string;
  bank: BankType;
  capital_participation: CapitalParticipationType;
  socials: SocialsType;
  npwp_number: string;
  village_rule_number: string;
  sk_administrator_number: string;
  sk_administrator_date: string;
  sk_assistant_number: string;
  sk_assistant_date: string;
};
