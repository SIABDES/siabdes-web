import React from 'react';
import InputField from '@/components/Input/input-field';
import { PPh21CalculationType } from '@/types/pph21/pph21/non-employee-supervisor/pph21-calculation';

interface PPh21CalculationProps {
  data?: PPh21CalculationType;
}
export default function PPh21Calculation({ data }: PPh21CalculationProps) {
  return (
    <div>
      <section className="border-black border-2 p-6 my-10 space-y-6">
        <header className="bg-[#B8E2F4] p-2 mb-5">
          <h1 className="text-center font-semibold text-lg">
            Perhitungan PPh 21
          </h1>
        </header>
        <div className="bg-[#c7e5f4] p-1">
          <h1 className="text-center font-medium text-base">Pesangon</h1>
        </div>
        <section className="flex gap-6">
          <div className="w-full space-y-2">
            <InputField
              label="Jumlah Honorarium"
              name="jumlah_honorarium"
              type="text"
              value={data?.jumlah_honorarium || ''}
            />
          </div>
        </section>
        <div className="bg-[#c7e5f4] p-1">
          <h1 className="text-center font-medium text-base">PPh 21 Pesangon</h1>
        </div>
        <section className="flex gap-6">
          <div className="w-full space-y-2">
            <InputField
              label="PPh 21 Honorarium"
              name="pph_21_honorarium"
              type="text"
              value={data?.pph_21_honorarium || ''}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
