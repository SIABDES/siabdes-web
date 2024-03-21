'use client';

import { AxiosClientSide } from '@/common/api';
import { GetPPNDetailsResponse } from '@/types/ppn/response';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function useGetPPNDetails({
  params,
}: {
  params: { ppn_id: string };
}) {
  return useQuery({
    queryKey: ['ppn_details', params.ppn_id],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetPPNDetailsResponse>(
        `/ppn/${params.ppn_id}`
      );
      return res.data.data;
    },
  });
}
