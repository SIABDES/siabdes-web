"use client";
import Layout from "@/components/layout/layout";
import React from "react";
import TableWTB from "@/components/table/table-wtb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PatanTable } from "@/components/patan-ui/table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetWtb } from "@/hooks/wtb/useGetWtb";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDateToString } from "@/common/helpers/date";
import { formatNumber } from "@/common/helpers/number-format";

export default function WorkingTrialBalance() {
  const router = useRouter();
  const { data, isLoading } = useGetWtb();

  const accounts = data?.list;
  const summary = data?.summary;

  return (
    <Layout>
      <section>
        <header className="flex justify-center items-center">
          <h1 className="text-2xl font-bold mb-4 text-center">Neraca Lajur</h1>
        </header>
        <section>
          <Link href="/working-trial-balance/adjustment-journal">
            <Button className="mb-4">Jurnal Penyesuaian</Button>
          </Link>
        </section>

        <section className="pt-8">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead rowSpan={2} className="text-center font-bold">
                  Nama Akun
                </TableHead>
                <TableHead colSpan={2} className="text-center font-bold">
                  Neraca Saldo
                </TableHead>
                <TableHead colSpan={2} className="text-center font-bold">
                  Penyesuaian
                </TableHead>
                <TableHead colSpan={2} className="text-center font-bold">
                  Neraca Setelahnya
                </TableHead>
                <TableHead colSpan={2} className="text-center font-bold">
                  Laba Rugi
                </TableHead>
                <TableHead colSpan={2} className="text-center font-bold">
                  Posisi Keuangan
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="text-center font-bold">Debit</TableHead>
                <TableHead className="text-center font-bold">Credit</TableHead>
                <TableHead className="text-center font-bold">Debit</TableHead>
                <TableHead className="text-center font-bold">Credit</TableHead>
                <TableHead className="text-center font-bold">Debit</TableHead>
                <TableHead className="text-center font-bold">Credit</TableHead>
                <TableHead className="text-center font-bold">Debit</TableHead>
                <TableHead className="text-center font-bold">Credit</TableHead>
                <TableHead className="text-center font-bold">Debit</TableHead>
                <TableHead className="text-center font-bold">Credit</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {isLoading && (
                <>
                  {Array.from(Array(8).keys()).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell colSpan={3}>
                        <Skeleton className="w-full h-[2rem]" />
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}

              {accounts?.map((account) => (
                <TableRow
                  key={account.account.id}
                  className="cursor-pointer hover:bg-gray-200 w-full"
                >
                  <TableCell className="w-28">{account.account.name}</TableCell>
                  <TableCell className="w-28 text-center">
                    {formatNumber(account.result.neraca_saldo.debit)}
                  </TableCell>
                  <TableCell className="w-28 text-center">
                    {formatNumber(account.result.neraca_saldo.credit)}
                  </TableCell>
                  <TableCell className="w-28 text-center">
                    {formatNumber(account.result.penyesuaian.debit)}
                  </TableCell>
                  <TableCell className="w-28 text-center">
                    {formatNumber(account.result.penyesuaian.credit)}
                  </TableCell>
                  <TableCell className="w-28 text-center">
                    {formatNumber(account.result.neraca_setelahnya.debit)}
                  </TableCell>
                  <TableCell className="w-28 text-center">
                    {formatNumber(account.result.neraca_setelahnya.credit)}
                  </TableCell>
                  <TableCell className="w-28 text-center">
                    {formatNumber(account.result.laba_rugi.debit)}
                  </TableCell>
                  <TableCell className="w-28 text-center">
                    {formatNumber(account.result.laba_rugi.credit)}
                  </TableCell>
                  <TableCell className="w-28 text-center">
                    {formatNumber(account.result.posisi_keuangan.debit)}
                  </TableCell>
                  <TableCell className="w-28 text-center">
                    {formatNumber(account.result.posisi_keuangan.credit)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="w-28 font-bold">Jumlah</TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.sum.neraca_saldo.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.sum.neraca_saldo.credit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.sum.penyesuaian.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.sum.penyesuaian.credit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.sum.neraca_setelahnya.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.sum.neraca_setelahnya.credit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.sum.laba_rugi.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.sum.laba_rugi.credit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.sum.posisi_keuangan.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.sum.posisi_keuangan.credit}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-28 font-bold">
                  Laba Rugi Bersih
                </TableCell>
                <TableCell className="w-28 font-bold  text-center"></TableCell>
                <TableCell className="w-28 font-bold  text-center"></TableCell>
                <TableCell className="w-28 font-bold  text-center"></TableCell>
                <TableCell className="w-28 font-bold  text-center"></TableCell>
                <TableCell className="w-28 font-bold  text-center"></TableCell>
                <TableCell className="w-28 font-bold  text-center"></TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.laba_rugi_bersih.laba_rugi.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.laba_rugi_bersih.laba_rugi.credit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.laba_rugi_bersih.posisi_keuangan.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.laba_rugi_bersih.posisi_keuangan.credit}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-28 font-bold">Total</TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.total.neraca_saldo.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.total.neraca_saldo.credit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.total.penyesuaian.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.total.penyesuaian.credit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.total.neraca_setelahnya.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.total.neraca_setelahnya.credit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.total.laba_rugi.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.total.laba_rugi.credit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.total.posisi_keuangan.debit}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {summary?.total.posisi_keuangan.credit}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </section>
    </Layout>
  );
}

// const data = [
//   {
//     namaAkun: "Akun Pos.Keu 1",
//     neracaSaldo: { debit: 100000, kredit: 0 },
//     penyesuaian: { debit: 0, kredit: 10000 },
//     neracaSetelahnya: { debit: 90000, kredit: 0 },
//     labaRugi: { debit: 0, kredit: 0 },
//     posisiKeuangan: { debit: 90000, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Pos.Keu 2",
//     neracaSaldo: { debit: 0, kredit: 100000 },
//     penyesuaian: { debit: 10000, kredit: 0 },
//     neracaSetelahnya: { debit: 0, kredit: 90000 },
//     labaRugi: { debit: 0, kredit: 0 },
//     posisiKeuangan: { debit: 0, kredit: 90000 },
//   },
//   {
//     namaAkun: "Akun Pos.Keu 3",
//     neracaSaldo: { debit: 50000, kredit: 0 },
//     penyesuaian: { debit: 0, kredit: 0 },
//     neracaSetelahnya: { debit: 50000, kredit: 0 },
//     labaRugi: { debit: 0, kredit: 0 },
//     posisiKeuangan: { debit: 50000, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Laba Rugi 1",
//     neracaSaldo: { debit: 100000, kredit: 0 },
//     penyesuaian: { debit: 80000, kredit: 0 },
//     neracaSetelahnya: { debit: 180000, kredit: 0 },
//     labaRugi: { debit: 180000, kredit: 0 },
//     posisiKeuangan: { debit: 0, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Laba Rugi 2",
//     neracaSaldo: { debit: 0, kredit: 100000 },
//     penyesuaian: { debit: 0, kredit: 80000 },
//     neracaSetelahnya: { debit: 0, kredit: 180000 },
//     labaRugi: { debit: 0, kredit: 180000 },
//     posisiKeuangan: { debit: 0, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Laba Rugi 3",
//     neracaSaldo: { debit: 0, kredit: 50000 },
//     penyesuaian: { debit: 0, kredit: 0 },
//     neracaSetelahnya: { debit: 0, kredit: 50000 },
//     labaRugi: { debit: 0, kredit: 50000 },
//     posisiKeuangan: { debit: 0, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Pos.Keu 1",
//     neracaSaldo: { debit: 100000, kredit: 0 },
//     penyesuaian: { debit: 0, kredit: 10000 },
//     neracaSetelahnya: { debit: 90000, kredit: 0 },
//     labaRugi: { debit: 0, kredit: 0 },
//     posisiKeuangan: { debit: 90000, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Pos.Keu 2",
//     neracaSaldo: { debit: 0, kredit: 100000 },
//     penyesuaian: { debit: 10000, kredit: 0 },
//     neracaSetelahnya: { debit: 0, kredit: 90000 },
//     labaRugi: { debit: 0, kredit: 0 },
//     posisiKeuangan: { debit: 0, kredit: 90000 },
//   },
//   {
//     namaAkun: "Akun Pos.Keu 3",
//     neracaSaldo: { debit: 50000, kredit: 0 },
//     penyesuaian: { debit: 0, kredit: 0 },
//     neracaSetelahnya: { debit: 50000, kredit: 0 },
//     labaRugi: { debit: 0, kredit: 0 },
//     posisiKeuangan: { debit: 50000, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Laba Rugi 1",
//     neracaSaldo: { debit: 100000, kredit: 0 },
//     penyesuaian: { debit: 80000, kredit: 0 },
//     neracaSetelahnya: { debit: 180000, kredit: 0 },
//     labaRugi: { debit: 180000, kredit: 0 },
//     posisiKeuangan: { debit: 0, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Laba Rugi 2",
//     neracaSaldo: { debit: 0, kredit: 100000 },
//     penyesuaian: { debit: 0, kredit: 80000 },
//     neracaSetelahnya: { debit: 0, kredit: 180000 },
//     labaRugi: { debit: 0, kredit: 180000 },
//     posisiKeuangan: { debit: 0, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Laba Rugi 3",
//     neracaSaldo: { debit: 0, kredit: 50000 },
//     penyesuaian: { debit: 0, kredit: 0 },
//     neracaSetelahnya: { debit: 0, kredit: 50000 },
//     labaRugi: { debit: 0, kredit: 50000 },
//     posisiKeuangan: { debit: 0, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Pos.Keu 1",
//     neracaSaldo: { debit: 100000, kredit: 0 },
//     penyesuaian: { debit: 0, kredit: 10000 },
//     neracaSetelahnya: { debit: 90000, kredit: 0 },
//     labaRugi: { debit: 0, kredit: 0 },
//     posisiKeuangan: { debit: 90000, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Pos.Keu 2",
//     neracaSaldo: { debit: 0, kredit: 100000 },
//     penyesuaian: { debit: 10000, kredit: 0 },
//     neracaSetelahnya: { debit: 0, kredit: 90000 },
//     labaRugi: { debit: 0, kredit: 0 },
//     posisiKeuangan: { debit: 0, kredit: 90000 },
//   },
//   {
//     namaAkun: "Akun Pos.Keu 3",
//     neracaSaldo: { debit: 50000, kredit: 0 },
//     penyesuaian: { debit: 0, kredit: 0 },
//     neracaSetelahnya: { debit: 50000, kredit: 0 },
//     labaRugi: { debit: 0, kredit: 0 },
//     posisiKeuangan: { debit: 50000, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Laba Rugi 1",
//     neracaSaldo: { debit: 100000, kredit: 0 },
//     penyesuaian: { debit: 80000, kredit: 0 },
//     neracaSetelahnya: { debit: 180000, kredit: 0 },
//     labaRugi: { debit: 180000, kredit: 0 },
//     posisiKeuangan: { debit: 0, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Laba Rugi 2",
//     neracaSaldo: { debit: 0, kredit: 100000 },
//     penyesuaian: { debit: 0, kredit: 80000 },
//     neracaSetelahnya: { debit: 0, kredit: 180000 },
//     labaRugi: { debit: 0, kredit: 180000 },
//     posisiKeuangan: { debit: 0, kredit: 0 },
//   },
//   {
//     namaAkun: "Akun Laba Rugi 3",
//     neracaSaldo: { debit: 0, kredit: 50000 },
//     penyesuaian: { debit: 0, kredit: 0 },
//     neracaSetelahnya: { debit: 0, kredit: 50000 },
//     labaRugi: { debit: 0, kredit: 50000 },
//     posisiKeuangan: { debit: 0, kredit: 0 },
//   },
// ];

// return (
//   <Layout>
//     <div>
//       <h1 className="text-2xl font-bold mb-4 text-center">Neraca Lajur</h1>
//       <Link href="/working-trial-balance/adjustment-journal">
//         <Button className="mb-4">Jurnal Penyesuaian</Button>
//       </Link>
//       <TableWTB data={data} />
//       {/* <PatanTable data={data} /> */}
//     </div>
//   </Layout>
// );
// };
