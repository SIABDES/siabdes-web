import React from 'react';
import InputCALK from '@/components/financial-statement//calk/input-calk';

const IdentitasBUMDes = () => {
  return (
    <div>
      <h1 className="p-2 font-bold text-lg mt-4">
        Sususan Pengurus dan BUMDes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputCALK
          label="Penasihat"
          placeholder="Masukkan Nama Penasihat"
          name="nama_penasihat"
          type="text"
        />
        <div className="flex">
          <label
            htmlFor="Website BUMDes"
            className="p-2 block text-sm font-medium text-black w-full"
          >
            Pengurus Operasional
          </label>
        </div>
        <InputCALK
          label="a. Ketua"
          placeholder="Masukkan Nama Ketua"
          name="nama_ketua"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputCALK
          label="b. Sekretaris"
          placeholder="Masukkan Nama Sekretaris"
          name="nama_sekretaris"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputCALK
          label="c. Bendahara"
          placeholder="Masukkan Nama Bendahara"
          name="nama_bendahara"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputCALK
          label="d. Nama Unit"
          placeholder="Masukkan Nama Unit"
          name="nama_unit"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputCALK
          label="৹ Kepala Unit"
          placeholder="Masukkan Nama Kepala Unit"
          name="nama_kepala_unit"
          type="text"
          labelClassName="ml-20 text-start"
        />
        <InputCALK
          label="• Anggota"
          placeholder="Masukkan Nama Anggota"
          name="nama_anggota"
          type="text"
          labelClassName="ml-32 text-start"
        />
        <InputCALK
          label="• Anggota"
          placeholder="Masukkan Nama Anggota"
          name="nama_kepala_anggota"
          type="text"
          labelClassName="ml-32 text-start"
        />
        <div className="flex">
          <label
            htmlFor="Website BUMDes"
            className="p-2 block text-sm font-medium text-black w-full"
          >
            Pengurus
          </label>
        </div>
        <InputCALK
          label="a. Ketua"
          placeholder="Masukkan Nama Ketua"
          name="nama_ketua"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputCALK
          label="b. Sekretaris"
          placeholder="Masukkan Nama Sekretaris"
          name="nama_sekretaris"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputCALK
          label="c. Bendahara"
          placeholder="Masukkan Nama Bendahara"
          name="nama_bendahara"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputCALK
          label="d. Nama Unit"
          placeholder="Masukkan Nama Unit"
          name="nama_unit"
          type="text"
          labelClassName="ml-10 text-start"
        />
      </div>
    </div>
  );
};

export default IdentitasBUMDes;
