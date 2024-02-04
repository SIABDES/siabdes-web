import { AxiosClientSide } from '@/common/api';
import { AddPph21Response } from '@/types/pph21/response';
import { NonPermanentEmployeeMonthlyFormData } from '@/types/pph21/temporary-employee/temporary-employee';
import { useMutation } from '@tanstack/react-query';
import React from 'react';

export default function useAddPph21TemporaryEmployeePaidMonthly() {
  return useMutation({
    mutationKey: ['add-pph21-temporary-employee-paid-monthly'],
    mutationFn: async (data: NonPermanentEmployeeMonthlyFormData) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        '/pph21/temporary-employees/paid-monthly',
        data
      );

      return res.data;
    },
  });
}
