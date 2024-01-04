'use client';

import React, { useMemo } from 'react';
import { WtbType } from '@/types/wtb/account';
import { formatNumber } from '@/common/helpers/number-format';

interface OperationalProps {
  accounts: WtbType[];
  setTotalOperationalLossProfit: React.Dispatch<React.SetStateAction<number>>;
}

export default function Operational({
  accounts,
  setTotalOperationalLossProfit,
}: OperationalProps) {
  const filteredOperationalIncome = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '4' &&
      account.result.laba_rugi.credit !== 0
  );
  const totalOperationalIncome = filteredOperationalIncome?.reduce(
    (total, account) =>
      total + account.result.laba_rugi.credit - account.result.laba_rugi.debit,
    0
  );

  const filteredOperationalCost = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '6' &&
      account.result.laba_rugi.debit !== 0
  );
  const totalOperationalCost = filteredOperationalCost?.reduce(
    (total, account) =>
      total + account.result.laba_rugi.debit - account.result.laba_rugi.credit,
    0
  );

  const totalOperationalLossProfit = useMemo(() => {
    return totalOperationalIncome - totalOperationalCost;
  }, [totalOperationalCost, totalOperationalIncome]);

  setTotalOperationalLossProfit(totalOperationalLossProfit);
  return (
    <section className="space-y-5">
      <div className="border-2 border-black p-3">
        <h1 className="text-sm font-bold">Pendapatan Operasional</h1>
        {filteredOperationalIncome?.map((account) => (
          <div
            key={account.account.id}
            className="flex justify-between text-sm ml-3"
          >
            <div className="flex space-x-1">
              <p>{`(${account.account.ref.account_ref})`}</p>
              <p>{account.account.name}</p>
            </div>
            <h1>
              {formatNumber(
                account.result.laba_rugi.credit - account.result.laba_rugi.debit
              )}
            </h1>
          </div>
        ))}

        <div className="flex justify-between text-sm font-bold text-blue-600">
          <h1>Total Pendapatan Operasional</h1>
          <h1>{formatNumber(totalOperationalIncome)}</h1>
        </div>
      </div>

      <div className="border-2 border-black p-3">
        <h1 className="text-sm font-bold">Beban Operasional</h1>
        {filteredOperationalCost?.map((account) => (
          <div
            key={account.account.id}
            className="flex justify-between text-sm ml-3"
          >
            <div className="flex space-x-1">
              <p>{`(${account.account.ref.account_ref})`}</p>
              <p>{account.account.name}</p>
            </div>
            <h1>{formatNumber(account.result.laba_rugi.debit)}</h1>
          </div>
        ))}
        <div className="flex justify-between text-sm font-bold text-red-600">
          <h1>Total Beban Operasional</h1>
          <h1>{formatNumber(totalOperationalCost)}</h1>
        </div>
      </div>
      <div className="flex border-2 border-black p-3 text-sm font-bold justify-between">
        <h1>Total Laba/Rugi Operasional</h1>
        <h1>{formatNumber(totalOperationalLossProfit)}</h1>
      </div>
    </section>
  );
}
