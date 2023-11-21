"use client";
import Layout from "@/components/layout/layout";
import { PatanTable } from "@/components/patan-ui/table";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";
import { GeneralJournalDetailsResponse } from "@/types/journals/response";

export default function Details({
  params,
}: {
  params: { journal_id: string };
}) {
  type BackendResponseSchema = {
    data: {
      statusCode: number;
      message: string;
      data: GeneralJournalDetailsResponse;
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
            "No Ref": transaction.account_id,
            "Nama Akun": "Bambang akun",
            Debit: transaction.is_credit ? 0 : transaction.amount,
            Kredit: transaction.is_credit ? transaction.amount : 0,
          };
        });

      return transactions ?? [];
    },
  });

  return (
    <Layout>
      <PatanTable data={getJournalDetails.data ?? [{}]} />
    </Layout>
  );
}
