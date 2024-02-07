import { AxiosClientSide } from '@/common/api';
import { UpdatePPNFormData } from '@/types/ppn/dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useEditPPN({ ppn_id }: { ppn_id: string }) {
  const queryClient = useQueryClient();

  const getPPN = useMutation({
    mutationKey: ['ppn/edit', ppn_id],
    mutationFn: async (data: UpdatePPNFormData) => {
      const res = await AxiosClientSide.put(`/ppn/${ppn_id}`, data);

      return res.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['ppn-details', ppn_id],
      });
    },
  });

  return getPPN;
}
