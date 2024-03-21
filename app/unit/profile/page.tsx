'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IdentityPosition from '@/components/pages/financial-statement/calk/identity-position';
import CapitalAssetsNetProfitLabor from '@/components/pages/financial-statement/calk/capital-assets-netprofit-labor';

export default function UnitProfile() {
  return (
    <Layout>
      <header>
        <h1 className="text-2xl font-bold mb-6 text-center">Data Unit</h1>
      </header>
      <section>
        <Tabs defaultValue="identitas" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="identitas">
              Identitas dan Kedudukan unit
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
