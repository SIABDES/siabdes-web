"use client";
import { formatNumber } from "@/common/helpers/number-format";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetWtb } from "@/hooks/wtb/useGetWtb";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
          <Link href="/unit/working-trial-balance/adjustment-journal">
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
                      <TableCell colSpan={11}>
                        <Skeleton className="w-full h-[2rem]" />
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}

              {accounts &&
                accounts.map((account) => (
                  <TableRow
                    key={account.account.id}
                    className="cursor-pointer hover:bg-gray-200 w-full"
                  >
                    <TableCell className="w-28">
                      {account.account.name}
                    </TableCell>
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
                  {formatNumber(summary?.sum.neraca_saldo.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.sum.neraca_saldo.credit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.sum.penyesuaian.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.sum.penyesuaian.credit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.sum.neraca_setelahnya.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.sum.neraca_setelahnya.credit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.sum.laba_rugi.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.sum.laba_rugi.credit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.sum.posisi_keuangan.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.sum.posisi_keuangan.credit ?? 0)}
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
                  {formatNumber(summary?.laba_rugi_bersih.laba_rugi.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(
                    summary?.laba_rugi_bersih.laba_rugi.credit ?? 0
                  )}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(
                    summary?.laba_rugi_bersih.posisi_keuangan.debit ?? 0
                  )}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(
                    summary?.laba_rugi_bersih.posisi_keuangan.credit ?? 0
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-28 font-bold">Total</TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.total.neraca_saldo.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.total.neraca_saldo.credit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.total.penyesuaian.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.total.penyesuaian.credit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.total.neraca_setelahnya.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.total.neraca_setelahnya.credit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.total.laba_rugi.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.total.laba_rugi.credit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.total.posisi_keuangan.debit ?? 0)}
                </TableCell>
                <TableCell className="w-28 font-bold  text-center">
                  {formatNumber(summary?.total.posisi_keuangan.credit ?? 0)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </section>
    </Layout>
  );
}
