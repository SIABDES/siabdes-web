import { WtbType } from '@/types/wtb/account';
import React from 'react';
import TableReview from '../../../table/table-review';

interface CostProps {
  data: WtbType[];
}

export default function Cost({ data }: CostProps) {
  const accounts = data;
  const Header = 'Beban';
  const Footer = 'Total Beban';
  const filteredCost = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '6' ||
      account.account.ref.group_ref === '8'
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mt-6 mb-2">E. Beban</h2>
      <TableReview header={Header} footer={Footer} accounts={filteredCost} />
    </div>
  );
}
