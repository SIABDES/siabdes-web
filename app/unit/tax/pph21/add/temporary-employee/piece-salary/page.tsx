import React from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/layout';
import LaborData from '@/components/pages/pph21/temporary-employee/labor-data';
import PPh21Calculation from '@/components/pages/pph21/temporary-employee/pph21-calculation';
import PPh21RateAYear from '@/components/pages/pph21/temporary-employee/pph21-rate-a-year';

export default function PieceSalary() {
  const laborData = {
    nik: '123',
    nama_lengkap: 'John Doe',
    npwp: '789',
    status_ptkp: 'Single',
    jenis_kelamin: 'Male',
    penghasilan_tidak_kena_pajak: '50000',
  };

  const pph21Calculation = {
    upah_mingguan: '10000000',
    hari_kerja: 'senin',
    upah_per_hari: '1000000',
    frekuensi_upah: '4',
    total_upah: '1000000',
  };

  return (
    <Layout>
      <section>
        <header className="bg-[#B8E2F4] p-4">
          <h1 className="text-center font-bold text-xl">
            PPH 21 Pegawai Tidak tetap - Upah Satuan
          </h1>
        </header>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <LaborData data={laborData} />
          </div>
          <div>
            <PPh21Calculation data={pph21Calculation} />
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
