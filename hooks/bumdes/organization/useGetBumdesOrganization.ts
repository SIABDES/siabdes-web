import { AxiosClientSide } from '@/common/api';
import { GetBumdesOrganizationResponse } from '@/types/bumdes/response';
import { useQuery } from '@tanstack/react-query';

export default function useGetBumdesOrganization() {
  return useQuery({
    queryKey: ['bumdes/organization'],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetBumdesOrganizationResponse>(
        '/bumdes/organization'
      );
      const result = res.data;
      return result;
    },
  });
}
