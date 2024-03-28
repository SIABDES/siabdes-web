"use client";

import { useMutation } from "@tanstack/react-query";
import { addUnit } from "../_actions/mutation";
import { AddUnitRequest } from "../_schemas/mutation";
import { AddUnitResponse } from "../_types/response";

export function useMutationBumdesAddUnit() {
  return useMutation({
    mutationKey: ["bumdes", "add-unit"],
    mutationFn: async (req: AddUnitRequest): Promise<AddUnitResponse> => {
      return await addUnit(req);
    },
  });
}
