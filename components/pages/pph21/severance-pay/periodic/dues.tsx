import InputField from '@/components/Input/input-field';
import { DuesType } from '@/types/pph21/severance-pay/dues';
import React from 'react';

interface DuesProps {
  data?: DuesType;
}

export default function Dues({ data }: DuesProps) {
  return (
    <div>
      <section className="border-black border-2 p-6 my-10 space-y-6">
        <header className="bg-[#B8E2F4] p-2 mb-5">
          <h1 className="text-center font-semibold text-lg">
            Iuran Dibayar Tenaga Kerja
          </h1>
        </header>
        <section className="flex gap-6">
          <div className="w-full space-y-2">
            <InputField
              label="Iuran Pensiun (0%)"
              name="iuran_pensiun"
              type="text"
              value={data?.iuran_pensiun || ''}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
