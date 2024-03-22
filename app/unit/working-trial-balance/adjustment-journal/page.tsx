// "use client";

// import { formatDateToString } from "@/common/helpers/date";
// import Layout from "@/components/layout/layout";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useGetAdjustmentJournals } from "@/hooks/journals/useGetAdjustmentJournals";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import React from "react";

// export default function Adjustmentjournal() {
//   const router = useRouter();
//   const { data, isLoading } = useGetAdjustmentJournals();

//   const handleRowClick = (
//     e: React.MouseEvent<HTMLTableRowElement>,
//     journalId: string
//   ) => {
//     e.preventDefault();

//     router.push(
//       `/unit/working-trial-balance/adjustment-journal/${journalId}/details`
//     );
//   };

//   return (
//     <Layout>
//       <section>
//         <header className="flex justify-between items-center">
//           <h4 className="text-sm">Jurnal Penyesuaian</h4>

//           <Link href="/unit/working-trial-balance/adjustment-journal/add">
//             <Button>Tambah Jurnal</Button>
//           </Link>
//         </header>

//         <section className="pt-8">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>No</TableHead>
//                 <TableHead>Tanggal Transaksi</TableHead>
//                 <TableHead>Deskripsi</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {isLoading && (
//                 <>
//                   <TableRow>
//                     <TableCell colSpan={3}>
//                       <Skeleton className="w-full h-[2rem]" />
//                     </TableCell>
//                   </TableRow>

//                   <TableRow>
//                     <TableCell colSpan={3}>
//                       <Skeleton className="w-full h-[2rem]" />
//                     </TableCell>
//                   </TableRow>

//                   <TableRow>
//                     <TableCell colSpan={3}>
//                       <Skeleton className="w-full h-[2rem]" />
//                     </TableCell>
//                   </TableRow>
//                 </>
//               )}

//               {data?.journals.map((journal, index) => (
//                 <TableRow
//                   key={journal.id}
//                   onClick={(e) => handleRowClick(e, journal.id)}
//                   className="cursor-pointer hover:bg-gray-200"
//                 >
//                   <TableCell className="w-28">{index + 1}</TableCell>
//                   <TableCell className="w-80">
//                     {formatDateToString(journal.occured_at)}
//                   </TableCell>
//                   <TableCell>{journal.description}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </section>
//       </section>
//     </Layout>
//   );
// }
'use client';

import { formatDateToString } from '@/common/helpers/date';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetAdjustmentJournals } from '@/hooks/journals/useGetAdjustmentJournals';
import { useGetGeneralJournals } from '@/hooks/journals/useGetGeneralJournals';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React from 'react';

export default function Generaljournal() {
  const router = useRouter();
  const { data, isLoading } = useGetAdjustmentJournals();

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
        <header className="flex justify-between items-center">
          <h4 className="text-sm font-semibold">Jurnal Penyesuaian</h4>

          <Link href="/unit/working-trial-balance/adjustment-journal/add">
            <Button>Tambah Jurnal</Button>
          </Link>
        </header>

        <section className="pt-8">
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

          {!data && !isLoading && <div></div>}

          {isLoading && (
            <>
              {Array.from(Array(8).keys()).map((_, index) => (
                <Skeleton key={index} className="w-full h-[2rem]" />
              ))}
            </>
          )}

          {data && data?.journals.length > 0 && (
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>No</TableHead>
                  <TableHead>Tanggal Transaksi</TableHead>
                  <TableHead>Deskripsi</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {data.journals.map((journal, index) => (
                  <TableRow
                    key={journal.id}
                    onClick={(e) => handleRowClick(e, journal.id)}
                    className="cursor-pointer hover:bg-gray-200 w-full"
                  >
                    <TableCell className="w-28">{index + 1}</TableCell>
                    <TableCell className="w-80">
                      {formatDateToString(journal.occurred_at)}
                    </TableCell>
                    <TableCell>{journal.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </section>
      </section>
    </Layout>
  );
}
