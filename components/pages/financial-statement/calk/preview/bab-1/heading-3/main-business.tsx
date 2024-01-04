'use client';

import InputField from '@/components/Input/input-field';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import AssetAndTurnoverHistory from '../../../business-activities/main-business/asset-and-turnover-history';
import TableWithSum from './table/table-with-sum';
import TableStandart from './table/table-standart';
import CurrentNumberAndSourcesOfLabor from '../../../business-activities/main-business/current-number-and-sources-of-labor';
import TableLaborSource from './table/table-labor-source';

export default function MainBusiness() {
  const dataPemodalan = [{ 'Sumber Modal': '', 'Jumlah Modal': '', '%': '' }];
  const dataAsetOmzet = [{ Tahun: '', Aset: '', Omzet: '' }];
  const dataProfitDividen = [
    { Tahun: '', 'Keuntungan Bersih': '', 'Dividen untuk BUMDes': '' },
  ];
  const dataLaborSource = [
    { Uraian: '', 'Tenaga Kerja Tetap': '', 'Tenaga Kerja Tidak Tetap': '' },
  ];
  return (
    <div>
      <h2 className="text-base font-semibold mt-2">1. Bisnis Utama</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2 pl-3">
        <InputField
          label="a.. Bidang Usaha Utama"
          name="bidang_usaha_utama"
          type="text"
        />
        <InputField
          label="b. Kerjasama dengan Pihak Ketiga"
          name="kerjasama_dengan_pihak_ketiga"
          type="text"
        />
        <div className="flex">
          <Label className="p-2 block text-base font-medium text-black w-full">
            c. Deskripsi Kegiatan Usaha
          </Label>
          <h1 className="p-2 text-base font-medium text-black">:</h1>
          <Textarea
            name="deskripsi_kegiatan_usaha"
            className={`p-2 w-full border rounded-md ml h-28`}
          />
        </div>
        <InputField
          label="d. Susunan Pengurus"
          name="nama_pengurus"
          type="text"
        />
        <InputField
          label="৹ Kepala Unit"
          name="nama_kepala_unit"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="• Anggota"
          name="nama_anggota"
          type="text"
          labelClassName="ml-20 text-start"
        />
        <InputField
          label="• Anggota"
          name="nama_kepala_anggota"
          type="text"
          labelClassName="ml-20 text-start"
        />
        <InputField
          label="e. Tahun Pendirian"
          name="tahun_pendirian"
          type="text"
        />
        <div>
          <InputField
            label="f. Riwayat Pemodalan"
            name="tahun_mulai_operasi"
            type="text"
          />
          <TableWithSum data={dataPemodalan} />
        </div>
        <div>
          <InputField
            label="g. Riwayat Aset dan Omzet"
            name="riwayat_aset_omzet"
            type="text"
          />
          <TableStandart data={dataAsetOmzet} />
        </div>
        <div>
          <InputField
            label="h. Riwayat Keuntungan Bersih dan Dividen untuk BUMDes"
            name="riwayat_keuntungan_bersih_dividen_untuk_bumdes"
            type="text"
          />
          <TableStandart data={dataProfitDividen} />
        </div>
        <div>
          <InputField
            label="i. Jumlah dan Sumber Tenaga Kerja saat ini"
            name="jumlah_dan_sumber_tenaga_kerja_saat_ini"
            type="text"
          />
          <TableLaborSource data={dataLaborSource} />
        </div>
      </div>
    </div>
  );
}
