import { AxiosClientSide } from "@/common/api";
import { GetLedgerByIdResponse, LedgerType } from "@/types/ledger";
import { useQuery } from "@tanstack/react-query";

export function useGetLedger({
  account_id,
}: {
  account_id?: string;
  unit_id?: string;
}) {
  const getLedger = useQuery({
    queryKey: ["ledgers", account_id],
    queryFn: async () => {
      if (!account_id) {
        return {
          transactions: [],
        };
      }

      const response = await AxiosClientSide.get<GetLedgerByIdResponse>(
        `/ledgers`,
        {
          params: {
            account_id,
          },
        }
      );

      const { data } = response.data;

      return data;
    },
  });
  return getLedger;
}
