'use client';

import { WtbType } from '@/types/wtb/account';
import { useMemo } from 'react';
import { formatNumber } from '@/common/helpers/number-format';

interface NonOperationalProps {
  accounts: WtbType[];
  setTotalNonOperationalLossProfit: React.Dispatch<
    React.SetStateAction<number>
  >;
}

export default function NonOperational({
  accounts,
  setTotalNonOperationalLossProfit,
}: NonOperationalProps) {
  const filteredNonOperationalIncome = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '7' &&
      account.result.laba_rugi.credit > 0
  );
  const totalNonOperationalIncome = filteredNonOperationalIncome?.reduce(
    (total, account) => total + account.result.laba_rugi.credit,
    0
  );

  const filteredNonOperationalCost = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '8' &&
      account.result.laba_rugi.debit > 0
  );
  const totalNonOperationalCost = filteredNonOperationalCost?.reduce(
    (total, account) => total + account.result.laba_rugi.debit,
    0
  );

  const totalNonOperationalLossProfit = useMemo(() => {
    return totalNonOperationalIncome - totalNonOperationalCost;
  }, [totalNonOperationalCost, totalNonOperationalIncome]);

  setTotalNonOperationalLossProfit(totalNonOperationalLossProfit);
  return (
    <section className="space-y-5 mt-7">
      <div className="border-2 border-black p-3">
        <h1 className="text-sm font-bold">Pendapatan Non-Operasional</h1>
        {filteredNonOperationalIncome?.map((account) => (
          <div
            key={account.account.id}
            className="flex justify-between text-sm ml-3"
          >
            <div className="flex space-x-1">
              <p>{`(${account.account.ref.account_ref})`}</p>
              <p>{account.account.name}</p>
            </div>
            <h1>{formatNumber(account.result.laba_rugi.credit)}</h1>
          </div>
        ))}
        <div className="flex justify-between text-sm font-bold text-blue-600">
          <h1>Total Pendapatan Non-Operasional</h1>
          <h1>{formatNumber(totalNonOperationalIncome)}</h1>
        </div>
      </div>

      <div className="border-2 border-black p-3">
        <h1 className="text-sm font-bold">Beban Non-Operasional</h1>
        {filteredNonOperationalCost?.map((account) => (
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
          <h1>Total Beban Non-Operasional</h1>
          <h1>{formatNumber(totalNonOperationalCost)}</h1>
        </div>
      </div>
      <div className="flex border-2 border-black p-3 text-sm font-bold justify-between">
        <h1>Total Laba/Rugi Operasional</h1>
        <h1>{formatNumber(totalNonOperationalLossProfit)}</h1>
      </div>
    </section>
  );
}
