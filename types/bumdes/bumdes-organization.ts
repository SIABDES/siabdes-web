import { z } from 'zod';

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

export type BumdesOrganizationCoreType = {
  leader: string;
  secretary: string;
  treasurer: string;
  units: BumdesOrganizationUnitsType[];
};

export type BumdesOrganizationUnitsType = {
  name: string;
  leader: string;
  members: string[]; //Array<string>
};

export type BumdesOrganizationSupervisorType = {
  leader: string;
  secretary: string;
  treasurer: string;
};

export type BumdesOrganizationType = {
  consultant: string;
  core: BumdesOrganizationCoreType;
  supervisor: BumdesOrganizationSupervisorType;
};
