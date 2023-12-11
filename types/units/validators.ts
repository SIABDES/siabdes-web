import { z } from "zod";
import { UnitBusinessType } from ".";

export const NewUnitSchema = z.object({
  name: z
    .string({ required_error: "Nama unit tidak boleh kosong" })
    .max(255, "Nama unit maksimal 255 karakter"),
  address: z.string({ required_error: "Alamat tidak boleh kosong" }),
  leader: z.string({
    required_error: "Penanggung jawab tidak boleh kosong",
  }),
  phone_number: z
    .string({
      required_error: "Nomor telepon tidak boleh kosong",
    })
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka")
    .min(7, "Nomor telepon minimal 7 karakter")
    .max(13, "Nomor telepon maksimal 13 karakter"),
  business_type: z.enum(
    [
      UnitBusinessType.COMMERCE,
      UnitBusinessType.INDUSTRY,
      UnitBusinessType.SERVICES,
    ],
    { required_error: "Jenis usaha tidak boleh kosong" }
  ),
  credentials: z
    .object({
      identifier: z.string({ required_error: "Username tidak boleh kosong" }),
      password: z
        .string({ required_error: "Password tidak boleh kosong" })
        .min(8, "Password minimal 8 karakter")
        .max(255, "Password maksimal 255 karakter"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Konfirmasi password tidak sesuai",
      path: ["confirmPassword"],
    }),
});
