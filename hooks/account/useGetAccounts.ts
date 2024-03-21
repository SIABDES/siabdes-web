import { AxiosClientSide } from "@/common/api";
import { ACCOUNTS } from "@/common/api/urls";
import { GetAccountsResponse } from "@/types/accounts/response";
import { useQuery } from "@tanstack/react-query";

export function useGetAccounts() {
  const getAccounts = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const response = await AxiosClientSide.get<GetAccountsResponse>(ACCOUNTS);
      const { data } = response.data;
      const { accounts } = data;

      return accounts;
    },
  });

  return getAccounts;
}
