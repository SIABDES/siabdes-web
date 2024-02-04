import { AxiosClientSide } from '@/common/api';
import { AddPph21Response } from '@/types/pph21/response';
import { NonPermanentEmployeeNotMonthlyFormData } from '@/types/pph21/temporary-employee/temporary-employee';
import { useMutation } from '@tanstack/react-query';

export default function useAddPph21TemporaryEmployeeNotPaidMonthly() {
  return useMutation({
    mutationKey: ['add-pph21-temporary-employee-not-paid-monthly'],
    mutationFn: async (data: NonPermanentEmployeeNotMonthlyFormData) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        '/pph21/temporary-employees/not-paid-monthly',
        data
      );

      return res.data;
    },
  });
}
