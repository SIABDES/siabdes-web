import { AxiosClientSide } from "@/common/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export default function useDeleteJournal(params: { journal_id: string }) {
  const { journal_id } = params;

  const queryClient = useQueryClient();

  const deleteJournalMutation = useMutation({
    mutationKey: ["delete-journal", journal_id],
    mutationFn: async () => {
      const response = await AxiosClientSide.delete(
        `/journals/${journal_id}/delete`
      );

      return response.data;
    },
    onMutate: () => {
      toast.loading("Menghapus Jurnal", {
        id: "delete-journal",
        description: "Harap tunggu sebentar...",
      });
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error("Gagal menghapus jurnal", {
          id: "delete-journal",
          description: err.response?.data.message,
        });

        return;
      }

      toast.error("Gagal menghapus jurnal", {
        id: "delete-journal",
        description: "Terjadi kesalahan saat menghapus jurnal",
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["general-journals"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["adjustment-journals"],
      });

      toast.success("Jurnal berhasil dihapus", {
        id: "delete-journal",
        description: "Memuat ulang data jurnal...",
      });
    },
  });

  return deleteJournalMutation;
}
