'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import InputField from '@/components/Input/input-field';
import RecapOfProfitSharing from '@/components/pages/financial-statement/calk/recap-of-profit-sharing';
import { useRouter } from 'next/navigation';
import { RecapOfProfitSharingFormData } from '@/types/financial-statement/calk/recap-of-profit-sharing';

export default function AddCALK() {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    peraturan_daerah_kabupaten: '',
    nomor_peraturan_daerah_kabupaten: '',
    tahun_peraturan_daerah_kabupaten: '',
    tentang_peraturan_daerah_kabupaten: '',
    peraturan_desa: '',
    nomor_peraturan_desa: '',
    tahun_peraturan_desa: '',
    tentang_peraturan_desa: '',
    ad_art_bumdes: '',
    tanggal_dokumen: '',
    nama_ketua: '',
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
      '/unit/financial-statement/report/calk/preview?data=' +
        JSON.stringify(data)
    );
    console.log(data);
  };

  return (
    <Layout>
      <header>
        <h1 className="text-2xl font-bold mb-3 text-center">
          Tambah Catatan Atas Laporan Keuangan
        </h1>
        <h2 className="p-2 mt-4 text-lg font-bold text-black w-full">
          Landasan Hukum Penyusunan Laporan Keuangan
        </h2>
        <h3 className="p-2 text-sm font-medium text-black w-full">
          Pelaporan keuangan BUMDes #Nama BUMDes diselenggarakan berdasarkan
          peraturan perundang-undangan yang mengatur keuangan, yaitu:
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

// 'use client';

// import React, { useState } from 'react';
// import Layout from '@/components/layout/layout';
// import { Button } from '@/components/ui/button';
// import BumdesIdentity from '@/components/pages/financial-statement/calk/bumdes-identity';
// import BumdesAdministrator from '@/components/pages/financial-statement/calk/bumdes-administrator';
// import ModelingHistory from '@/components/pages/financial-statement/calk/modeling-history';
// import TotalOmzetProfitDividents from '@/components/pages/financial-statement/calk/total-omzet-profit-dividents';
// import MainBusiness from '@/components/pages/financial-statement/calk/business-activities/main-business/main-business';
// import ModelingHistoryBusiness from '@/components/pages/financial-statement/calk/business-activities/main-business/modeling-history';
// import AssetAndTurnoverHistory from '@/components/pages/financial-statement/calk/business-activities/main-business/asset-and-turnover-history';
// import HistoryNetProvitsAndDividends from '@/components/pages/financial-statement/calk/business-activities/main-business/history-net-profits-and-dividends';
// import CurrentNumberAndSourcesOfLabor from '@/components/pages/financial-statement/calk/business-activities/main-business/current-number-and-sources-of-labor';
// import OtherBusiness from '@/components/pages/financial-statement/calk/business-activities/other-business/other-business';
// import ModelingHistoryOtherBusiness from '@/components/pages/financial-statement/calk/business-activities/other-business/modeling-history';
// import AssetAndTurnoverHistoryOtherBusiness from '@/components/pages/financial-statement/calk/business-activities/other-business/asset-and-turnover-history';
// import HistoryNetProvitsAndDividendsOtherBusiness from '@/components/pages/financial-statement/calk/business-activities/other-business/history-net-profits-and-dividends';
// import CurrentNumberAndSourcesOfLaborOtherBusiness from '@/components/pages/financial-statement/calk/business-activities/other-business/current-number-and-sources-of-labor';
// import LegalBasisForPreparingFinancialStatements from '@/components/pages/financial-statement/calk/legal-basis-for-preparing-financial-statements';
// import { BumdesIdentityFormData } from '@/types/financial-statement/calk/bumdes-identity';
// import { BumdesAdministratorFormData } from '@/types/financial-statement/calk/bumdes-administrator';
// import { useRouter } from 'next/navigation';
// import { set } from 'date-fns';
// import { ModelingHistoryFormData } from '@/types/financial-statement/calk/modeling-history';

// export default function AddCALK() {
//   const router = useRouter();

//   const [formData, setFormData] = useState<BumdesIdentityFormData>({});
//   const [bumdesAdministrator, setBumdesAdministrator] =
//     useState<BumdesAdministratorFormData>({});
//   const [modelingHistory, setModelingHistory] = useState<
//     ModelingHistoryFormData[]
//   >([]);
//   const [total, setTotal] = useState<ModelingHistoryFormData>({});

//   const handleUpdateFormData = (data: BumdesIdentityFormData) => {
//     setFormData(data);
//   };
//   const handleUpdateBumdesAdministrator = (
//     data: BumdesAdministratorFormData
//   ) => {
//     setBumdesAdministrator(data);
//   };
//   const handleUpdateModelingHistory = (data: ModelingHistoryFormData[]) => {
//     setModelingHistory(data);
//   };

//   const handleSave = () => {
//     const BumdesIdentity = {
//       // Bumdes Identity
//       nama_bumdes: formData.nama_bumdes,
//       tanggal_pendirian_bumdes: formData.tanggal_pendirian_bumdes,
//       nomor_peraturan_desa: formData.nomor_peraturan_desa,
//       nomor_sk_pengurus_bumdes: formData.nomor_sk_pengurus_bumdes,
//       tanggal_sk_pengurus_bumdes: formData.tanggal_sk_pengurus_bumdes,
//       nomor_sk_ad_art_bumdes: formData.nomor_sk_ad_art_bumdes,
//       tanggal_sk_ad_art_bumdes: formData.tanggal_sk_ad_art_bumdes,
//       nama_bank_buku_rek_bumdes: formData.nama_bank_buku_rek_bumdes,
//       nomor_rekening_bumdes: formData.nomor_rekening_bumdes,
//       npwp_bumdes: formData.npwp_bumdes,
//       alamat_kantor_bumdes: formData.alamat_kantor_bumdes,
//       telepon_kantor_fax_bumdes: formData.telepon_kantor_fax_bumdes,
//       email_bumdes: formData.email_bumdes,
//       website_bumdes: formData.website_bumdes,
//       facebook_bumdes: formData.facebook_bumdes,
//       instagram_bumdes: formData.instagram_bumdes,
//       twitter_bumdes: formData.twitter_bumdes,
//       sosial_media_lainnya: formData.sosial_media_lainnya,
//       penyertaan_modal_awal: formData.penyertaan_modal_awal,
//       penambahan_penyertaan_modal: formData.penambahan_penyertaan_modal,
//     };

//     // console.log(bumdesAdministrator);

//     const BumdesAdministrator = {
//       nama_penasihat: bumdesAdministrator.nama_penasihat,
//       nama_ketua_operasional: bumdesAdministrator.nama_ketua_operasional,
//       nama_sekretaris_operasional:
//         bumdesAdministrator.nama_sekretaris_operasional,
//       nama_bendahara_operasional:
//         bumdesAdministrator.nama_bendahara_operasional,
//       nama_unit_operasional: bumdesAdministrator.nama_unit_operasional,
//       nama_kepala_unit_operasional:
//         bumdesAdministrator.nama_kepala_unit_operasional,
//       nama_anggota_operasional: bumdesAdministrator.nama_anggota_operasional,
//       nama_kepala_anggota_operasional:
//         bumdesAdministrator.nama_kepala_anggota_operasional,
//       nama_ketua_pengurus: bumdesAdministrator.nama_ketua_pengurus,
//       nama_sekretaris_pengurus: bumdesAdministrator.nama_sekretaris_pengurus,
//       nama_bendahara_pengurus: bumdesAdministrator.nama_bendahara_pengurus,
//       nama_unit_pengurus: bumdesAdministrator.nama_unit_pengurus,
//     };

//     const ModelingHistory = modelingHistory.map((dataModelingHistory) => ({
//       tahun: dataModelingHistory.tahun,
//       noPerdes: dataModelingHistory.noPerdes,
//       pemerintahDesaRp: dataModelingHistory.pemerintahDesaRp,
//       pemerintahDesaPercent: dataModelingHistory.pemerintahDesaPercent,
//       pihakLainRp: dataModelingHistory.pihakLainRp,
//       pihakLainPercent: dataModelingHistory.pihakLainPercent,
//     }));

//     const data = {
//       BumdesIdentity,
//       BumdesAdministrator,
//       ModelingHistory,
//     };
//     console.log(data);
//     router.push(
//       '/unit/financial-statement/report/calk/preview?data=' +
//         JSON.stringify(data)
//     );
//   };

//   return (
//     <Layout>
//       <h1 className="text-2xl font-bold mb-3 text-center ">
//         Tambah Catatan Atas Laporan Keuangan
//       </h1>
//       <h1 className="text-center font-bold text-xl mb-4">Gambaran Umum</h1>
//       <div>
//         <div className="container">
//           <BumdesIdentity onUpdateFormData={handleUpdateFormData} />
//           <BumdesAdministrator
//             onUpdateFormData={handleUpdateBumdesAdministrator}
//           />
//           <ModelingHistory onUpdateFormData={handleUpdateModelingHistory} />
//           <TotalOmzetProfitDividents />
//           <MainBusiness />
//           <ModelingHistoryBusiness />
//           <AssetAndTurnoverHistory />
//           <HistoryNetProvitsAndDividends />
//           <CurrentNumberAndSourcesOfLabor />
//           <OtherBusiness />
//           <ModelingHistoryOtherBusiness />
//           <AssetAndTurnoverHistoryOtherBusiness />
//           <HistoryNetProvitsAndDividendsOtherBusiness />
//           <CurrentNumberAndSourcesOfLaborOtherBusiness />
//           <LegalBasisForPreparingFinancialStatements />
//         </div>
//         <div className="flex justify-end mt-10 mb-10 mr-8">
//           <Button
//             onClick={handleSave}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Simpan
//           </Button>
//         </div>
//       </div>
//     </Layout>
//   );
// }
