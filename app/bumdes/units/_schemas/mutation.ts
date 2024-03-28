import { z } from "zod";
import { UnitBusinessType } from "../_types/common";

export const AddUnitSchemaRequest = z.object({
  name: z.string().min(1, "Nama Unit tidak boleh kosong"),
  address: z.string().optional(),
  leader: z.string().min(1, "Nama Ketua tidak boleh kosong"),
  phone_number: z.string().min(1, "Nomor Telepon tidak boleh kosong"),
  business_type: z.nativeEnum(UnitBusinessType),
  credentials: z
    .object({
      identifier: z.string().min(1, "Username tidak boleh kosong"),
      password: z.string().min(1, "Password tidak boleh kosong"),
      confirm_password: z
        .string()
        .min(1, "Konfirmasi Password tidak boleh kosong"),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Password tidak sama",
    }),
});

export type AddUnitRequest = z.infer<typeof AddUnitSchemaRequest>;
