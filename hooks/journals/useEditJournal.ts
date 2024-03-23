import { AxiosClientSide } from "@/common/api";
import { JournalCategory } from "@/types/journals";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useEditJournal({
  journal_id,
  category,
}: {
  journal_id: string;
  category: JournalCategory;
}) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const getGeneralJournals = useMutation({
    mutationKey: ["general-journals/edit", journal_id],
    mutationFn: async (formData: FormData) => {
      formData.append("category", category);
      const res = await AxiosClientSide.put(
        `/journals/${journal_id}/edit`,
        formData
      );

      return res.data;
    },
    onMutate: () => {
      toast.loading("Sedang menyimpan...", {
        id: "edit-journal",
        description: "Jurnal sedang disimpan",
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["journal-details", journal_id],
      });

      if (category === JournalCategory.GENERAL) {
        await queryClient.invalidateQueries({
          queryKey: ["general-journals"],
        });

        router.push(`/unit/general-journal/${journal_id}/details`);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["adjustment-journals"],
        });

        router.push(
          `/unit/working-trial-balance/adjustment-journal/${journal_id}/details`
        );
      }

      toast.success("Berhasil!", {
        id: "edit-journal",
        description: "Jurnal berhasil diubah",
      });
    },
    onError: async (error) => {
      await queryClient.invalidateQueries({
        queryKey: ["journal-details", journal_id],
      });

      if (error instanceof AxiosError) {
        toast.error("Gagal!", {
          id: "edit-journal",
          description: error.response?.data.message,
        });
        return;
      }
      toast.error("Gagal!", {
        id: "edit-journal",
        description: error.message || "Terjadi kesalahan saat mengubah jurnal",
      });
    },
  });

  return getGeneralJournals;
}
