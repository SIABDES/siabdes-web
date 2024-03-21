import InputField from '@/components/Input/input-field';
import React from 'react';

export default function BumdesAdministrator() {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6">B. Susunan Pengurus BUMDes</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputField
          label="Penasihat"
          name="nama_penasihat"
          type="text"
          value={'Satria Mandala'}
        />
        <div className="flex">
          <label
            htmlFor="Website BUMDes"
            className="p-2 block text-base font-medium text-black w-full"
          >
            Pengurus Operasional
          </label>
        </div>
        <InputField
          label="a. Ketua"
          name="nama_ketua_operasional"
          type="text"
          labelClassName="ml-10 text-start"
          value={'Fahmi Ramadhan'}
        />
        <InputField
          label="b. Sekretaris"
          name="nama_sekretaris_operasional"
          type="text"
          labelClassName="ml-10 text-start"
          value={'Rizki Fadilah'}
        />
        <InputField
          label="c. Bendahara"
          name="nama_bendahara_operasional"
          type="text"
          labelClassName="ml-10 text-start"
          value={'Wati Suryani'}
        />
        <InputField
          label="d. Nama Unit"
          name="nama_unit_operasional"
          type="text"
          labelClassName="ml-10 text-start"
          value={'Unit Jasa Wisata'}
        />
        <InputField
          label="৹ Kepala Unit"
          name="nama_kepala_unit_operasional"
          type="text"
          labelClassName="ml-20 text-start"
          value={'Agus Purnomo'}
        />
        <InputField
          label="• Anggota"
          name="nama_anggota_operasional"
          type="text"
          labelClassName="ml-32 text-start"
          value={'Ali Akbar'}
        />
        <InputField
          label="• Anggota"
          name="nama_kepala_anggota_operasional"
          type="text"
          labelClassName="ml-32 text-start"
          value={'Afik Kurniawan'}
        />
        <div className="flex">
          <label
            htmlFor="Website BUMDes"
            className="p-2 block text-base font-medium text-black w-full"
          >
            Pengurus
          </label>
        </div>
        <InputField
          label="a. Ketua"
          name="nama_ketua_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
          value={'Adam Maulana'}
        />
        <InputField
          label="b. Sekretaris"
          name="nama_sekretaris_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
          value={'Syifa Aulia'}
        />
        <InputField
          label="c. Bendahara"
          name="nama_bendahara_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
          value={'Rahmat Hidayat'}
        />
        <InputField
          label="d. Nama Unit"
          name="nama_unit_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
          value={'Hanum Kartika Sari'}
        />
      </div>
    </div>
  );
}
