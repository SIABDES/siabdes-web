import React from 'react';
import { WtbType } from '@/types/wtb/account';
import { formatNumber } from '@/common/helpers/number-format';

interface LiabilityEquityProps {
  accounts: WtbType[];
}

export default function LiabilityEquity({ accounts }: LiabilityEquityProps) {
  const filteredShortTermLiability = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '2' &&
      account.account.ref.account_ref.startsWith('1') &&
      account.result.posisi_keuangan.credit > 0
  );

  const totalShortTermLiability = filteredShortTermLiability?.reduce(
    (total, account) => total + account.result.posisi_keuangan.credit,
    0
  );

  const filteredLongTermLiability = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '2' &&
      account.account.ref.account_ref.startsWith('2') &&
      account.result.posisi_keuangan.credit > 0
  );

  const totalLongTermLiability = filteredLongTermLiability?.reduce(
    (total, account) => total + account.result.posisi_keuangan.credit,
    0
  );

  const totalLiability = totalShortTermLiability + totalLongTermLiability;

  const filteredEquity = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '3' &&
      account.account.ref.account_ref.startsWith('1') &&
      account.result.posisi_keuangan.credit > 0
  );

  const totalEquity = filteredEquity?.reduce(
    (total, account) => total + account.result.posisi_keuangan.credit,
    0
  );

  const totalLiabilityEquity = totalLiability + totalEquity;

  return (
    <section>
      <div className="border-2 border-black p-3 mt-10">
        <h1 className="text-sm font-bold">LIABILITAS DAN EKUITAS</h1>
        <div className="ml-3 my-3">
          <h1 className="text-sm font-bold">Liabilitas</h1>
          <h1 className="text-sm font-bold">Liabilitas Jangka Pendek</h1>
          {filteredShortTermLiability?.map((account) => (
            <div
              key={account.account.id}
              className="flex justify-between text-sm ml-3"
            >
              <div className="flex space-x-1">
                <p>{`(${account.account.ref.account_ref})`}</p>
                <p>{account.account.name}</p>
              </div>
              <h1>{formatNumber(account.result.posisi_keuangan.credit)}</h1>
            </div>
          ))}

          <div className="flex justify-between text-sm font-bold">
            <h1>Total Liabilitas Jangka Pendek</h1>
            <h1>{formatNumber(totalShortTermLiability)}</h1>
          </div>

          <h1 className="text-sm font-bold mt-6">Liabilitas Jangka Panjang</h1>
          {filteredLongTermLiability?.map((account) => (
            <div
              key={account.account.id}
              className="flex justify-between text-sm ml-3"
            >
              <div className="flex space-x-1">
                <p>{`(${account.account.ref.account_ref})`}</p>
                <p>{account.account.name}</p>
              </div>
              <h1>{formatNumber(account.result.posisi_keuangan.credit)}</h1>
            </div>
          ))}

          <div className="flex justify-between text-sm font-bold">
            <h1>Total Liabilitas Jangka Panjang</h1>
            <h1>{formatNumber(totalLongTermLiability)}</h1>
          </div>

          <div className="flex justify-between text-sm font-bold text-blue-600">
            <h1>Total Liabilitas</h1>
            <h1>{formatNumber(totalLiability)}</h1>
          </div>

          <h1 className="text-sm font-bold mt-9">Ekuitas</h1>
          {filteredEquity?.map((account) => (
            <div
              key={account.account.id}
              className="flex justify-between text-sm ml-3"
            >
              <div className="flex space-x-1">
                <p>{`(${account.account.ref.account_ref})`}</p>
                <p>{account.account.name}</p>
              </div>
              <h1>{formatNumber(account.result.posisi_keuangan.credit)}</h1>
            </div>
          ))}
          <div className="flex justify-between text-sm font-bold text-red-600">
            <h1>Total Ekuitas</h1>
            <h1>{formatNumber(totalEquity)}</h1>
          </div>
        </div>
        <div className="flex text-sm font-bold justify-between">
          <h1>TOTAL LIABILITAS DAN EKUITAS</h1>
          <h1>{formatNumber(totalLiabilityEquity)}</h1>
        </div>
      </div>
    </section>
  );
}
