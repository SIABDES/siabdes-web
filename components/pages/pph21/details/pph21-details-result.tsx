import { formatRupiah } from "@/common/helpers/number-format";
import TableView from "@/components/patan-ui/table/table-view";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TableCell } from "@/components/ui/table";
import { Pph21ResultType } from "@/types/pph21/pph21";

interface Pph21DetailsResultProps {
  result: Pph21ResultType;
}

export default function Pph21DetailsResult({
  result,
}: Pph21DetailsResultProps) {
  const items = [
    { type: "Total Pendapatan Bruto", value: result.total_salary },
    { type: "Total PPh 21", value: result.total_pph21 },
    { type: "Total Pendapatan Bersih", value: result.net_receipts },
  ];

  return (
    <Card>
      <CardHeader>
        <h6 className="font-semibold">Hasil PPh 21</h6>
      </CardHeader>
      <CardContent>
        <TableView
          items={items}
          renderRow={(row) => (
            <>
              <TableCell>{row.type}</TableCell>
              <TableCell>{formatRupiah(row.value)}</TableCell>
            </>
          )}
        />
      </CardContent>
    </Card>
  );
}
