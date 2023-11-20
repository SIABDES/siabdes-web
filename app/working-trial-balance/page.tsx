import Layout from '@/components/layout/layout';
import React from 'react';
import TableWTB from '@/components/table/table-wtb';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WorkingTrialBalance: React.FC = () => {
  const data = [
    {
      namaAkun: 'Akun 1',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
    {
      namaAkun: 'Akun 2',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
    {
      namaAkun: 'Akun 3',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
    {
      namaAkun: 'Akun 4',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
    {
      namaAkun: 'Akun 5',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
    {
      namaAkun: 'Akun 6',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
    {
      namaAkun: 'Akun 7',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
    {
      namaAkun: 'Akun 7',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
    {
      namaAkun: 'Akun 7',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
    {
      namaAkun: 'Akun 7',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
    {
      namaAkun: 'Akun 7',
      neracaSaldo: { debit: 100000, kredit: 50000 },
      penyesuaian: { debit: 20000, kredit: 10000 },
      neracaSetelahnya: { debit: 80000, kredit: 40000 },
      labaRugi: { debit: 50000, kredit: 40000 },
      posisiKeuangan: { debit: 50000, kredit: 25000 },
    },
  ];

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Neraca Lajur</h1>
        <Link href="/working-trial-balance/adjusting-entry">
          <Button className="mb-4">Jurnal Penyesuaian</Button>
        </Link>
        <TableWTB data={data} />
      </div>
    </Layout>
  );
};

export default WorkingTrialBalance;
