import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useSession } from "next-auth/react";

type FundingDummyData = {
  years: number;
  perdes_number: string;
};

export default function BumdesFundingForm() {
  return (
    <div>
      <Table id="funding-table">
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2}>Tahun</TableHead>
            <TableHead rowSpan={2} className="text-center">
              Nomor Perdes Penyertaan Modal BUMDes
            </TableHead>
            <TableHead className="text-center" colSpan={2}>
              Nilai Penyertaan Modal
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead>Pemerintahan Desa</TableHead>
            <TableHead>Pihak Lain</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}
