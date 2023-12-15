'use client';

import React, { use, useMemo } from 'react';
import { WtbType } from '@/types/wtb/account';
import { formatNumber } from '@/common/helpers/number-format';

interface TAXProps {
  accounts: WtbType[];
  totalProfitLossBeforeTax: number;
}

export default function TAX({ accounts, totalProfitLossBeforeTax }: TAXProps) {
  const filteredCurrentTax = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '8' &&
      account.account.ref.account_ref === '1005' &&
      account.result.laba_rugi.debit > 0
  );

  const totalLossProfitAfterTax = useMemo(() => {
    const totalCurrentTax = filteredCurrentTax?.reduce(
      (total, account) => total + account.result.laba_rugi.debit,
      0
    );

    return totalProfitLossBeforeTax - totalCurrentTax;
  }, [totalProfitLossBeforeTax, filteredCurrentTax]);

  return (
    <section className="space-y-5 mt-7">
      <div className="flex justify-between text-sm font-bold border-2 border-black p-3">
        <h1>Total Laba/Rugi Sebelum Pajak</h1>
        <h1>{formatNumber(totalProfitLossBeforeTax)}</h1>
      </div>

      <div className="flex justify-between text-sm font-bold border-2 border-black p-3 text-red-600">
        <h1>Beban Pajak Kini</h1>
        {filteredCurrentTax?.map((account) => (
          <h1 key={account.account.id}>
            {formatNumber(account.result.laba_rugi.debit)}
          </h1>
        ))}
      </div>
      <div className="flex justify-between text-sm font-bold border-2 border-black p-3">
        <h1>Total Laba/Rugi Setelah Pajak</h1>
        <h1>{formatNumber(totalLossProfitAfterTax)}</h1>
      </div>
    </section>
  );
}
