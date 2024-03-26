'use client';

import { formatDateToString } from '@/common/helpers/date';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { useGetAdjustmentJournals } from '@/hooks/journals/useGetAdjustmentJournals';
import { JournalType } from '@/types/journals';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React from 'react';
import { DateRange } from 'react-day-picker';
import { formatNumber } from '@/common/helpers/number-format';

export default function Generaljournal() {
  const router = useRouter();
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  const { data, isLoading } = useGetAdjustmentJournals();

  const journals: (JournalType & { no: number })[] =
    data?.journals.map((journal, index) => ({
      ...journal,
      no: index + 1,
    })) ?? [];

  const handleGetReportPreview = () => {
    router.push(
      `/unit/working-trial-balance/adjustment-journal/report?start_occurred_at=${date?.from?.toISOString()}&end_occurred_at=${date?.to?.toISOString()}`
    );
  };

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement>,
    journalId: string
  ) => {
    e.preventDefault();

    router.push(
      `/unit/working-trial-balance/adjustment-journal/${journalId}/details`
    );
  };

  return (
    <Layout>
      <section>
        <h1 className="text-2xl font-bold mb-4 text-center">
          Jurnal Penyesuaian
        </h1>
        <header className="mt-6 mb-8 flex flex-row justify-between items-center">
          <div className="inline-flex flex-row gap-x-4">
            <CalendarDateRangePicker date={date} setDate={setDate} />

            <Button
              onClick={handleGetReportPreview}
              disabled={!date?.from || !date.to}
            >
              Cetak Jurnal
            </Button>
          </div>
          <Link href="/unit/working-trial-balance/adjustment-journal/add">
            <Button>Tambah Jurnal</Button>
          </Link>
        </header>

        <section>
          {data && data?.journals.length === 0 && (
            <div className="flex flex-col items-center justify-center mt-16">
              <h6 className="font-semibold text-lg">
                Catatan Jurnal Penyesuaian Kosong
              </h6>
              <p className="text-sm">
                Tidak ada jurnal penyesuaian yang tersedia. Silahkan tambahkan
                data jurnal baru.
              </p>

              <Button className="mt-8" asChild>
                <Link href="/unit/working-trial-balance/adjustment-journal/add">
                  Tambah Jurnal
                </Link>
              </Button>
            </div>
          )}

          <Table
            aria-label={`Tabel Jurnal Umum`}
            isHeaderSticky
            fullWidth
            classNames={{
              base: 'max-h-[28rem]',
              table: 'min-h-[16rem]',
            }}
          >
            <TableHeader>
              <TableColumn>No</TableColumn>
              <TableColumn>Tanggal Transaksi</TableColumn>
              <TableColumn>Deskripsi</TableColumn>
              <TableColumn>Nominal</TableColumn>
            </TableHeader>

            <TableBody
              items={journals}
              isLoading={isLoading}
              loadingContent={<Spinner label="Memuat..." />}
              emptyContent={!isLoading && 'Tidak ada data jurnal'}
            >
              {(item) => {
                return (
                  <TableRow
                    key={item.id}
                    onClick={(e) => handleRowClick(e, item.id)}
                    className="cursor-pointer hover:bg-gray-200 w-full"
                  >
                    <TableCell>{item.no}</TableCell>
                    <TableCell>
                      {formatDateToString(item.occurred_at)}
                    </TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      {formatNumber(item.transaction_amount)}
                    </TableCell>
                  </TableRow>
                );
              }}
            </TableBody>
          </Table>
        </section>
      </section>
    </Layout>
  );
}
