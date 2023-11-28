"use client";

import { AxiosClientSide } from "@/common/api";
import { AddGeneralJournalResponse } from "@/types/journals";
import { useMutation } from "@tanstack/react-query";

export function useAddGeneralJournal() {
  const getGeneralJournals = useMutation({
    mutationKey: ["general-journals/add"],
    mutationFn: async (formData: FormData) => {
      const res = await AxiosClientSide.post<AddGeneralJournalResponse>(
        "/journals/general-journals",
        formData
      );

      return res.data;
    },
  });

  return getGeneralJournals;
}
