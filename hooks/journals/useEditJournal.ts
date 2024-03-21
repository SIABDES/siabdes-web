import { AxiosClientSide } from "@/common/api";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export function useEditJournal({ journal_id }: { journal_id: string }) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const getGeneralJournals = useMutation({
    mutationKey: ["general-journals/edit", journal_id],
    mutationFn: async (formData: FormData) => {
      const res = await AxiosClientSide.put(
        `/journals/${journal_id}/edit`,
        formData
      );

      return res.data;
    },
    onMutate: () => {
      toast({
        title: "Sedang menyimpan...",
        description: "Jurnal sedang disimpan",
        duration: 3000,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["journal-details", journal_id],
      });

      router.push(`/unit/general-journal/${journal_id}/details`);

      toast({
        title: "Berhasil!",
        description: "Jurnal berhasil diubah",
        duration: 3000,
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast({
          title: "Gagal!",
          description: error.response?.data.message,
          variant: "destructive",
          duration: 3000,
        });
        return;
      }
      toast({
        title: "Gagal!",
        description: error.message,
        variant: "destructive",
        duration: 3000,
      });
    },
  });

  return getGeneralJournals;
}
