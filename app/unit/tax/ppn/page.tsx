"use client";

import { formatRupiah } from "@/common/helpers/number-format";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import Layout from "@/components/layout/layout";
import DropdownMenuReportPPN from "@/components/pages/tax/dropdown-menu-report-ppn";
import { TableOverviewNextPpn } from "@/components/pages/tax/ppn/form/table-overview-ppn";
import PPNOverviewCard from "@/components/pages/tax/ppn/overview-card";
import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandList } from "@/components/ui/command";
import useGetPPN from "@/hooks/ppn/useGetPPN";
import { PpnTransactionType } from "@/types/ppn/ppn";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";

export default function PPN() {
  const { data: getPPN, isLoading: isGetPPNLoading } = useGetPPN();

  const purchasePpn = useMemo(() => {
    if (isGetPPNLoading) return [];
    return (
      getPPN?.data.taxes.filter(
        (ppn) => ppn.transaction_type === PpnTransactionType.PEMBELIAN
      ) ?? []
    );
  }, [getPPN?.data.taxes, isGetPPNLoading]);

  const salesPpn = useMemo(() => {
    if (isGetPPNLoading) return [];
    return (
      getPPN?.data.taxes.filter(
        (ppn) => ppn.transaction_type === PpnTransactionType.PENJUALAN
      ) ?? []
    );
  }, [getPPN?.data.taxes, isGetPPNLoading]);

  const sumIncome = useMemo(() => {
    return purchasePpn.reduce((sum, ppn) => sum + ppn.total_ppn, 0) || 0;
  }, [purchasePpn]);

  const sumOutcome = useMemo(() => {
    return salesPpn.reduce((sum, ppn) => sum + ppn.total_ppn, 0) || 0;
  }, [salesPpn]);

  const totalPPN = useMemo(
    () => sumOutcome - sumIncome,
    [sumOutcome, sumIncome]
  );

  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  const [activeTransactionType, setActiveTransactionType] =
    useState<PpnTransactionType>();

  return (
    <Layout>
      <h1 className="align-baseline my-auto font-semibold">
        Pajak Pertambahan Nilai
      </h1>
      <div className="grid grid-cols-3 gap-x-16 mt-4">
        <PPNOverviewCard
          title="PPN Masukan"
          mainText={formatRupiah(sumIncome)}
        />
        <PPNOverviewCard
          title="PPN Keluaran"
          mainText={formatRupiah(sumOutcome)}
        />
        <PPNOverviewCard
          title={`Total PPN (${
            totalPPN >= 0 ? "Kurang Bayar" : "Lebih Bayar"
          })`}
          mainText={formatRupiah(Math.abs(totalPPN))}
        />
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="grid grid-cols-2 gap-x-6">
          <Command className="rounded-lg border shadow-md w-72">
            <CommandInput placeholder="Pilih pengusaha kena pajak..." />
            <CommandList>
              {/* <CommandEmpty>No results found.</CommandEmpty> */}
            </CommandList>
          </Command>
          <CalendarDateRangePicker date={date} setDate={setDate} />
        </div>

        <div className="grid grid-cols-2">
          <Link href="/unit/tax/ppn/add">
            <Button>Tambah PPN</Button>
          </Link>
          <DropdownMenuReportPPN
            onSelectTransactionType={setActiveTransactionType}
          />
        </div>
      </div>
      <section className="pt-8 space-y-9 mb-9">
        <div>
          <h2 className="font-semibold mt-2 mb-2">PPN Masukan</h2>
          <TableOverviewNextPpn
            isLoading={isGetPPNLoading}
            taxes={purchasePpn}
            type={PpnTransactionType.PEMBELIAN}
          />
        </div>

        <div>
          <h2 className="font-semibold mt-2 mb-2">PPN Keluaran</h2>
          <TableOverviewNextPpn
            isLoading={isGetPPNLoading}
            taxes={salesPpn}
            type={PpnTransactionType.PENJUALAN}
          />
        </div>
      </section>
    </Layout>
  );
}
