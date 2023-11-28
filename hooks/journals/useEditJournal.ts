import { AxiosClientSide } from "@/common/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditJournal({ journal_id }: { journal_id: string }) {
  const queryClient = useQueryClient();

  const getGeneralJournals = useMutation({
    mutationKey: ["general-journals/edit", journal_id],
    mutationFn: async (formData: FormData) => {
      const res = await AxiosClientSide.put(
        `/journals/${journal_id}/edit`,
        formData
      );

      return res.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["journal-details", journal_id],
      });
    },
  });

  return getGeneralJournals;
}
