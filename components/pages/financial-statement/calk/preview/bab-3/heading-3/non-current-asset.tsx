import React from 'react';
import TableReview from '../../../table/table-review';
import { WtbType } from '@/types/wtb/account';

interface NonCurrentAssetProps {
  accounts: WtbType[];
}
export default function NonCurrentAsset({ accounts }: NonCurrentAssetProps) {
  const Header = 'Aset';
  const Footer = 'Total Aset Tidak Lancar';
  const filteredNonCurrentAsset = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '1' &&
      account.account.ref.account_ref.startsWith('2')
    // account.result.posisi_keuangan.debit !== 0
  );
  return (
    <div>
      <h2 className="text-lg font-semibold mt-3 mb-2">2. Aset Tidak Lancar</h2>
      <TableReview
        header={Header}
        footer={Footer}
        accounts={filteredNonCurrentAsset}
      />
    </div>
  );
}
