'use client';

import React from 'react';
import BumdesIdentity from './heading-2/bumdes-identity';
import BumdesAdministrator from './heading-2/bumdes-administrator';
import ModelingHistory from './heading-2/modeling-history';
import TotalOmzetProfitDividents from './heading-2/total-omzet-profit-dividents';
import BusinessActivities from './heading-2/business-activities';
import LegalBasisForPreparingFinancialStatements from './heading-2/legal-basis-for-preparing-financial-statements';

export default function BAB1() {
  return (
    <div>
      <header className="text-center text-xl font-bold mt-10">
        <h1>BAB I</h1>
        <h1>GAMBARAN UMUM</h1>
      </header>
      <div className="max-w-4xl mx-auto">
        <BumdesIdentity />
        <BumdesAdministrator />
        <ModelingHistory />
        <TotalOmzetProfitDividents />
        <BusinessActivities />
        <LegalBasisForPreparingFinancialStatements />
      </div>
    </div>
  );
}
