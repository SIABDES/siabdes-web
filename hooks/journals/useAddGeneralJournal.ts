"use client";

import { AxiosClientSide } from "@/common/api";
import { GENERAL_JOURNALS } from "@/common/api/urls";
import { useToast } from "@/components/ui/use-toast";
import {
  AddGeneralJournalResponse,
  GetGeneralJournalsResponse,
} from "@/types/journals";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useAddGeneralJournal() {
  const { toast } = useToast();

  const getGeneralJournals = useMutation({
    mutationKey: ["general-journals/add"],
    mutationFn: async (formData: FormData) => {
      const res = await AxiosClientSide.post<AddGeneralJournalResponse>(
        "/journals/general-journals",
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
        title: "Status Tambah Jurnal Umum",
        description: "Jurnal umum berhasil ditambahkan",
      });
    },
    onError: (err) => {
      toast({
        title: "Gagal menambahkan jurnal umum",
        description: err.message,
        variant: "destructive",
      });
    },
  });

  return getGeneralJournals;
}
