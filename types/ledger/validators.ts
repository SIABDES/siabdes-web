import { z } from "zod";

export const GetAllLedgersRequest = z.object({
  start_occurred_at: z.coerce.date(),
  end_occurred_at: z.coerce.date(),
});

export type GetAllLedgersRequestType = z.infer<typeof GetAllLedgersRequest>;
