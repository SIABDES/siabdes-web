"use client";

import { AxiosClientSide } from "@/common/api";
import { GetAdjustmentJournalsResponse } from "@/types/journals";
import { useQuery } from "@tanstack/react-query";

export function useGetAdjustmentJournals() {
  const getAdjustmentJournals = useQuery({
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
