import InputField from '@/components/Input/input-field';
import { DuesType } from '@/types/pph21/dues';
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
              label="BPJS JHT (0%)"
              placeholder="Masukkan BPJS JHT"
              name="bpjs_jht"
              type="text"
              value={data?.bpjs_jht || ''}
            />
            <InputField
              label="BPJS KES (0%)"
              placeholder="Masukkan BPJS KES"
              name="bpjs_kes"
              type="text"
              value={data?.bpjs_kes || ''}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
