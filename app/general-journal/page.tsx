"use client";

import React from "react";
import Layout from "@/components/layout/layout";
import { TableComponent } from "@/components/table/table";
import { useGetGeneralJournal } from "@/hooks/journals/useGetGeneralJournal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Generaljournal() {
  const journal = useGetGeneralJournal();
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">Jurnal Umum</h1>
      <Link href="/general-journal/add-journal">
        <Button className="mb-4">Tambah</Button>
      </Link>
      <TableComponent
        onRowClick={() => {
          console.log("row clicked");
        }}
        data={journal.data ?? [{}]}
      ></TableComponent>
    </Layout>
  );
}
