"use client";

import { AxiosClientSide } from "@/common/api";
import { MutationJournalRequest } from "@/types/journals";
import { GetJournalDetailsResponse } from "@/types/journals/response";
import { useQuery } from "@tanstack/react-query";
import { UseFormReturn } from "react-hook-form";

export function useGetJournalDetails({
  params,
}: {
  params: { journal_id: string };
}) {
  const getJournalDetails = useQuery({
    queryKey: ["journal-details", params.journal_id],
    queryFn: async () => {
      const response = await AxiosClientSide.get<GetJournalDetailsResponse>(
        `/journals/${params.journal_id}/details`
      );

      const { data } = response.data;

      const transactions: Record<string, React.ReactNode>[] =
        data.data_transactions.map((transaction) => {
          return {
            "No Ref": transaction.account_ref,
            "Nama Akun": transaction.account_name,
            Debit: transaction.is_credit ? 0 : transaction.amount,
            Kredit: transaction.is_credit ? transaction.amount : 0,
          };
        });

      return {
        ...data,
        tableData: transactions,
      };
    },
  });

  return getJournalDetails;
}
