import { AxiosClientSide } from '@/common/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeletePPN(params: { ppn_id: string }) {
  const { ppn_id } = params;
  const queryClient = useQueryClient();
  const deletePPNMutation = useMutation({
    mutationKey: ['delete-ppn', ppn_id],
    mutationFn: async () => {
      const response = await AxiosClientSide.delete(`/ppn/${ppn_id}`);
      console.log('Delete PPN response:', response.data);
      return response.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['ppn'],
      });

      await queryClient.invalidateQueries({
        queryKey: ['ppn-details'],
      });
    },
  });
  return deletePPNMutation;
}
