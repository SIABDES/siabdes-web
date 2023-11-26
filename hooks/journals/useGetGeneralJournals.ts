"use client";

import { AxiosClientSide } from "@/common/api";
import { GENERAL_JOURNALS } from "@/common/api/urls";
import { GetGeneralJournalsResponse } from "@/types/journals";
import { useQuery } from "@tanstack/react-query";

export function useGetGeneralJournals() {
  const getGeneralJournals = useQuery({
    queryKey: ["general-journals"],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetGeneralJournalsResponse>(
        "/journals/general-journals"
      );

      const { data } = res.data;

      return data;
    },
  });

  return getGeneralJournals;
}
