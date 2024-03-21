import InputField from '@/components/Input/input-field';
import React from 'react';
import { Label } from '@radix-ui/react-label';
import TaxRateTableSeverancePay from '../../table/table-tax-final';

export default function PPh21RateAYear() {
  return (
    <div>
      <section className="border-black border-2 p-6 my-10 space-y-6">
        <header className="bg-[#B8E2F4] p-2 mb-5">
          <h1 className="text-center font-semibold text-lg">
            Tarif PPh 21 Bersifat Final
          </h1>
        </header>
        {/* <section className="flex gap-6">
          <div className="w-full space-y-2">
            <div className="flex">
              <InputField placeholder="5%" name="5%" />
              <InputField name="pajak_5%" />
              <InputField name="pajak_5%_jumlah" />
            </div>
          </div>
        </section> */}
        <TaxRateTableSeverancePay />
      </section>
    </div>
  );
}
