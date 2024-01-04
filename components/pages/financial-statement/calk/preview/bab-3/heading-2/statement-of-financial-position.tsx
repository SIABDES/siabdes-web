import React from 'react';
import TableReview from '../../../table/table-review';
import { WtbType } from '@/types/wtb/account';

interface StatementOfFinancialPositionProps {
  data: WtbType[];
}

export default function StatementOfFinancialPosition({
  data,
}: StatementOfFinancialPositionProps) {
  const accounts = data;
  const Header = 'Posisi Keuangan';
  const Footer = 'Total Posisi Keuangan';
  const filteredStatementOfFinancialPosition = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '1' ||
      account.account.ref.group_ref === '2' ||
      account.account.ref.group_ref === '3'
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mt-6 mb-2">
        G. Laporan Posisi Keuangan
      </h2>
      <TableReview
        header={Header}
        footer={Footer}
        accounts={filteredStatementOfFinancialPosition}
      />
    </div>
  );
}
