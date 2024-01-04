import InputField from '@/components/Input/input-field';
import React from 'react';

export default function BumdesAdministrator() {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6">B. Susunan Pengurus BUMDes</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputField label="Penasihat" name="nama_penasihat" type="text" />
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
        />
        <InputField
          label="b. Sekretaris"
          name="nama_sekretaris_operasional"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="c. Bendahara"
          name="nama_bendahara_operasional"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="d. Nama Unit"
          name="nama_unit_operasional"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="৹ Kepala Unit"
          name="nama_kepala_unit_operasional"
          type="text"
          labelClassName="ml-20 text-start"
        />
        <InputField
          label="• Anggota"
          name="nama_anggota_operasional"
          type="text"
          labelClassName="ml-32 text-start"
        />
        <InputField
          label="• Anggota"
          name="nama_kepala_anggota_operasional"
          type="text"
          labelClassName="ml-32 text-start"
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
        />
        <InputField
          label="b. Sekretaris"
          name="nama_sekretaris_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="c. Bendahara"
          name="nama_bendahara_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="d. Nama Unit"
          name="nama_unit_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
        />
      </div>
    </div>
  );
}
