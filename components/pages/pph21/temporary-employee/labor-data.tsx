import React from 'react';
import InputField from '@/components/Input/input-field';
import { LaborDataType } from '@/types/pph21/labor-data';

interface LaborDataProps {
  data?: LaborDataType;
}

export default function LaborData({ data }: LaborDataProps) {
  return (
    <div>
      <section className="border-black border-2 p-6 my-10 space-y-6">
        <header className="bg-[#B8E2F4] p-2 mb-5">
          <h1 className="text-center font-semibold text-lg">
            Data Tenaga Kerja
          </h1>
        </header>
        <section className="flex gap-6">
          <div className="w-full space-y-2">
            <InputField
              label="Nomer Induk Kependudukan"
              placeholder="Masukkan NIK"
              name="nik"
              type="number"
              value={data?.nik || ''}
            />
            <InputField
              label="Nama Lengkap"
              placeholder="Masukkan Nama Lengkap"
              name="nama_lengkap"
              type="text"
              value={data?.nama_lengkap || ''}
            />
            <InputField
              label="NPWP"
              placeholder="Masukkan NPWP"
              name="npwp"
              type="number"
              value={data?.npwp || ''}
            />
            <InputField
              label="Status PTKP"
              placeholder="Masukkan Status PTKP"
              name="status_ptkp"
              type="text"
              value={data?.status_ptkp || ''}
            />
            <InputField
              label="Jenis Kelamin"
              placeholder="Masukkan Jenis Kelamin"
              name="jenis_kelamin"
              type="text"
              value={data?.jenis_kelamin || ''}
            />
            <InputField
              label="Penghasilan Tidak Kena Pajak"
              placeholder="Masukkan Penghasilan Tidak Kena Pajak"
              name="penghasilan_tidak_kena_pajak"
              type="number"
              value={data?.penghasilan_tidak_kena_pajak || ''}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
