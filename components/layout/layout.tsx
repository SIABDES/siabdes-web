"use client";

import Header from "@/components/header/header-dashboard";
import { PropsWithChildren } from "react";
import { Sidebar } from "../patan-ui/sidebar";
import {
  BookOpenIcon,
  BoxIcon,
  CalculatorIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  ClipboardPenLine,
  DollarSignIcon,
  HomeIcon,
} from "lucide-react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Sidebar
        items={{
          dashboard: {
            href: "/unit/dashboard",
            label: "Dashboard",
            icon: HomeIcon,
          },
          "jurnal-umum": {
            href: "/unit/general-journal",
            label: "Jurnal Umum",
            icon: ClipboardPenLine,
          },
          "buku-besar": {
            href: "/unit/ledger",
            label: "Buku Besar",
            icon: BookOpenIcon,
          },
          "neraca-lajur": {
            label: "Neraca Lajur",
            icon: ClipboardListIcon,
            href: "/unit/working-trial-balance",
          },
          "laporan-keuangan": {
            label: "Laporan Keuangan",
            icon: DollarSignIcon,
            childs: [
              {
                label: "Laba Rugi",
                href: "/unit/financial-statement/income-statement",
              },
              {
                label: "Posisi Keuangan",
                href: "/unit/financial-statement/statement-of-financial-position",
              },
              {
                label: "CALK",
                href: "/unit/financial-statement/calk",
              },
            ],
          },
          "jurnal-penutup": {
            label: "Jurnal Penutup",
            icon: ClipboardCheckIcon,
            href: "/unit/closing-entry",
          },
          perpajakan: {
            label: "Perpajakan",
            icon: CalculatorIcon,
            childs: [
              {
                id: "pph21",
                label: "PPh 21",
                href: "/unit/tax/pph21",
              },
              {
                id: "ppn",
                label: "PPN",
                href: "/unit/tax/ppn",
              },
            ],
          },
          "data-master": {
            label: "Data Master",
            icon: BoxIcon,
            childs: [
              {
                id: "akun",
                label: "Daftar Akun",
                href: "/unit/data-master/accounts",
              },
              {
                id: "ppn",
                label: "Daftar Tenaga Kerja",
                href: "/unit/data-master/employees",
              },
            ],
          },
        }}
      />

      <div className="flex w-full">
        <Header />
        <main className="flex-1 p-4 min-h-0 overflow-auto pt-28 px-8 pr-16">
          {children}
        </main>
        S
      </div>
    </div>
  );
}
