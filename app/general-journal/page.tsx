'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import { TableComponent } from '@/components/table/table';
import { useGetGeneralJournal } from '@/hooks/journals/useGetGeneralJournal';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Generaljournal() {
  const journal = useGetGeneralJournal();
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">Jurnal Umum</h1>
      <Link href="/general-journal/add-journal">
        <Button className="mb-4">Tambah</Button>
      </Link>
      <TableComponent
        onRowClick={() => {
          console.log('row clicked');
        }}
        data={journal.data ?? [{}]}
      ></TableComponent>
    </Layout>
  );
}

// 'use client';

// import React, { useEffect, useState } from 'react';
// import Layout from '@/components/layout/layout';
// import ClickableTable from '@/components/table/clickable-table';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import { useSession } from 'next-auth/react';

// export default function GeneralJournal() {
//   const router = useRouter();
//   const [tableData, setTableData] = useState<Journal[]>([]);
//   const { data: session } = useSession();

//   useEffect(() => {
//     if (session) {
//       const fetchData = async () => {
//         try {
//           const response = await fetch(
//             'http://localhost:8080/api/v1/general_journals',
//             {
//               headers: {
//                 Authorization: `Bearer ${session.backendTokens.accessToken}`,
//                 'Content-Type': 'application/json',
//               },
//             }
//           );

//           if (response.ok) {
//             const result = await response.json();

//             const journals = result.data.journals || [];
//             console.log(journals);
//             setTableData(journals);
//           } else {
//             console.error('Gagal mengambil data dari API');
//           }
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       };

//       fetchData();
//     }
//   }, [session]);

//   const handleRowClick = (journal_id: string) => {
//     router.push(`/general-journal/${journal_id}/details/`);
//   };

//   const tableHeaders = ['No', 'Tanggal Transaksi', 'Deskripsi Transaksi'];
//   const mappedTableData: MappedJournal[] = tableData.map((journal, index) => ({
//     No: index + 1,
//     'Tanggal Transaksi': new Date(journal.occuredAt).toLocaleDateString(
//       'id-ID',
//       {
//         day: 'numeric',
//         month: 'long',
//         year: 'numeric',
//       }
//     ),
//     'Deskripsi Transaksi': journal.description,
//     id: journal.id,
//   }));

//   return (
//     <Layout>
//       <div>
//         <h1 className="text-2xl font-bold mb-4 text-center">Jurnal Umum</h1>
//         <Link href="/general-journal/add-journal">
//           <Button className="mb-4">Tambah</Button>
//         </Link>
//         <ClickableTable
//           headers={tableHeaders}
//           data={mappedTableData}
//           onRowClick={(rowData) => handleRowClick(rowData.id)}
//         />
//       </div>
//     </Layout>
//   );
// }
