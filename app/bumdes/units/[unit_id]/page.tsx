import { formatDateToString } from "@/common/helpers/date";
import BumdesLayout from "@/components/layout/bumdes-layout";
import UnitNav from "@/components/pages/bumdes/units/unit-nav";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BookUserIcon,
  BoxIcon,
  CircleDollarSign,
  DollarSignIcon,
  LandmarkIcon,
  NewspaperIcon,
  ScaleIcon,
  UsersIcon,
} from "lucide-react";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function BumdesUnitDashboard({
  params,
}: {
  params: { unit_id: string };
}) {
  const transactions: {
    id: string;
    description: string;
    occurred_at: Date;
    is_adjustment: boolean;
  }[] = [
    // fill dummy data
    {
      id: nanoid(2),
      description: "Lorem ipsum dolor sit amet consectetur.",
      occurred_at: new Date(),
      is_adjustment: true,
    },
    {
      id: nanoid(2),
      description: "Transaksi 2",
      occurred_at: new Date(),
      is_adjustment: false,
    },
    {
      id: nanoid(2),
      description: "Transaksi 3",
      occurred_at: new Date(),
      is_adjustment: false,
    },
    {
      id: nanoid(2),
      description: "Transaksi 4",
      occurred_at: new Date(),
      is_adjustment: true,
    },
  ];

  return (
    <>
      <h4 className="text-lg font-medium">Dashboard Unit</h4>

      <Separator className="w-full my-4" />

      <div className="w-full grid grid-cols-12 gap-x-8">
        <section id="analytics" className="col-span-8">
          <Card>
            <CardHeader>
              <h6 className="text-sm font-medium">Transaksi Terbaru</h6>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-80">Deskripsi</TableHead>
                      <TableHead>Tanggal Transaksi</TableHead>
                      <TableHead>Jenis Jurnal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>
                          {formatDateToString(transaction.occurred_at)}
                        </TableCell>
                        <TableCell>
                          {transaction.is_adjustment ? "Penyesuaian" : "Umum"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        <Card id="navs" className="col-span-4 h-fit">
          <CardHeader>
            <h6 className="font-medium">Navigasi Unit</h6>
          </CardHeader>
          <CardContent className="grid grid-cols-6 gap-x-2 items-center pb-4">
            <div
              id="navs-left"
              className="col-span-3 flex flex-col gap-y-4 items-center"
            >
              <UnitNav
                href="/bumdes/units/[unit_id]/financial-statement/income-statement"
                as={`/bumdes/units/1/financial-statement/income-statement`}
                icon={NewspaperIcon}
                label="Laba Rugi"
              />

              <UnitNav
                href="/bumdes/units/[unit_id]/employees"
                as={`/bumdes/units/1/employees`}
                icon={BookUserIcon}
                label="Tenaga Kerja"
              />

              <UnitNav
                href="/bumdes/units/[unit_id]/taxes/ppn"
                as={`/bumdes/units/1/taxes/ppn`}
                icon={BoxIcon}
                label="PPN"
              />
            </div>

            <div
              id="navs-left"
              className="col-span-3 flex flex-col gap-y-4 items-center"
            >
              <UnitNav
                href="/bumdes/units/[unit_id]/financial-statement/financial-position"
                as={`/bumdes/units/1/financial-statement/financial-position`}
                icon={ScaleIcon}
                label="Posisi Keuangan"
              />

              <UnitNav
                href="/bumdes/units/[unit_id]/profile"
                as={`/bumdes/units/1/profile`}
                icon={LandmarkIcon}
                label="Profil Unit"
              />

              <UnitNav
                href="/bumdes/units/[unit_id]/taxes/pph-21"
                as={`/bumdes/units/1/taxes/pph-21`}
                icon={UsersIcon}
                label="PPh 21"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
