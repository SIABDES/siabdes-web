import React from 'react';
import InputField from '@/components/Input/input-field';

const LegalBasisForPreparingFinancialStatements = () => {
  return (
    <div>
      <h1 className="p-2 font-bold text-lg mt-4">
        Landasan Hukum Penyusunan Laporan Keuangan
      </h1>
      <p className="p-2 font-normal text-sm">
        Pelaporan keuangan BUMDes Nama BUMDes diselenggarakan berdasarkan
        peraturan perundang-undangan yang mengatur keuangan, yaitu:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputField
          label="Peraturan Daerah Kabupaten"
          placeholder="Masukkan Peraturan Daerah Kabupaten"
          name="peraturan_daerah_kabupaten"
          type="text"
        />
        <InputField
          label="Nomor"
          placeholder="Masukkan Nomor"
          name="nomor"
          type="text"
        />
        <InputField
          label="Tahun"
          placeholder="Masukkan Tahun"
          name="tahun"
          type="number"
        />
        <InputField
          label="Tentang"
          placeholder="Masukkan Tentang"
          name="tentang"
          type="text"
        />
        <InputField
          label="Peraturan Desa"
          placeholder="Masukkan Peraturan Desa"
          name="peraturan_desa"
          type="text"
        />
        <InputField
          label="Nomor"
          placeholder="Masukkan Nomor"
          name="nomor"
          type="text"
        />
        <InputField
          label="Tahun"
          placeholder="Masukkan Tahun"
          name="tahun"
          type="number"
        />
        <InputField
          label="Tentang"
          placeholder="Masukkan Tentang"
          name="tentang"
          type="text"
        />
        <InputField
          label="AD/ART BUMDes"
          placeholder="Masukkan AD/ART BUMDes"
          name="ad_art_bumdes"
          type="text"
        />
      </div>

      <h1 className="p-2 font-bold text-lg mt-4">
        Tanggal Pembuatan Dokumen Catatan Akhir Laporan Keuangan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputField
          label="Tanggal Dokumen"
          placeholder="Masukkan Tanggal Dokumen"
          name="tanggal_dokumen"
          type="date"
        />
        <InputField
          label="Nama Ketua"
          placeholder="Masukkan Nama Ketua"
          name="nama_ketua"
          type="text"
        />
      </div>
    </div>
  );
};
export default LegalBasisForPreparingFinancialStatements;
