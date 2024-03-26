'use client';

import { formatDateToString } from '@/common/helpers/date';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
// import { Button } from '@nextui-org/react';
import { Skeleton } from '@/components/ui/skeleton';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';

import {
  Autocomplete,
  AutocompleteItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { useGetGeneralJournals } from '@/hooks/journals/useGetGeneralJournals';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { JournalResponseWithCount, JournalType } from '@/types/journals';
import { formatNumber, formatRupiah } from '@/common/helpers/number-format';
import { ArrowDownToLine } from 'lucide-react';

export default function Generaljournal() {
  const router = useRouter();
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const { data, isLoading } = useGetGeneralJournals({
    start_occurred_at: date?.from,
    end_occurred_at: date?.to,
  });

  // const { data, isLoading } = useGetWtb({
  //   start_occurred_at: date?.from,
  //   end_occurred_at: date?.to,
  //   retrieval_category: RetrievalCategory.INCOME_STATEMENT,
  // });

  const journals: (JournalType & { no: number })[] =
    data?.journals.map((journal, index) => ({
      ...journal,
      no: index + 1,
    })) ?? [];

  const handleGetReportPreview = () => {
    router.push(
      `/unit/general-journal/report?start_occurred_at=${date?.from?.toISOString()}&end_occurred_at=${date?.to?.toISOString()}`
    );
  };

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement>,
    journalId: string
  ) => {
    e.preventDefault();

    router.push(`/unit/general-journal/${journalId}/details`);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">Jurnal Umum</h1>
      <section>
        <header className="mt-6 mb-8 flex flex-row justify-between items-center">
          {/* <h4 className="text-sm font-semibold">Jurnal Umum</h4> */}

          {/* <div className="flex space-x-6 pt-8">
            <CalendarDateRangePicker date={date} setDate={setDate} />
            <Link href="/unit/financial-statement/report/income-statement/preview">
              <Button>Cetak</Button>
            </Link>
          </div> */}

          <div className="inline-flex flex-row gap-x-4">
            <CalendarDateRangePicker date={date} setDate={setDate} />

            <Button
              onClick={handleGetReportPreview}
              disabled={!date?.from || !date.to}
            >
              Cetak Jurnal Umum
            </Button>
          </div>
          <Link href="/unit/general-journal/add">
            <Button>Tambah Jurnal</Button>
          </Link>
        </header>

        <div>
          {data && data?.journals.length === 0 && (
            <div className="flex flex-col items-center justify-center mt-16">
              <h6 className="font-semibold text-lg">
                Catatan Jurnal Umum Kosong
              </h6>
              <p className="text-sm">
                Tidak ada jurnal umum yang tersedia. Silahkan tambahkan jurnal
                umum baru.
              </p>

              <Button className="mt-8" asChild>
                <Link href="/unit/general-journal/add">Tambah Jurnal</Link>
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
              <TableColumn>Bukti Transaksi</TableColumn>
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
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <ArrowDownToLine />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              }}
            </TableBody>
          </Table>
        </div>
      </section>
    </Layout>
  );
}
