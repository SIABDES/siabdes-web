import { z } from "zod";

export const LoginSchema = z.object({
  identifier: z.string().email().or(z.string()),
  password: z.string(),
});

export type LoginFormData = z.infer<typeof LoginSchema>;
