import { AxiosClientSide } from '@/common/api';
import { NotEmployeeFormData } from '@/types/pph21/not-employee/not-employee';
import { AddPph21Response } from '@/types/pph21/response';
import { useMutation } from '@tanstack/react-query';
import React from 'react';

export default function useAddPph21NotEmployee() {
  return useMutation({
    mutationKey: ['add-pph21-not-employee'],
    mutationFn: async (data: NotEmployeeFormData) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        '/pph21/not-employees',
        data
      );

      return res.data;
    },
  });
}
