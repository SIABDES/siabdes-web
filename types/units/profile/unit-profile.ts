export type ThirdPartyPartnersType = string[];

export type OrganizationType = {
  leader: string;
  members: string[];
};

export type UnitProfileType = {
  address: string;
  business_type: string;
  description: string;
  founded_at: Date;
  name: string;
  phone: number;
  third_party_partners: ThirdPartyPartnersType;
  organization: OrganizationType;
};
