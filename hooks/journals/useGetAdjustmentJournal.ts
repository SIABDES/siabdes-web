"use client";

import { AxiosClientSide } from "@/common/api";
import { ADJUSTMENT_JOURNALS } from "@/common/api/urls";
import { GetAdjustmentJournalsResponse } from "@/types/journals";
import { useQuery } from "@tanstack/react-query";

export function useGetAdjustmentJournal() {
  type BackendResponseSchema = {
    data: {
      statusCode: number;
      message: string;
      data: JournalResponse;
    };
  };

  const getAdjustmentJournal = useQuery({
    queryKey: ["adjustment-journals"],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetAdjustmentJournalsResponse>(
        "/journals/adjustment-journals"
      );

      const { data } = res.data;

      return data;
    },
  });

  return getAdjustmentJournals;
}
