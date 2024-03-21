"use client";

import { AxiosClientSide } from "@/common/api";
import { toast } from "@/components/ui/use-toast";
import { AddAdjustmentJournalResponse } from "@/types/journals";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export function useAddAdjustmentJournal() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const getAdjustmentJournals = useMutation({
    mutationKey: ["adjustment-journals/add"],
    mutationFn: async (formData: FormData) => {
      const res = await AxiosClientSide.post<AddAdjustmentJournalResponse>(
        "/journals/adjustment-journals",
        formData
      );

      return res.data;
    },
    onMutate: () => {
      toast({
        title: "Proses Tambah Jurnal Penyesuaian",
        description: "Sedang menambahkan Jurnal Penyesuaian...",
        duration: 3000,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["adjustment-journals"],
      });

      toast({
        title: "Status Tambah Jurnal Penyesuaian",
        description: "Jurnal penyesuaian berhasil ditambahkan",
        duration: 3000,
      });

      router.push("/unit/working-trial-balance/adjustment-journal");
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast({
          title: "Gagal menambahkan jurnal penyesuaian",
          description: err.response?.data.message,
          variant: "destructive",
          duration: 3000,
        });
        return;
      }

      toast({
        title: "Gagal menambahkan jurnal penyesuaian",
        description: err.message,
        variant: "destructive",
        duration: 3000,
      });
    },
  });

  return getAdjustmentJournals;
}
