"use client";

import { AxiosClientSide } from "@/common/api";
import { AddGeneralJournalResponse, JournalCategory } from "@/types/journals";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useAddGeneralJournal() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const getGeneralJournals = useMutation({
    mutationKey: ["general-journals/add"],
    mutationFn: async (formData: FormData) => {
      const res = await AxiosClientSide.post<AddGeneralJournalResponse>(
        "/journals/general-journals",
        formData
      );

      return res.data;
    },
    onMutate: () => {
      toast.loading("Status Tambah Jurnal Umum", {
        id: "add-general-journal",
        description: "Sedang menambahkan Jurnal Umum...",
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["general-journals"],
      });

      toast.success("Status Tambah Jurnal Umum", {
        id: "add-general-journal",
        description: "Jurnal umum berhasil ditambahkan!",
      });

      router.push("/unit/general-journal");
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error("Gagal menambahkan jurnal umum", {
          id: "add-general-journal",
          description: err.response?.data.message,
        });
        return;
      }

      toast.error("Gagal menambahkan jurnal umum", {
        id: "add-general-journal",
        description: err.message,
      });
    },
  });

  return getGeneralJournals;
}
