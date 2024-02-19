import { AxiosClientSide } from '@/common/api';
import { toast } from '@/components/ui/use-toast';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import { AddPph21Response } from '@/types/pph21/response';
import { NonPermanentEmployeeMonthlyFormData } from '@/types/pph21/temporary-employee/temporary-employee';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react';

export default function useAddPph21TemporaryEmployeePaidMonthly() {
  return useMutation({
    mutationKey: ['add-pph21-temporary-employee-paid-monthly'],
    mutationFn: async (data: PPh21PostPayloadRequest) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        '/pph21/temporary-employees/paid-monthly',
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
      if (error instanceof AxiosError) {
        toast({
          title: 'Gagal',
          description: error.response?.data.message,
          variant: 'destructive',
        });
      }
    },
  });
}
