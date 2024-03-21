import { AxiosClientSide } from "@/common/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["general-journals"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["adjustment-journals"],
      });
    },
  });

  return deleteJournalMutation;
}
