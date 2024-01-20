import { AxiosClientSide } from '@/common/api';
import { GetPPNResponse } from '@/types/ppn/response';
import { useQuery } from '@tanstack/react-query';

export default function useGetPPN() {
  return useQuery({
    queryKey: ['ppn'],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetPPNResponse>('/ppn');
      return res.data;
    },
  });
}
