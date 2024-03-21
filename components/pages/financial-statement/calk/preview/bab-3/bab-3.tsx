import React from 'react';
import Asset from './heading-2/asset';
import Liability from './heading-2/liability';
import { useGetWtb } from '@/hooks/wtb/useGetWtb';
import Equity from './heading-2/equity';
import Income from './heading-2/income';
import Cost from './heading-2/cost';
import RecapOfProfitSharing from './heading-2/recap-of-profit-sharing';
import StatementOfFinancialPosition from './heading-2/statement-of-financial-position';
import IncomeStatement from './heading-2/income-statement';
import { WtbType } from '@/types/wtb/account';

export default function BAB3() {
  const { data, isLoading } = useGetWtb({
    start_occurred_at: new Date(2022, 1, 1),
    end_occurred_at: new Date(2023, 12, 31),
  });

  return (
    <section>
      <header className="text-center text-xl font-bold mt-10">
        <h1>BAB III</h1>
        <h1>LAPORAN KEUANGAN POKOK</h1>
      </header>
      {/* <h2 className="text-lg font-semibold">A. Aset</h2> */}
      <div className="max-w-4xl mx-auto">
        {!isLoading && data && (
          <>
            <Asset data={data.list} />
            <Liability data={data.list} />
            <Equity data={data.list} />
            <Income data={data.list} />
            <Cost data={data.list} />
            <RecapOfProfitSharing />
            <StatementOfFinancialPosition data={data.list} />
            <IncomeStatement data={data.list} />
          </>
        )}
        {/* <Asset data={data} />
        <Liability data={data} />
        <Equity data={data} />
        <Income data={data} />
        <Cost data={data} />
        <RecapOfProfitSharing />
        <StatementOfFinancialPosition data={data} />
        <IncomeStatement data={data} /> */}
      </div>
    </section>
  );
}
