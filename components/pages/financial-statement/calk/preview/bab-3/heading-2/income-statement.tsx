import React from 'react';
import TableReview from '../../../table/table-review';
import { WtbType } from '@/types/wtb/account';

interface IncomeStatementProps {
  data: WtbType[];
}

export default function IncomeStatement({ data }: IncomeStatementProps) {
  const accounts = data;
  const Header = 'Laba/Rugi';
  const Footer = 'Total Laba/Rugi';
  const filteredIncomeStatement = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '4' ||
      account.account.ref.group_ref === '5'
    //   account.account.ref.group_ref === '6' ||
    //   account.account.ref.group_ref === '7' ||
    //   account.account.ref.group_ref === '8'
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mt-6 mb-2">H. Laporan Laba/Rugi</h2>
      <TableReview
        header={Header}
        footer={Footer}
        accounts={filteredIncomeStatement}
      />
    </div>
  );
}
