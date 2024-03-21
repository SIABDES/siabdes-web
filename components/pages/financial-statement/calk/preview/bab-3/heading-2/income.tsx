import { WtbType } from '@/types/wtb/account';
import React from 'react';
import TableReview from '../../../table/table-review';

interface IncomeProps {
  data: WtbType[];
}

export default function Income({ data }: IncomeProps) {
  const accounts = data;
  const Header = 'Pendapatan';
  const Footer = 'Total Pendapatan';
  const filteredIncome = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '4' ||
      account.account.ref.group_ref === '7'
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mt-6 mb-2">D. Pendapatan</h2>
      <TableReview header={Header} footer={Footer} accounts={filteredIncome} />
    </div>
  );
}
