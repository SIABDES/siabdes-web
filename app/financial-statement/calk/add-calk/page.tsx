import React from 'react';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import BumdesIdentity from '@/components/financial-statement/calk/bumdes-identity';
import BumdesAdministrator from '@/components/financial-statement/calk/bumdes-administrator';
import ModelingHistory from '@/components/financial-statement/calk/modeling-history';
import TotalOmzetProfitDividents from '@/components/financial-statement/calk/total-omzet-profit-dividents';

import MainBusiness from '@/components/financial-statement/calk/business-activities/main-business/main-business';
import ModelingHistoryBusiness from '@/components/financial-statement/calk/business-activities/main-business/modeling-history';
import AssetAndTurnoverHistory from '@/components/financial-statement/calk/business-activities/main-business/asset-and-turnover-history';
import HistoryNetProvitsAndDividends from '@/components/financial-statement/calk/business-activities/main-business/history-net-profits-and-dividends';
import CurrentNumberAndSourcesOfLabor from '@/components/financial-statement/calk/business-activities/main-business/current-number-and-sources-of-labor';

import OtherBusiness from '@/components/financial-statement/calk/business-activities/other-business/other-business';
import ModelingHistoryOtherBusiness from '@/components/financial-statement/calk/business-activities/other-business/modeling-history';
import AssetAndTurnoverHistoryOtherBusiness from '@/components/financial-statement/calk/business-activities/other-business/asset-and-turnover-history';
import HistoryNetProvitsAndDividendsOtherBusiness from '@/components/financial-statement/calk/business-activities/other-business/history-net-profits-and-dividends';
import CurrentNumberAndSourcesOfLaborOtherBusiness from '@/components/financial-statement/calk/business-activities/other-business/current-number-and-sources-of-labor';

import LegalBasisForPreparingFinancialStatements from '@/components/financial-statement/calk/legal-basis-for-preparing-financial-statements';

export default function AddCALK() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-3 text-center ">
        Tambah Catatan Atas Laporan Keuangan
      </h1>
      <h1 className="text-center font-bold text-xl mb-4">Gambaran Umum</h1>
      <div>
        <div className="container">
          <BumdesIdentity />
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
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Simpan
          </Button>
        </div>
      </div>
    </Layout>
  );
}
