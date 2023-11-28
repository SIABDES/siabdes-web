"use client";

import { AxiosClientSide } from "@/common/api";
import { AddAdjustmentJournalResponse } from "@/types/journals";
import { useMutation } from "@tanstack/react-query";

export function useAddAdjustmentJournal() {
  const getAdjustmentJournals = useMutation({
    mutationKey: ["adjustment-journals/add"],
    mutationFn: async (formData: FormData) => {
      const res = await AxiosClientSide.post<AddAdjustmentJournalResponse>(
        "/journals/adjustment-journals",
        formData
      );

      return res.data;
    },
  });

  return getAdjustmentJournals;
}
