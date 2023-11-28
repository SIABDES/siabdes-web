"use client";

import Layout from "@/components/layout/layout";
import { PatanTable } from "@/components/patan-ui/table";
import { useGetJournalDetails } from "@/hooks/journals/useGetJournalDetails";

export default function Details({
  params,
}: {
  params: { journal_id: string };
}) {
  const details = useGetJournalDetails({ params });

  return (
    <Layout>
      <PatanTable data={details.data ?? [{}]} />
    </Layout>
  );
}
