"use client";

import { NewNavbar } from "@/components/patan-ui/new-navbar";
import NewSidebar from "@/components/patan-ui/new-sidebar";
import { cn } from "@nextui-org/react";
import {
  ArrowDownUpIcon,
  ContactIcon,
  HomeIcon,
  NewspaperIcon,
  NotebookTextIcon,
  PackageIcon,
  ReceiptIcon,
  ScaleIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";

export default function BumdesRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-row">
      <NewSidebar
        items={[
          {
            icon: HomeIcon,
            label: "Dashboard",
            href: "/bumdes",
            tooltip: "Dashboard",
          },
          {
            icon: UsersIcon,
            label: "Manajemen Unit",
            href: "/bumdes/units",
            tooltip: "Manajemen Unit",
          },
          {
            icon: NewspaperIcon,
            label: "Laporan Keuangan",
            tooltip: "Laporan Keuangan",
            children: [
              {
                label: "Laba Rugi",
                href: "/bumdes/income-statement",
                icon: ArrowDownUpIcon,
              },
              {
                label: "Posisi Keuangan",
                href: "/bumdes/financial-position",
                icon: ScaleIcon,
              },
              {
                label: "Catatan Atas Laporan Keuangan",
                href: "/bumdes/calk",
                icon: NotebookTextIcon,
              },
            ],
          },
          {
            icon: ReceiptIcon,
            label: "Laporan Pajak",
            tooltip: "Laporan Pajak",
            children: [
              {
                label: "Pajak Pertambahan Nilai",
                href: "/bumdes/taxes/ppn",
                icon: PackageIcon,
              },
              {
                label: "Pajak Penghasilan 21",
                href: "/bumdes/taxes/pph-21",
                icon: ContactIcon,
              },
            ],
          },
        ]}
      />

      <main className={cn("min-h-screen ml-8 w-full flex flex-col")}>
        <NewNavbar />

        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
