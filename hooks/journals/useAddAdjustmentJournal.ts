"use client";

import { AxiosClientSide } from "@/common/api";
import {
  AddAdjustmentJournalResponse,
  JournalCategory,
} from "@/types/journals";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
      toast.loading("Menambahkan Jurnal Penyesuaian", {
        id: "add-adjustment-journal",
        description: "Harap tunggu sebentar...",
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["adjustment-journals"],
      });

      toast.success("Jurnal Penyesuaian berhasil ditambahkan", {
        id: "add-adjustment-journal",
        description: "Memindahkan ke halaman jurnal penyesuaian...",
      });

      router.push("/unit/working-trial-balance/adjustment-journal");
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error("Gagal menambahkan jurnal peneysuaian", {
          id: "add-adjustment-journal",
          description: err.response?.data.message,
          duration: 3000,
        });

        return;
      }

      toast.error("Gagal menambahkan jurnal peneysuaian", {
        id: "add-adjustment-journal",
        description: err.message,
        duration: 3000,
      });
    },
  });

  return getAdjustmentJournals;
}
