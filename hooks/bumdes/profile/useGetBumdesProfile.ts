import { AxiosClientSide } from '@/common/api';
import { GetBumdesProfileResponse } from '@/types/bumdes/profile/response';
import { useQuery } from '@tanstack/react-query';

export default function useGetBumdesProfile() {
  return useQuery({
    queryKey: ['bumdes/profile'],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetBumdesProfileResponse>(
        '/bumdes/profile'
      );
      const result = res.data;
      return result;
    },
  });
}
