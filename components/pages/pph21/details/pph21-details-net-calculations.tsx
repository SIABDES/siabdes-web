import { formatRupiah, reverseFormat } from '@/common/helpers/number-format';
import TableView from '@/components/patan-ui/table/table-view';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { TableCell } from '@/components/ui/table';
import { Pph21NetCalculationsType } from '@/types/pph21/pph21';

interface Pph21DetailsNetCalculationsProps {
  calculation: Pph21NetCalculationsType;
}

export function Pph21DetailsNetCalculations({
  calculation,
}: Pph21DetailsNetCalculationsProps) {
  const items = [
    { type: 'Biaya Jabatan', value: calculation.position_deduction },
    {
      type: 'Iuran Setahun Dibayar Pegawai',
      value: calculation.annual_contribution,
    },
    {
      type: 'Premi Setahun Dibayar Pegawai',
      value: calculation.annual_assurance,
    },
    { type: 'Penghasilan Neto Setahun', value: calculation.result },
  ];

  return (
    <Card>
      <CardHeader>
        <h6 className="font-semibold">Perhitungan Penghasilan Neto</h6>
      </CardHeader>
      <CardContent>
        <TableView
          items={items}
          renderRow={(row) => (
            <>
              <TableCell>{row.type}</TableCell>
              <TableCell>{reverseFormat(formatRupiah(row.value!))}</TableCell>
            </>
          )}
        />
      </CardContent>
    </Card>
  );
}
