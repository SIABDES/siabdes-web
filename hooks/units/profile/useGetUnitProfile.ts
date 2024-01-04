import { AxiosClientSide } from '@/common/api';
import { GetUnitProfileResponse } from '@/types/units/profile/response';
import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';

export default function useGetUnitProfile() {
  return useQuery({
    queryKey: ['units/profile'],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetUnitProfileResponse>(
        '/units/profile'
      );
      const result = res.data;
      return result;
    },
  });
}
