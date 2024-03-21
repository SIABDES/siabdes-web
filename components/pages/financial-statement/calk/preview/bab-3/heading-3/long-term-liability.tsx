import React from 'react';
import { WtbType } from '@/types/wtb/account';
import TableReview from '../../../table/table-review';

interface LongTermLiabilityProps {
  accounts: WtbType[];
}

export default function LongTermLiability({
  accounts,
}: LongTermLiabilityProps) {
  const Header = 'Utang';
  const Footer = 'Total Utang Jangka Panjang';
  const filteredLongTermLiability = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '2' &&
      account.account.ref.account_ref.startsWith('2')
    // account.result.posisi_keuangan.debit !== 0
  );
  return (
    <div>
      <h2 className="text-lg font-semibold mt-3 mb-2">
        2. Liabilitas Jangka Panjang{' '}
      </h2>
      <TableReview
        header={Header}
        footer={Footer}
        accounts={filteredLongTermLiability}
      />
    </div>
  );
}
