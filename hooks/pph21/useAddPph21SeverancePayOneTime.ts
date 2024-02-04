import { AxiosClientSide } from '@/common/api';
import { AddPph21Response } from '@/types/pph21/response';
import { SeverencePayOneTimeFormData } from '@/types/pph21/severance-pay/severence-pay';
import { useMutation } from '@tanstack/react-query';

export default function useAddPph21SeverancePayOneTime() {
  return useMutation({
    mutationKey: ['add-pph21-severance-pay-one-time'],
    mutationFn: async (data: SeverencePayOneTimeFormData) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        '/pph21/severance-pay/one-time',
        data
      );

      return res.data;
    },
  });
}
