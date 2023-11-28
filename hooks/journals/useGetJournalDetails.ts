import { JournalDetailsResponse } from "@/types/journals/response";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetJournalDetails({
  params,
}: {
  params: { journal_id: string };
}) {
  type BackendResponseSchema = {
    data: {
      statusCode: number;
      message: string;
      data: JournalDetailsResponse;
    };
  };

  const getJournalDetails = useQuery({
    queryKey: ["journal-details", params.journal_id],
    queryFn: async () => {
      const response = await axios.get<BackendResponseSchema>(
        `/api/journals/${params.journal_id}/details`
      );

      const responseData = response.data;

      const result = responseData.data.data;

      const transactions: Record<string, React.ReactNode>[] =
        result.data_transactions.map((transaction) => {
          return {
            "No Ref": transaction.account_ref,
            "Nama Akun": transaction.account_name,
            Debit: transaction.is_credit ? 0 : transaction.amount,
            Kredit: transaction.is_credit ? transaction.amount : 0,
          };
        });

      return {
        ...result,
        data_transactions: transactions,
      };
    },
  });

  return getJournalDetails;
}
