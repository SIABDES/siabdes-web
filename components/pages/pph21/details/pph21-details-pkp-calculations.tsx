import { formatRupiah } from "@/common/helpers/number-format";
import TableView from "@/components/patan-ui/table/table-view";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TableCell } from "@/components/ui/table";
import { Pph21PkpCalculationsType } from "@/types/pph21/pph21";

interface Pph21DetailsPkpCalculationsProps {
  pkp: Pph21PkpCalculationsType;
}

export default function Pph21DetailsPkpCalculations({
  pkp,
}: Pph21DetailsPkpCalculationsProps) {
  const items = [
    { type: "Persentase", value: pkp.percentage, format: false },
    { type: "Penghasilan Tidak Kena Pajak", value: pkp.ptkp, format: true },
    { type: "Jumlah Penghasilan", value: pkp.amount, format: true },
    { type: "Hasil Perhitungan", value: pkp.result, format: true },
  ];

  return (
    <Card>
      <CardHeader>
        <h6 className="font-semibold">Perhitungan Penghasilan Kena Pajak</h6>
      </CardHeader>
      <CardContent>
        <TableView
          items={items}
          skipIf={(row) => !row.value}
          renderRowContent={(row) => (
            <>
              <TableCell>
                <p>{row.type}</p>
              </TableCell>
              <TableCell>
                <p>{row.format ? formatRupiah(row.value!) : row.value}</p>
              </TableCell>
            </>
          )}
        />
      </CardContent>
    </Card>
  );
}
