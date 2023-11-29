"use client";

import { AxiosClientSide } from "@/common/api";
import { GetWtbResponse, WtbResponse } from "@/types/wtb/response";
import { useQuery } from "@tanstack/react-query";

export function useGetWtb() {
  const getWtb = useQuery({
    queryKey: ["wtb"],
    queryFn: async () => {
      const res = await AxiosClientSide.get<WtbResponse>("/wtb");

      const result = res.data;

      return result;
    },
  });

  return getWtb;
}
