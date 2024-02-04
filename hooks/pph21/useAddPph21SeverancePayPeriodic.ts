import { AxiosClientSide } from '@/common/api';
import { AddPph21Response } from '@/types/pph21/response';
import { SeverencePayPeriodicFormData } from '@/types/pph21/severance-pay/severence-pay';
import { useMutation } from '@tanstack/react-query';

export default function useAddPph21SeverancePayPeriodic() {
  return useMutation({
    mutationKey: ['add-pph21-severance-pay-periodic'],
    mutationFn: async (data: SeverencePayPeriodicFormData) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        '/pph21/severance-pay/periodic',
        data
      );

      return res.data;
    },
  });
}
