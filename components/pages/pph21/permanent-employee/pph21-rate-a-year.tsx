import React from 'react';
import TaxRateTable from '../table/table-tax';

export default function PPh21RateAYear() {
  return (
    <div>
      <section className="border-black border-2 p-6 my-10 space-y-6">
        <header className="bg-[#B8E2F4] p-2 mb-5">
          <h1 className="text-center font-semibold text-lg">Tarif PPh 21</h1>
        </header>
        <TaxRateTable />
      </section>
    </div>
  );
}
