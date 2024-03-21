import InputField from '@/components/Input/input-field';
import { PremiType } from '@/types/pph21/premi';
import React from 'react';

interface PremiProps {
  data?: PremiType;
}

export default function Premi({ data }: PremiProps) {
  return (
    <div>
      <section className="border-black border-2 p-6 my-10 space-y-6">
        <header className="bg-[#B8E2F4] p-2 mb-5">
          <h1 className="text-center font-semibold text-lg">
            Premi Dibayar pemberi Kerja
          </h1>
        </header>
        <section className="flex gap-6">
          <div className="w-full space-y-2">
            <InputField
              label="BPJS JKK (0%)"
              placeholder="Masukkan BPJS JKK"
              name="bpjs_jkk"
              type="text"
              value={data?.bpjs_jkk || ''}
            />
            <InputField
              label="BPJS JK (0%)"
              placeholder="Masukkan BPJS JK"
              name="bpjs_jk"
              type="text"
              value={data?.bpjs_jk || ''}
            />
            <InputField
              label="BPJS JHT (0%)"
              placeholder="Masukkan BPJS JHT"
              name="bpjs_jht"
              type="text"
              value={data?.bpjs_jht || ''}
            />
            <InputField
              label="BPJS JKM (0%)"
              placeholder="Masukkan BPJS JKM"
              name="bpjs_jkm"
              type="text"
              value={data?.bpjs_jkm || ''}
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
