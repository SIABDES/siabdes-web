"use client";

import React from "react";
import Layout from "@/components/layout/layout";
import { TableComponent } from "@/components/table/table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAccounts } from "@/hooks/account/useGetAccounts";
import { TabContentAccounts } from "@/components/pages/data-master/accounts/tab-content-accounts";

export default function ListAccount() {
  const data = useGetAccounts();
  const rill_account =
    data.data?.filter((account) => parseInt(account.group_ref) < 4) ?? [];
  const nominal_account =
    data.data?.filter((account) => parseInt(account.group_ref) > 3) ?? [];
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center ">Daftar Akun</h1>
      <Tabs defaultValue="rill_account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="rill_account">Rill Account</TabsTrigger>
          <TabsTrigger value="nominal_account">Nominal Account</TabsTrigger>
        </TabsList>
        <TabContentAccounts data={rill_account} value="rill_account" />
        <TabContentAccounts data={nominal_account} value="nominal_account" />
      </Tabs>
    </Layout>
  );
}
