'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import BumdesIdentity from '@/components/pages/financial-statement/calk/bumdes-identity';
import BumdesAdministrator from '@/components/pages/financial-statement/calk/bumdes-administrator';
import ModelingHistory from '@/components/pages/financial-statement/calk/modeling-history';
import TotalOmzetProfitDividents from '@/components/pages/financial-statement/calk/total-omzet-profit-dividents';
import MainBusiness from '@/components/pages/financial-statement/calk/business-activities/main-business/main-business';
import ModelingHistoryBusiness from '@/components/pages/financial-statement/calk/business-activities/main-business/modeling-history';
import AssetAndTurnoverHistory from '@/components/pages/financial-statement/calk/business-activities/main-business/asset-and-turnover-history';
import HistoryNetProvitsAndDividends from '@/components/pages/financial-statement/calk/business-activities/main-business/history-net-profits-and-dividends';
import CurrentNumberAndSourcesOfLabor from '@/components/pages/financial-statement/calk/business-activities/main-business/current-number-and-sources-of-labor';
import OtherBusiness from '@/components/pages/financial-statement/calk/business-activities/other-business/other-business';
import ModelingHistoryOtherBusiness from '@/components/pages/financial-statement/calk/business-activities/other-business/modeling-history';
import AssetAndTurnoverHistoryOtherBusiness from '@/components/pages/financial-statement/calk/business-activities/other-business/asset-and-turnover-history';
import HistoryNetProvitsAndDividendsOtherBusiness from '@/components/pages/financial-statement/calk/business-activities/other-business/history-net-profits-and-dividends';
import CurrentNumberAndSourcesOfLaborOtherBusiness from '@/components/pages/financial-statement/calk/business-activities/other-business/current-number-and-sources-of-labor';
import LegalBasisForPreparingFinancialStatements from '@/components/pages/financial-statement/calk/legal-basis-for-preparing-financial-statements';
import { BumdesIdentityFormData } from '@/types/financial-statement/calk/bumdes-identity';
import { useRouter } from 'next/navigation';

export default function AddCALK() {
  const router = useRouter();
  const [formData, setFormData] = useState<BumdesIdentityFormData>({});
  const handleUpdateFormData = (data: BumdesIdentityFormData) => {
    setFormData(data);
  };
  const handleSave = () => {
    const data = {
      nama_bumdes: formData.nama_bumdes,
      tanggal_pendirian_bumdes: formData.tanggal_pendirian_bumdes,
      nomor_peraturan_desa: formData.nomor_peraturan_desa,
      nomor_sk_pengurus_bumdes: formData.nomor_sk_pengurus_bumdes,
      tanggal_sk_pengurus_bumdes: formData.tanggal_sk_pengurus_bumdes,
      nomor_sk_ad_art_bumdes: formData.nomor_sk_ad_art_bumdes,
      tanggal_sk_ad_art_bumdes: formData.tanggal_sk_ad_art_bumdes,
      nama_bank_buku_rek_bumdes: formData.nama_bank_buku_rek_bumdes,
      nomor_rekening_bumdes: formData.nomor_rekening_bumdes,
      npwp_bumdes: formData.npwp_bumdes,
      alamat_kantor_bumdes: formData.alamat_kantor_bumdes,
      telepon_kantor_fax_bumdes: formData.telepon_kantor_fax_bumdes,
      email_bumdes: formData.email_bumdes,
      website_bumdes: formData.website_bumdes,
      facebook_bumdes: formData.facebook_bumdes,
      instagram_bumdes: formData.instagram_bumdes,
      twitter_bumdes: formData.twitter_bumdes,
      sosial_media_lainnya: formData.sosial_media_lainnya,
      penyertaan_modal_awal: formData.penyertaan_modal_awal,
      penambahan_penyertaan_modal: formData.penambahan_penyertaan_modal,
    };

    router.push(
      '/financial-statement/report/calk/preview?data=' + JSON.stringify(data)
    );
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-3 text-center ">
        Tambah Catatan Atas Laporan Keuangan
      </h1>
      <h1 className="text-center font-bold text-xl mb-4">Gambaran Umum</h1>
      <div>
        <div className="container">
          <BumdesIdentity onUpdateFormData={handleUpdateFormData} />
          <BumdesAdministrator />
          <ModelingHistory />
          <TotalOmzetProfitDividents />
          <MainBusiness />
          <ModelingHistoryBusiness />
          <AssetAndTurnoverHistory />
          <HistoryNetProvitsAndDividends />
          <CurrentNumberAndSourcesOfLabor />
          <OtherBusiness />
          <ModelingHistoryOtherBusiness />
          <AssetAndTurnoverHistoryOtherBusiness />
          <HistoryNetProvitsAndDividendsOtherBusiness />
          <CurrentNumberAndSourcesOfLaborOtherBusiness />
          <LegalBasisForPreparingFinancialStatements />
        </div>
        <div className="flex justify-end mt-10 mb-10 mr-8">
          <Button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Simpan
          </Button>
        </div>
      </div>
    </Layout>
  );
}
