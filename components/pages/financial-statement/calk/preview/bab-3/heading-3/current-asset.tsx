import React from 'react';
import TableReview from '../../../table/table-review';
import { WtbType } from '@/types/wtb/account';

interface CurrentAssetProps {
  accounts: WtbType[];
}

export default function CurrentAsset({ accounts }: CurrentAssetProps) {
  const Header = 'Aset';
  const Footer = 'Total Aset Lancar';

  const filteredCurrentAsset = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '1' &&
      account.account.ref.account_ref.startsWith('1')
    // account.result.posisi_keuangan.debit !== 0
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mt-3 mb-2">1. Aset Lancar</h2>
      <TableReview
        header={Header}
        footer={Footer}
        accounts={filteredCurrentAsset}
      />
    </div>
  );
}
