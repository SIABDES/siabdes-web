"use client";

import { AxiosClientSide } from "@/common/api";
import { useToast } from "@/components/ui/use-toast";
import { AddAdjustmentJournalResponse } from "@/types/journals";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useAddAdjustmentJournal() {
  const { toast } = useToast();

  const getAdjustmentJournals = useMutation({
    mutationKey: ["adjustment-journals/add"],
    mutationFn: async (formData: FormData) => {
      const res = await AxiosClientSide.post<AddAdjustmentJournalResponse>(
        "/journals/adjustment-journals",
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
        }
      );

      const { data } = res;

      return data;
    },
    onSuccess: () => {
      toast({
        title: "Status Tambah Jurnal Penyesuaian",
        description: "Jurnal penyesuaian berhasil ditambahkan",
      });
    },
    onError: (err) => {
      toast({
        title: "Gagal menambahkan jurnal penyesuaian",
        description: err.message,
        variant: "destructive",
      });
    },
  });

  return getAdjustmentJournals;
}
