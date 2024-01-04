import React, { useMemo } from 'react';
import { WtbType } from '@/types/wtb/account';
import { formatNumber } from '@/common/helpers/number-format';

interface AssetProps {
  accounts: WtbType[];
}
export default function Asset({ accounts }: AssetProps) {
  const filteredCurrentAsset = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '1' &&
      account.account.ref.account_ref.startsWith('1') &&
      account.result.posisi_keuangan.debit !== 0
  );

  const totalCurrentAsset = filteredCurrentAsset?.reduce(
    (total, account) =>
      total +
      account.result.posisi_keuangan.debit -
      account.result.posisi_keuangan.credit,
    0
  );
  // const filteredCurrentAssetDebit = accounts?.filter(
  //   (account) =>
  //     account.account.ref.group_ref === '1' &&
  //     account.account.ref.account_ref.startsWith('1') &&
  //     account.account.is_credit === false
  //   // account.result.posisi_keuangan.debit > 0
  // );

  // const totalCurrentAssetDebit = filteredCurrentAssetDebit?.reduce(
  //   (total, account) => total + account.result.posisi_keuangan.debit,
  //   0
  // );

  // const filteredCurrentAssetCredit = accounts?.filter(
  //   (account) =>
  //     account.account.ref.group_ref === '1' &&
  //     account.account.ref.account_ref.startsWith('1') &&
  //     account.account.is_credit === true
  //   // account.result.posisi_keuangan.debit > 0
  // );

  // const totalCurrentAssetCredit = filteredCurrentAssetCredit?.reduce(
  //   (total, account) => total + account.result.posisi_keuangan.credit,
  //   0
  // );

  // const totalCurrentAsset = useMemo(() => {
  //   return totalCurrentAssetDebit - totalCurrentAssetCredit;
  // }, [totalCurrentAssetDebit, totalCurrentAssetCredit]);

  const filteredNonCurrentAsset = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '1' &&
      account.account.ref.account_ref.startsWith('2') &&
      account.result.posisi_keuangan.debit !== 0
  );

  const totalNonCurrentAsset = filteredNonCurrentAsset?.reduce(
    (total, account) =>
      total +
      account.result.posisi_keuangan.debit -
      account.result.posisi_keuangan.credit,
    0
  );
  // const filteredNonCurrentAssetDebit = accounts?.filter(
  //   (account) =>
  //     account.account.ref.group_ref === '1' &&
  //     account.account.ref.account_ref.startsWith('2') &&
  //     account.account.is_credit === false
  //   // account.result.posisi_keuangan.debit  0
  // );

  // const totalNonCurrentAssetDebit = filteredNonCurrentAssetDebit?.reduce(
  //   (total, account) => total + account.result.posisi_keuangan.debit,
  //   0
  // );

  // const filteredNonCurrentAssetCredit = accounts?.filter(
  //   (account) =>
  //     account.account.ref.group_ref === '1' &&
  //     account.account.ref.account_ref.startsWith('2') &&
  //     account.account.is_credit === true
  //   // account.result.posisi_keuangan.Credit  0
  // );

  // const totalNonCurrentAssetCredit = filteredNonCurrentAssetCredit?.reduce(
  //   (total, account) => total + account.result.posisi_keuangan.credit,
  //   0
  // );
  // const totalNonCurrentAsset = useMemo(() => {
  //   return totalNonCurrentAssetDebit - totalNonCurrentAssetCredit;
  // }, [totalNonCurrentAssetDebit, totalNonCurrentAssetCredit]);

  const totalAsset = useMemo(() => {
    return totalCurrentAsset + totalNonCurrentAsset;
  }, [totalCurrentAsset, totalNonCurrentAsset]);

  return (
    <section>
      <div className="border-2 border-black p-3">
        <h1 className="text-sm font-bold">ASET</h1>
        <div className="ml-3 my-3">
          <h1 className="text-sm font-bold">Aset Lancar</h1>
          {filteredCurrentAsset?.map((account) => (
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
                  account.result.posisi_keuangan.debit -
                    account.result.posisi_keuangan.credit
                )}
              </h1>
            </div>
          ))}

          <div className="flex justify-between text-sm font-bold text-blue-600">
            <h1>Total Aset Lancar</h1>
            <h1>{formatNumber(totalCurrentAsset)}</h1>
          </div>

          <h1 className="text-sm font-bold mt-9">Asset Tidak Lancar</h1>
          {filteredNonCurrentAsset?.map((account) => (
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
                  account.result.posisi_keuangan.debit -
                    account.result.posisi_keuangan.credit
                )}
              </h1>
            </div>
          ))}

          <div className="flex justify-between text-sm font-bold text-red-600">
            <h1>Total Asset Tidak Lancar</h1>
            <h1>{formatNumber(totalNonCurrentAsset)}</h1>
          </div>
        </div>
        <div className="flex text-sm font-bold justify-between">
          <h1>TOTAL ASET</h1>
          <h1>{formatNumber(totalAsset)}</h1>
        </div>
      </div>
    </section>
  );
}
