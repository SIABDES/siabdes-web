import React from 'react';
import InputField from '@/components/Input/input-field';
import { PPh21CalculationType } from '@/types/pph21/severance-pay/pph21-calculation';

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
          <h1 className="text-center font-medium text-base">
            Penghasilan Bruto
          </h1>
        </div>
        <section className="flex gap-6">
          <div className="w-full space-y-2">
            <InputField
              label="Pensiun Sebulan"
              name="pensiun_sebulan"
              type="text"
              value={data?.pensiun_sebulan || ''}
            />
          </div>
        </section>
        <div className="bg-[#c7e5f4] p-1">
          <h1 className="text-center font-medium text-base">
            Penghasilan Neto
          </h1>
        </div>
        <section className="flex gap-6">
          <div className="w-full space-y-2">
            <InputField
              label="Biaya Pensiun"
              name="biaya_pensiun"
              type="text"
              value={data?.biaya_pensiun || ''}
            />
            <InputField
              label="Iuran Dibayar Tenaga Kerja"
              name="iuran_dibayar"
              type="text"
              value={data?.iuran_dibayar || ''}
            />
            <InputField
              label="Penghasilan Neto"
              name="penghasilan_neto"
              type="text"
              value={data?.penghasilan_neto || ''}
            />
          </div>
        </section>
        <div className="bg-[#c7e5f4] p-1">
          <h1 className="text-center font-medium text-base">
            Perhitungan Pajak
          </h1>
        </div>
        <section className="flex gap-6">
          <div className="w-full space-y-2">
            <InputField
              label="Masa Penghasilan"
              name="masa_penghasilan"
              type="text"
              value={data?.masa_penghasilan || ''}
            />
            <InputField
              label="Penghasilan Neto Disetahunkan"
              name="penghasilan_neto_disetahunkan"
              type="text"
              value={data?.penghasilan_neto_disetahunkan || ''}
            />
            <InputField
              label="Penghasilan Tidak Kena Pajak"
              name="penghasilan_tidak_kena_pajak"
              type="text"
              value={data?.penghasilan_tidak_kena_pajak || ''}
            />
            <InputField
              label="Penghasilan Kena Pajak"
              name="penghasilan_kena_pajak"
              type="text"
              value={data?.penghasilan_kena_pajak || ''}
            />
            <InputField
              label="PPh 21 Setahun"
              name="pph_21_setahun"
              type="text"
              value={data?.pph_21_setahun || ''}
            />
            <InputField
              label="PPh 21 atas Pensiun Bulan ini"
              name="pph_21_atas_pensiun_bulan_ini"
              type="text"
              value={data?.pph_21_atas_pensiun_bulan_ini || ''}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
