import React from 'react';
import InputField from '@/components/Input/input-field';
import { PPh21CalculationType } from '@/types/pph21/temporary-employee/pph21-calculation';

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
              label="Upah Mingguan"
              name="upah_mingguan"
              type="text"
              value={data?.upah_mingguan || ''}
            />
            <InputField
              label="Hari Kerja dalam Seminggu"
              name="hari_kerja"
              type="text"
              value={data?.hari_kerja || ''}
            />
            <InputField
              label="Upah per Hari"
              name="upah_per_hari"
              type="text"
              value={data?.upah_per_hari || ''}
            />
            <InputField
              label="Frekuensi Menerima Upah Sebulan"
              name="frekuensi_upah"
              type="text"
              value={data?.frekuensi_upah || ''}
            />
            <InputField
              label="Total Upah Sebulan"
              name="total_upah"
              type="text"
              value={data?.total_upah || ''}
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
              label="PTKP/PTKP Sehari"
              name="ptkp"
              type="text"
              value={data?.ptkp || ''}
            />
            <InputField
              label="Upah Kena Pajak Sehari"
              placeholder="Rp"
              name="upah_kena_pajak"
              type="text"
              value={data?.upah_kena_pajak || ''}
            />
            <InputField
              label="PPh 21 Terutang Sehari"
              name="pph_21_terutang_sehari"
              type="text"
              value={data?.pph21_terutang_sehari || ''}
            />
            <InputField
              label="PPh 21 atas Upah Mingguan"
              name="pph_21_atas_upah_mingguan"
              type="text"
              value={data?.pph_21_atas_upah_mingguan || ''}
            />
            <InputField
              label="Penghasilan  Disetahunkan"
              name="penghasilan_disetahunkan"
              type="text"
              value={data?.penghasilan_disetahunkan || ''}
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
              label="PPh 21 Sebulan"
              name="pph_21_sebulan"
              type="text"
              value={data?.pph_21_sebulan || ''}
            />
            <InputField
              label="PPh 21 Seminggu"
              name="pph_21_seminggu"
              type="text"
              value={data?.pph_21_seminggu || ''}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
