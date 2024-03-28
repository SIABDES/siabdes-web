'use client';

import { AxiosClientSide } from '@/common/api';
import { GetGeneralJournalsResponse } from '@/types/journals';
import { useQuery } from '@tanstack/react-query';

export function useGetGeneralJournals({
  end_occurred_at,
  start_occurred_at,
}: {
  start_occurred_at: Date | undefined;
  end_occurred_at: Date | undefined;
}) {
  const getGeneralJournals = useQuery({
    queryKey: ['general-journals'],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetGeneralJournalsResponse>(
        '/journals/general-journals'
      );

      const { data } = res.data;

      return data;
    },
  });

  return getGeneralJournals;
}
