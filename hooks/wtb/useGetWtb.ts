"use client";

import { AxiosClientSide } from "@/common/api";
import { GetWtbResponse, WtbResponse } from "@/types/wtb/response";
import { useQuery } from "@tanstack/react-query";

interface UseGetWtbArgs {
  start_occurred_at?: Date;
  end_occurred_at?: Date;
}

export function useGetWtb(args?: UseGetWtbArgs) {
  const getWtb = useQuery({
    queryKey: ["wtb"],
    queryFn: async () => {
      const res = await AxiosClientSide.get<WtbResponse>("/wtb", {
        params: {
          start_occured_at: args?.start_occurred_at?.toISOString(),
          end_occured_at: args?.end_occurred_at?.toISOString(),
        },
      });

      const result = res.data;

      return result;
    },
  });

  return getWtb;
}
