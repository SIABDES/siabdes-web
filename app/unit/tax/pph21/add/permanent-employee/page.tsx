'use client';

import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import React from 'react';
import LaborData from '@/components/pages/pph21/general/labor-data';
import PPh21Calculation from '@/components/pages/pph21/permanent-employee/pph21-calculation';
import Premi from '@/components/pages/pph21/permanent-employee/premi';
import Dues from '@/components/pages/pph21/permanent-employee/dues';
import PPh21RateAYear from '@/components/pages/pph21/permanent-employee/pph21-rate-a-year';

export default function PermanentEmployee() {
  const laborData = {
    nik: '123',
    nama_lengkap: 'John Doe',
    npwp: '789',
    status_ptkp: 'Single',
    masa_penghasilan_setahun: '2022',
    jenis_kelamin: 'Male',
    penghasilan_tidak_kena_pajak: '50000',
  };

  const premi = {
    bpjs_jkk: '80',
    bpjs_jk: '30',
    bpjs_jht: '0',
    bpjs_jkm: '0',
    bpjs_kes: '0',
  };

  const dues = {
    bpjs_jht: '100',
    bpjs_kes: '0',
  };

  const pph21Calculation = {
    gaji_pokok: '10000000',
    tunjangan_tetap: '1000000',
    bonus: '1000000',
    thr: '1000000',
    tunjangan_pph: '1000000',
    jumlah_premi: '2000000',
    jumlah_bruto: '10000000',
    biaya_jabatan: '200',
    iuran_dibayar: '400000',
    penghasilan_neto: '500000',
    penghasilan_neto_disetahunkan: '5000000',
    penghasilan_tidak_kena_pajak: '240000',
    penghasilan_kena_pajak: '450000',
    pph_21_setahun: '500000',
    pph_21_bulan_ini: '0',
  };

  return (
    <Layout>
      <section>
        <header className="bg-[#B8E2F4] p-4">
          <h1 className="text-center font-bold text-xl">
            PPH 21 Pegawai Tetap
          </h1>
        </header>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <LaborData data={laborData} />
            <Premi data={premi} />
            <Dues data={dues} />
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
