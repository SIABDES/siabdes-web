import { AxiosClientSide } from '@/common/api';
import { PPh21OtherNonEmployeeSupervisorFormData } from '@/types/pph21/pph21/other-pph21';
import { AddPph21Response } from '@/types/pph21/response';
import { useMutation } from '@tanstack/react-query';

export default function useAddPph21OtherNonEmployeeSupervisor() {
  return useMutation({
    mutationKey: ['add-pph21-other-non-employee-supervisor'],
    mutationFn: async (data: PPh21OtherNonEmployeeSupervisorFormData) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        '/pph21/pph21-other/non-employee-supervisor',
        data
      );

      return res.data;
    },
  });
}
