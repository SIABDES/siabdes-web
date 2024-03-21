import { formatNumber, formatRupiah } from "@/common/helpers/number-format";
import TableView from "@/components/patan-ui/table/table-view";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TableCell } from "@/components/ui/table";
import { Pph21CalculationsType } from "@/types/pph21/pph21";

interface Pph21DetailsCalculationsProps {
  calculations: Pph21CalculationsType;
}

export default function Pph21DetailsCalculations({
  calculations,
}: Pph21DetailsCalculationsProps) {
  return (
    <Card>
      <CardHeader>
        <h6 className="font-semibold">Perhitungan PPh 21</h6>
      </CardHeader>
      <CardContent>
        <TableView
          items={calculations}
          headers={["Persentase Tarif", "Jumlah", "Hasil"]}
          renderRow={(row) => (
            <>
              <TableCell className="w-48">
                <p>{(row.tariff_percentage * 100).toString() + "%"}</p>
              </TableCell>
              <TableCell>
                <p>{formatRupiah(row.amount)}</p>
              </TableCell>
              <TableCell>
                <p>{formatRupiah(row.result)}</p>
              </TableCell>
            </>
          )}
        />
      </CardContent>
    </Card>
  );
}
