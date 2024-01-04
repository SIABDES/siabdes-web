import React from 'react';
import { WtbType } from '@/types/wtb/account';
import TableReview from '../../../table/table-review';

interface EquityProps {
  data: WtbType[];
}

export default function Equity({ data }: EquityProps) {
  const accounts = data;
  const Header = 'Ekuitas';
  const Footer = 'Total Ekuitas';
  const filteredEquity = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '3' &&
      account.account.ref.account_ref.startsWith('1')
    // account.result.posisi_keuangan.debit !== 0
  );
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6 mb-2">C. Ekuitas</h2>
      <TableReview header={Header} footer={Footer} accounts={filteredEquity} />
    </div>
  );
}
