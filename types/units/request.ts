import { z } from "zod";
import { NewUnitSchema } from "./validators";

export type NewUnitRequest = z.infer<typeof NewUnitSchema>;
