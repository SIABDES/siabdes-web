import { AxiosClientSide } from '@/common/api';
import { PPh21OtherActivityParticipantFormData } from '@/types/pph21/pph21/other-pph21';
import { AddPph21Response } from '@/types/pph21/response';
import { useMutation } from '@tanstack/react-query';

export default function useAddPph21OtherActivityParticipants() {
  return useMutation({
    mutationKey: ['add-pph21-other-activity-participant'],
    mutationFn: async (data: PPh21OtherActivityParticipantFormData) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        '/pph21/pph21-other/activity-participant',
        data
      );

      return res.data;
    },
  });
}
