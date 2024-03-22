'use client';

import { AxiosClientSide } from '@/common/api';
import { JournalCategory, RetrievalCategory } from '@/types/journals';
import { GetWtbResponse, WtbResponse } from '@/types/wtb/response';
import { useQuery } from '@tanstack/react-query';

interface UseGetWtbArgs {
  start_occurred_at?: Date;
  end_occurred_at?: Date;
  retrieval_category?: RetrievalCategory;
  journal_category?: JournalCategory;
}

export function useGetWtb(args?: UseGetWtbArgs) {
  const getWtb = useQuery({
    queryKey: ['wtb', args?.retrieval_category, args?.journal_category],
    queryFn: async () => {
      const res = await AxiosClientSide.get<WtbResponse>('/wtb', {
        params: {
          start_occured_at: args?.start_occurred_at?.toISOString(),
          end_occured_at: args?.end_occurred_at?.toISOString(),
          retrieval_category: args?.retrieval_category,
          journal_category: args?.journal_category,
        },
      });

      const result = res.data;

      return result;
    },
  });

  return getWtb;
}
