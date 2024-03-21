import InputField from '@/components/Input/input-field';
import { SeverancePayRecipientType } from '@/types/pph21/severance-pay/severance-pay-recipient';
import React from 'react';

interface SeverancePayRecipientProps {
  data?: SeverancePayRecipientType;
}

export default function SeverancePayRecipient({
  data,
}: SeverancePayRecipientProps) {
  return (
    <section className="border-black border-2 p-6 my-10 space-y-6">
      <header className="bg-[#B8E2F4] p-2 mb-5">
        <h1 className="text-center font-semibold text-lg">
          Data Penerima Pesangon
        </h1>
      </header>
      <section className="flex gap-6">
        <div className="w-full space-y-2">
          <InputField
            label="Nomer Induk Kependudukan"
            name="nik"
            type="number"
            value={data?.nik || ''}
          />
          <InputField
            label="Nama Lengkap"
            name="nama_lengkap"
            type="text"
            value={data?.nama_lengkap || ''}
          />
          <InputField
            label="NPWP"
            name="npwp"
            type="number"
            value={data?.npwp || ''}
          />
          <InputField
            label="Status PTKP"
            name="status_ptkp"
            type="text"
            value={data?.status_ptkp || ''}
          />
          <InputField
            label="Jenis Kelamin"
            name="jenis_kelamin"
            type="text"
            value={data?.jenis_kelamin || ''}
          />
        </div>
      </section>
    </section>
  );
}
