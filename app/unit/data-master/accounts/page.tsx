"use client";

import Layout from "@/components/layout/layout";
import { TabContentAccounts } from "@/components/pages/data-master/accounts/tab-content-accounts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAccounts } from "@/hooks/account/useGetAccounts";
import Link from "next/link";

export default function ListAccount() {
  const data = useGetAccounts();
  const rill_account =
    data.data?.filter((account) => parseInt(account.group_ref) < 4) ?? [];
  const nominal_account =
    data.data?.filter((account) => parseInt(account.group_ref) > 3) ?? [];
  return (
    <Layout>
      <header className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-center align-baseline">
          Daftar Akun
        </h1>
        <Link href="/unit/data-master/accounts/add">
          <Button>Tambah Akun</Button>
        </Link>
      </header>
      <Tabs defaultValue="rill_account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="rill_account">Akun Rill</TabsTrigger>
          <TabsTrigger value="nominal_account">Akun Nominal</TabsTrigger>
        </TabsList>
        <TabContentAccounts data={rill_account} value="rill_account" />
        <TabContentAccounts data={nominal_account} value="nominal_account" />
      </Tabs>
    </Layout>
  );
}
