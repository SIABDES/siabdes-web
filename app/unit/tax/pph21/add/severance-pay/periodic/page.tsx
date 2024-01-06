import Layout from '@/components/layout/layout';
import Dues from '@/components/pages/pph21/severance-pay/periodic/dues';
import PPh21Calculation from '@/components/pages/pph21/severance-pay/periodic/pph21-calculation';
import PPh21RateAYear from '@/components/pages/pph21/severance-pay/periodic/pph21-rate-a-year';
import SeverancePayRecipient from '@/components/pages/pph21/general/severance-pay-recipient';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function Periodic() {
  return (
    <Layout>
      <section>
        <header className="bg-[#B8E2F4] p-4">
          <h1 className="text-center font-bold text-xl">
            PPH 21 Pesangon - Pesangon Dibayar Secara Berkala
          </h1>
        </header>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <SeverancePayRecipient />
            <Dues />
          </div>
          <div>
            <PPh21Calculation />
            <PPh21RateAYear />
          </div>
        </section>
      </section>
      <div className="flex justify-end mt-10 mb-10 mr-8 gap-10">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded">
          Simpan
        </Button>
      </div>
    </Layout>
  );
}
