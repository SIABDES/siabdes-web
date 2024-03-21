import React from 'react';
import TableReportPPN from './table-report-ppn';
import { PpnTransaction } from '@/types/ppn/ppn';

interface ReportPPNPurchaseProps {
  data: PpnTransaction[] | undefined;
  isLoading: boolean;
}

export default function ReportPPNPurchase({
  data: ppn,
  isLoading,
}: ReportPPNPurchaseProps) {
  return (
    <div>
      <TableReportPPN
        data={ppn?.filter((ppn) => ppn.transaction_type === 'PURCHASE')}
        isLoading={isLoading}
      />
    </div>
  );
}
