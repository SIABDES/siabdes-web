"use client";

import React from "react";
import Layout from "@/components/layout/layout";
import { useSession } from "next-auth/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IdentityPosition from "@/components/pages/financial-statement/calk/identity-position";
import CapitalAssetsNetProfitLabor from "@/components/pages/financial-statement/calk/capital-assets-netprofit-labor";

export default function UnitProfile() {
  const session = useSession();

  return (
    <Layout>
      <header>
        <h1 className="text-2xl font-bold mb-6 text-center">
          Data Unit {session.data?.user.unitId} BUMDes{" "}
          {session.data?.user.bumdesId}
        </h1>
      </header>
      <section>
        <Tabs defaultValue="identitas" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="identitas">
              Identitas dan Kedudukan unit {session.data?.user.unitId}
            </TabsTrigger>
            <TabsTrigger value="permodalan">
              Permodalan, Aset, Keuntungan Bersih dan Tenaga Kerja
            </TabsTrigger>
          </TabsList>
          <TabsContent value="identitas">
            <IdentityPosition />
          </TabsContent>
          <TabsContent value="permodalan">
            <CapitalAssetsNetProfitLabor />
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
}
