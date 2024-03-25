"use client";

import React, { use, useState } from "react";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import InputField from "@/components/Input/input-field";
import RecapOfProfitSharing from "@/components/pages/financial-statement/calk/recap-of-profit-sharing";
import { useRouter } from "next/navigation";
import { RecapOfProfitSharingFormData } from "@/types/financial-statement/calk/recap-of-profit-sharing";
import { useSession } from "next-auth/react";

export default function AddCALK() {
  const router = useRouter();
  const session = useSession();

  const [formValues, setFormValues] = useState({
    peraturan_daerah_kabupaten: "",
    nomor_peraturan_daerah_kabupaten: "",
    tahun_peraturan_daerah_kabupaten: "",
    tentang_peraturan_daerah_kabupaten: "",
    peraturan_desa: "",
    nomor_peraturan_desa: "",
    tahun_peraturan_desa: "",
    tentang_peraturan_desa: "",
    ad_art_bumdes: "",
    tanggal_dokumen: "",
    nama_ketua: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [recapOfProfitSharingData, setRecapOfProfitSharingData] =
    useState<RecapOfProfitSharingFormData>({});

  const handleRecapOfProfitSharingChange = (
    updatedData: RecapOfProfitSharingFormData
  ) => {
    setRecapOfProfitSharingData(updatedData);
  };
  const handleSave = () => {
    const data = {
      peraturan_daerah_kabupaten: formValues.peraturan_daerah_kabupaten,
      nomor_peraturan_daerah_kabupaten:
        formValues.nomor_peraturan_daerah_kabupaten,
      tahun_peraturan_daerah_kabupaten:
        formValues.tahun_peraturan_daerah_kabupaten,
      tentang_peraturan_daerah_kabupaten:
        formValues.tentang_peraturan_daerah_kabupaten,
      peraturan_desa: formValues.peraturan_desa,
      nomor_peraturan_desa: formValues.nomor_peraturan_desa,
      tahun_peraturan_desa: formValues.tahun_peraturan_desa,
      tentang_peraturan_desa: formValues.tentang_peraturan_desa,
      ad_art_bumdes: formValues.ad_art_bumdes,
      tanggal_dokumen: formValues.tanggal_dokumen,
      nama_ketua: formValues.nama_ketua,
      recapOfProfitSharing: recapOfProfitSharingData,
    };

    router.push(
      "/unit/financial-statement/report/calk/preview?data=" +
        JSON.stringify(data)
    );
  };

  return (
    <Layout>
      <header>
        <h1 className="text-xl font-bold mb-3 text-center">
          Tambah Catatan Atas Laporan Keuangan
        </h1>
        <h2 className="p-2 mt-4 text-lg font-bold text-black w-full">
          Landasan Hukum Penyusunan Laporan Keuangan
        </h2>
        <h3 className="p-2 text-sm font-medium text-black w-full">
          Pelaporan keuangan BUMDes {session.data?.user.bumdesName}{" "}
          diselenggarakan berdasarkan peraturan perundang-undangan yang mengatur
          keuangan, yaitu:
        </h3>
      </header>
      <section className="space-y-2">
        <InputField
          label="Peraturan Daerah Kabupaten"
          placeholder="Masukkan Peraturan Daerah Kabupaten"
          name="peraturan_daerah_kabupaten"
          type="text"
          value={formValues.peraturan_daerah_kabupaten}
          onChange={handleInputChange}
          labelClassName="text-sm font-bold text-black"
        />
        <InputField
          label="Nomor"
          placeholder="Masukkan nomor"
          name="nomor_peraturan_daerah_kabupaten"
          type="text"
          value={formValues.nomor_peraturan_daerah_kabupaten}
          onChange={handleInputChange}
        />
        <InputField
          label="Tahun"
          placeholder="Masukkan tahun"
          name="tahun_peraturan_daerah_kabupaten"
          type="text"
          value={formValues.tahun_peraturan_daerah_kabupaten}
          onChange={handleInputChange}
        />
        <InputField
          label="Tentang"
          placeholder="Masukkan tentang"
          name="tentang_peraturan_daerah_kabupaten"
          type="text"
          value={formValues.tentang_peraturan_daerah_kabupaten}
          onChange={handleInputChange}
        />
        <InputField
          label="Peraturan Desa"
          placeholder="Masukkan Peraturan Desa"
          name="peraturan_desa"
          type="text"
          value={formValues.peraturan_desa}
          onChange={handleInputChange}
          labelClassName="text-sm font-bold text-black"
        />
        <InputField
          label="Nomor"
          placeholder="Masukkan nomor"
          name="nomor_peraturan_desa"
          type="text"
          value={formValues.nomor_peraturan_desa}
          onChange={handleInputChange}
        />
        <InputField
          label="Tahun"
          placeholder="Masukkan tahun"
          name="tahun_peraturan_desa"
          type="text"
          value={formValues.tahun_peraturan_desa}
          onChange={handleInputChange}
        />
        <InputField
          label="Tentang"
          placeholder="Masukkan tentang"
          name="tentang_peraturan_desa"
          type="text"
          value={formValues.tentang_peraturan_desa}
          onChange={handleInputChange}
        />
        <InputField
          label="AD/ART BUMDes"
          placeholder="Masukkan AD/ART BUMDes"
          name="ad_art_bumdes"
          type="text"
          value={formValues.ad_art_bumdes}
          onChange={handleInputChange}
          labelClassName="text-sm font-bold text-black"
        />
      </section>
      <section className="space-y-2">
        <h2 className="p-2 mt-4 text-lg font-bold text-black w-full">
          Tanggal Pembuatan Dokumen Catatan Akhir Laporan Keuangan
        </h2>
        <InputField
          label="Tanggal Dokumen"
          type="date"
          name="tanggal_dokumen"
          value={formValues.tanggal_dokumen}
          onChange={handleInputChange}
        />
        <InputField
          label="Nama ketua"
          type="text"
          name="nama_ketua"
          value={formValues.nama_ketua}
          onChange={handleInputChange}
        />
      </section>
      <section>
        {/* Dimatiin untuk keperluan FGD */}
        {/* <h2 className="p-2 mt-4 text-lg font-bold text-black w-full">
          Rekap Bagi Hasil
        </h2>
        <RecapOfProfitSharing
          data={recapOfProfitSharingData}
          onChange={handleRecapOfProfitSharingChange}
        /> */}
      </section>
      <div className="flex justify-end mt-10 mb-10">
        <Button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Simpan
        </Button>
      </div>
    </Layout>
  );
}
