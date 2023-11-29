"use client";

import { AxiosClientSide } from "@/common/api";
import { AddGeneralJournalResponse } from "@/types/journals";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddGeneralJournal() {
  const queryClient = useQueryClient();

  const getGeneralJournals = useMutation({
    mutationKey: ["general-journals/add"],
    mutationFn: async (formData: FormData) => {
      const res = await AxiosClientSide.post<AddGeneralJournalResponse>(
        "/journals/general-journals",
        formData
      );

      return res.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["general-journals"],
      });
    },
  });

  return getGeneralJournals;
}
