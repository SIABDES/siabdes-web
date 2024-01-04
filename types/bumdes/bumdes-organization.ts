import { z } from "zod";

export const UpdateBumdesOrganizationRequest = z.object({
  consultant: z.string().optional(),
  core: z.object({
    leader: z.string().min(1),
    secretary: z.string().min(1),
    treasurer: z.string().min(1),
  }),
  supervisor: z
    .object({
      leader: z.string().min(1).optional(),
      secretary: z.string().min(1).optional(),
      treasurer: z.string().min(1).optional(),
    })
    .optional(),
});

export type UpdateBumdesOrganizationFormData = z.infer<
  typeof UpdateBumdesOrganizationRequest
>;

export type BumdesUnitOrganization = {
  name: string;
  leader: string;
  members: string[];
};

export type BumdesOrganization = {
  consultant: string;
  core: {
    leader: string;
    secretary: string;
    treasurer: string;
    units: BumdesUnitOrganization[];
  };
  supervisor?: {
    leader?: string;
    secretary?: string;
    treasurer?: string;
  };
};
