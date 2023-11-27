"use client";

import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import { TableComponent } from "@/components/table/table";
import { Button } from "@/components/ui/button";
import { ComboBox } from "@/components/ui/combobox";
import { useGetLedger } from "@/hooks/ledger/useGetLedger";
import { useSession } from "next-auth/react";

export default function Ledger() {
  const session = useSession();

  const [selectedAccountId, setSelectedAccountId] = useState<
    string | undefined
  >(undefined);

  const tableData = [
    {
      No: "1",
      Tanggal: "17 Agustus 2023",
      Keterangan: "Membeli peralatan kantor",
      Debit: "20000",
      Kredit: "20000",
      Saldo: "20000",
    },
    {
      No: "2",
      Tanggal: "26 agustus 2023",
      Keterangan: "Membeli rumah untuk orang tua di kampung",
      Debit: "40000",
      Kredit: "40000",
      Saldo: "40000",
    },
    {
      No: "3",
      Tanggal: "16 september 2023",
      Keterangan: "Membeli rumah untuk kucing",
      Debit: "30000",
      Kredit: "30000",
      Saldo: "20000",
    },
    {
      No: "4",
      Tanggal: "20 oktober 2023",
      Keterangan: "Membeli makanan untuk kucing",
      Debit: "80000",
      Kredit: "80000",
      Saldo: "20000",
    },
  ];
  {
    const getLedgers = useGetLedger({
      account_id: parseInt(selectedAccountId ?? "0"),
    });

    return (
      <Layout>
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">Buku Besar</h1>
          <ComboBox
            items={[]}
            value={selectedAccountId}
            setValue={setSelectedAccountId}
          />
          {getLedgers.data && <TableComponent data={getLedgers.data} />}
        </div>
      </Layout>
    );
  }
}
