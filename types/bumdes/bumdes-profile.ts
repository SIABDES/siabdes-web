import { z } from "zod";

export const UpdateBumdesProfileRequest = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  complete_address: z.string().min(1),
  founded_at: z.date(),

  bank: z
    .object({
      name: z.string().min(1),
      account_number: z.string().min(1), // 1111-2222-3333-4444
    })
    .optional(),

  socials: z
    .object({
      website: z.string().url().min(1).optional(),
      facebook: z.string().url().min(1).optional(),
      twitter: z.string().url().min(1).optional(),
      instagram: z.string().url().min(1).optional(),
      other_socials: z.string().min(1).optional(),
    })
    .optional(),

  capital_participation: z.object({
    initial: z.number().min(0),
    additional: z.number().min(0),
  }),

  npwp_number: z.string().min(1).optional(),

  village_rule_number: z.string().min(1),
  sk_administrator_number: z.string().min(1),
  sk_administrator_date: z.date(),
  sk_assistant_number: z.string().min(1),
  sk_assistant_date: z.date(),
});

export type UpdateBumdesProfileFormData = z.infer<
  typeof UpdateBumdesProfileRequest
>;

export type BumdesProfile = {
  name: string;
  email: string;
  founded_at: string | null; // Datestring
  phone: string;
  complete_address: string;
  bank?: {
    name: string | null;
    account_number: string | null;
  };
  capital_participation: {
    initial: number | null;
    additional: number | null;
  };
  socials?: {
    facebook: string | null;
    twitter: string | null;
    instagram: string | null;
    website: string | null;
    other_socials: string | null;
  };
  npwp_number: string | null;
  village_rule_number: string | null;
  sk_administrator_number: string | null;
  sk_administrator_date: string | null; // Datestring
  sk_assistant_number: string | null;
  sk_assistant_date: string | null;
};
