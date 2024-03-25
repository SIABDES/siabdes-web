"use client";

import { AxiosClientSide } from "@/common/api";
import { GetAllLedgersResponse } from "@/types/ledger";
import { useQuery } from "@tanstack/react-query";

export function useGetAllLedgersQuery({
  end_occurred_at,
  start_occurred_at,
}: {
  start_occurred_at: string;
  end_occurred_at: string;
}) {
  return useQuery({
    queryKey: ["get-all-ledgers", start_occurred_at, end_occurred_at],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetAllLedgersResponse>(
        "/ledgers/all",
        {
          params: { start_occurred_at, end_occurred_at },
        }
      );

      return res;
    },
  });
}
