import React from 'react';
import InputFieldield from '@/components/Input/input-field';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import InputField from '@/components/Input/input-field';

const MainBusiness = () => {
  return (
    <div>
      <h1 className="p-2 font-bold text-lg mt-4">Aktivitas Usaha</h1>
      <h1 className="p-2 font-bold text-sm">Usaha Utama</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputFieldield
          label="Bidang Usaha Utama"
          placeholder="Masukkan Bidang Usaha Utama"
          name="bidang_usaha_utama"
          type="text"
        />
        <InputFieldield
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
        <InputField
          label="Susunan Pengurus"
          placeholder="Masukkan Nama Pengurus"
          name="nama_pengurus"
          type="text"
        />
        <InputField
          label="৹ Kepala Unit"
          placeholder="Masukkan Nama Kepala Unit"
          name="nama_kepala_unit"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="• Anggota"
          placeholder="Masukkan Nama Anggota"
          name="nama_anggota"
          type="text"
          labelClassName="ml-20 text-start"
        />
        <InputField
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
