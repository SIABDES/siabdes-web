import { AxiosClientSide } from '@/common/api';
import { toast } from '@/components/ui/use-toast';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import { AddPph21Response } from '@/types/pph21/response';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export default function useAddPph21TemporaryEmployeeNotPaidMonthly() {
  return useMutation({
    mutationKey: ['add-pph21-temporary-employee-not-paid-monthly'],
    mutationFn: async (data: PPh21PostPayloadRequest) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        '/pph21/temporary-employees/not-paid-monthly',
        data
      );

      return res.data;
    },
    onSuccess: () => {
      toast({
        title: 'Berhasil',
        description: 'Data PPh21 berhasil disimpan',
      });
    },
    onError: (error) => {
      console.log('error', error);
      if (error instanceof AxiosError) {
        console.log('error', error.response?.data);
        toast({
          title: 'Gagal',
          description: error.response?.data.message,
          variant: 'destructive',
        });
      }
    },
  });
}
