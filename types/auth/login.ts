import { UserRole } from "@/lib/next-auth";
import { z } from "zod";

export const LoginSchema = z.object({
  identifier: z
    .string()
    .email({ message: "Email tidak valid." })
    .or(z.string().min(1, "Email atau username tidak boleh kosong")),
  password: z.string().min(1, "Password tidak boleh kosong."),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

export type LoginBackendTokens = {
  accessToken: string;
  refreshToken: string;
};

export type LoginUser = {
  id: string;
  bumdesId: string;
  bumdesName: string;
  unitId?: string;
  unitName?: string;
  role: UserRole;
};
