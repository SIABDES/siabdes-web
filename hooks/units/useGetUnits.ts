"use client";

import { AxiosClientSide } from "@/common/api";
import { GetUnitsResponse } from "@/types/units";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export default function useGetUnits() {
  return useQuery({
    queryKey: ["units"],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetUnitsResponse>("/units");
      return res.data.data;
    },
  });
}
