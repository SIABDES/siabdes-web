import { z } from "zod";

export const RegisterSchema = z.object({
  credentials: z
    .object({
      email: z.string().email().min(1),
      password: z.string().min(8).max(100),
      passwordConfirmation: z.string().min(8).max(100),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Konfirmasi password tidak sama",
    }),
  profile: z.object({
    name: z.string().min(1),
    phone: z.string().min(7).max(13),
  }),
  organization: z.object({
    leader: z.string().min(1), // Ketua
    secretary: z.string().min(1), // Sekretaris
    treasurer: z.string().min(1), // Bendahara
  }),
  address: z.object({
    completeAddress: z.string().min(1),
    province: z.string(),
    regency: z.string(),
    district: z.string(),
    village: z.string(),
    postalCode: z
      .string()
      .min(5, "Kode Pos hanya memiliki 5 digit")
      .max(5, "Kode Pos hanya memiliki 5 digit"),
  }),
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;
