import React from 'react';
import TableReportPPN from './table-report-ppn';
import { PpnTransaction } from '@/types/ppn/ppn';

interface ReportPPNSalesProps {
  data: PpnTransaction[] | undefined;
  isLoading: boolean;
}

export default function ReportPPNSales({
  data: ppn,
  isLoading,
}: ReportPPNSalesProps) {
  return (
    <div>
      <TableReportPPN
        data={ppn?.filter((ppn) => ppn.transaction_type === 'SALES')}
        isLoading={isLoading}
      />
      <div></div>
    </div>
  );
}
