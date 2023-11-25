"use client";

import React from "react";
import Layout from "@/components/layout/layout";
import { TableComponent } from "@/components/table/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useGetAdjustmentJournal } from "@/hooks/journals/useGetAdjustmentJournal";

export default function Adjustmentjournal() {
  const journal = useGetAdjustmentJournal();
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Jurnal Penyesuaian
      </h1>
      <Link href="/adjustment-journal/add-journal">
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
