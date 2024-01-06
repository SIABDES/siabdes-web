import React from 'react';
import InputField from '@/components/Input/input-field';
import { PPh21CalculationType } from '@/types/pph21/permanent-employee/pph21-calculation';

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
              label="Gaji Pokok"
              placeholder="Masukkan Gaji Pokok"
              name="gaji_pokok"
              type="text"
              value={data?.gaji_pokok || ''}
            />
            <InputField
              label="Tunjangan Tetap"
              placeholder="Masukkan Tunjangan Tetap"
              name="tunjangan_tetap"
              type="text"
              value={data?.tunjangan_tetap || ''}
            />
            <InputField
              label="Bonus"
              placeholder="Masukkan Bonus"
              name="bonus"
              type="text"
              value={data?.bonus || ''}
            />
            <InputField
              label="THR"
              placeholder="Masukkan THR"
              name="thr"
              type="text"
              value={data?.thr || ''}
            />
            <InputField
              label="Tunjangan PPh"
              placeholder="Masukkan Tunjangan PPh"
              name="tunjangan_pph"
              type="text"
              value={data?.tunjangan_pph || ''}
            />
            <InputField
              label="Jumlah Premi Dibayar Pemberi Kerja"
              placeholder="Masukkan Jumlah Premi Dibayar Pemberi Kerja"
              name="jumlah_premi"
              type="text"
              value={data?.jumlah_premi || ''}
            />
            <InputField
              label="Jumlah Penghasilan Bruto"
              placeholder="Masukkan Jumlah Penghasilan Bruto"
              name="jumlah_bruto"
              type="text"
              value={data?.jumlah_bruto || ''}
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
              label="Biaya Jabatan"
              placeholder="Masukkan Biaya Jabatan"
              name="biaya_jabatan"
              type="text"
              value={data?.biaya_jabatan || ''}
            />
            <InputField
              label="Iuran Dibayar Tenaga Kerja"
              placeholder="Masukkan Iuran Dibayar Tenaga Kerja"
              name="iuran_dibayar"
              type="text"
              value={data?.iuran_dibayar || ''}
            />
            <InputField
              label="Penghasilan Neto"
              placeholder="Masukkan Penghasilan Neto"
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
              label="Penghasilan Neto Disetahunkan"
              placeholder="Masukkan Penghasilan Neto Disetahunkan"
              name="penghasilan_neto_disetahunkan"
              type="text"
              value={data?.penghasilan_neto_disetahunkan || ''}
            />
            <InputField
              label="Penghasilan Tidak Kena Pajak"
              placeholder="Masukkan Penghasilan Tidak Kena Pajak"
              name="penghasilan_tidak_kena_pajak"
              type="text"
              value={data?.penghasilan_tidak_kena_pajak || ''}
            />
            <InputField
              label="Penghasilan Kena Pajak"
              placeholder="Masukkan Penghasilan Kena Pajak"
              name="penghasilan_kena_pajak"
              type="text"
              value={data?.penghasilan_kena_pajak || ''}
            />
            <InputField
              label="PPh 21 Setahun"
              placeholder="Masukkan PPh 21 Setahun"
              name="pph_21_setahun"
              type="text"
              value={data?.pph_21_setahun || ''}
            />
            <InputField
              label="PPh 21 atas Penghasilan Bulan ini"
              placeholder="Masukkan PPh 21 atas Penghasilan Bulan ini"
              name="pph_21_bulan_ini"
              type="text"
              value={data?.pph_21_bulan_ini || ''}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
