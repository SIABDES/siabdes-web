import React from 'react';
import InputCALK from '@/components/financial-statement//calk/input-calk';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const MainBusiness = () => {
  return (
    <div>
      <h1 className="p-2 font-bold text-lg mt-4">Aktivitas Usaha</h1>
      <h1 className="p-2 font-bold text-sm">Usaha Utama</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputCALK
          label="Bidang Usaha Utama"
          placeholder="Masukkan Bidang Usaha Utama"
          name="bidang_usaha_utama"
          type="text"
        />
        <InputCALK
          label="Kerjasama dengan Pihak Ketiga"
          placeholder="Masukkan Kerjasama dengan Pihak Ketiga"
          name="kerjasama_dengan_pihak_ketiga"
          type="text"
        />
        <div className="flex">
          <Label className="p-2 block text-sm font-medium text-black w-full">
            Deskripsi Kegiatan Usaha
          </Label>
          <h1 className="p-2 text-sm font-medium text-black">:</h1>
          <Textarea
            placeholder="Masukkan Deskripsi Kegiatan Usaha"
            name="deskripsi_kegiatan_usaha"
            className={`p-2 w-full border rounded-md ml h-28`}
          />
        </div>
        <InputCALK
          label="Susunan Pengurus"
          placeholder="Masukkan Nama Pengurus"
          name="nama_pengurus"
          type="text"
        />
        <InputCALK
          label="৹ Kepala Unit"
          placeholder="Masukkan Nama Kepala Unit"
          name="nama_kepala_unit"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputCALK
          label="• Anggota"
          placeholder="Masukkan Nama Anggota"
          name="nama_anggota"
          type="text"
          labelClassName="ml-20 text-start"
        />
        <InputCALK
          label="• Anggota"
          placeholder="Masukkan Nama Anggota"
          name="nama_kepala_anggota"
          type="text"
          labelClassName="ml-20 text-start"
        />
      </div>
    </div>
  );
};
export default MainBusiness;
