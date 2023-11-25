import { AccountsResponse } from '@/types/accounts/response';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGetAccounts() {
  type BackendResponseSchema = {
    data: {
      statusCode: number;
      message: string;
      data: AccountsResponse;
    };
  };

  const getAccounts = useQuery({
    queryKey: ['accounts'],
    queryFn: async () => {
      const response = await axios.get<BackendResponseSchema>(`/api/accounts`);
      const responseData = response.data;
      const result = responseData.data.data;

      const accounts: Record<string, React.ReactNode>[] = result.accounts.map(
        (account) => {
          return {
            accounts: account.name,
          };
        }
      );
      return accounts ?? [];
    },
  });

  return getAccounts;
}
