import React from 'react';
import { WtbType } from '@/types/wtb/account';
import TableReview from '../../../table/table-review';

interface ShortTermLiabilityProps {
  accounts: WtbType[];
}

export default function ShortTermLiability({
  accounts,
}: ShortTermLiabilityProps) {
  const Header = 'Utang';
  const Footer = 'Total Utang Jangka Pendek';
  const filteredShortTermLiability = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '2' &&
      account.account.ref.account_ref.startsWith('1')
    // account.result.posisi_keuangan.debit !== 0
  );
  return (
    <div>
      <h2 className="text-lg font-semibold mt-3 mb-2">
        2. Liabilitas Jangka pendek{' '}
      </h2>
      <TableReview
        header={Header}
        footer={Footer}
        accounts={filteredShortTermLiability}
      />
    </div>
  );
}
