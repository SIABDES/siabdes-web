import { formatNumber, formatRupiah } from '@/common/helpers/number-format';
import TableView from '@/components/patan-ui/table/table-view';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { TableCell, TableRow } from '@/components/ui/table';

interface Pph21DetailsGrossSalaryProps {
  salary?: number;
  thr?: number;
  bonus?: number;
  allowance?: number;
  overtime_salary?: number;
  assurance?: number;

  workingDays?: number;
  dailySalary?: number;
  monthlySalary?: number;
}

export function Pph21DetailsGrossSalary(props: Pph21DetailsGrossSalaryProps) {
  const items = [
    { type: 'Gaji', value: props.salary, format: true },
    { type: 'Tunjangan Hari Raya (THR)', value: props.thr, format: true },
    { type: 'Bonus', value: props.bonus, format: true },
    { type: 'Tunjangan', value: props.allowance, format: true },
    { type: 'Upah Lembur', value: props.overtime_salary, format: true },
    {
      type: 'Premi Dibayar Pemberi Kerja',
      value: props.assurance,
      format: true,
    },
    { type: 'Jumlah Hari Kerja', value: props.workingDays, format: false },
    { type: 'Gaji Harian', value: props.dailySalary, format: true },
    { type: 'Gaji Bulanan', value: props.monthlySalary, format: true },
  ];

  return (
    <Card>
      <CardHeader>
        <h6 className="font-semibold">Pendapatan Bruto</h6>
      </CardHeader>
      <CardContent>
        <TableView
          items={items}
          skipIf={(row) => !row.value}
          renderRow={(row) => (
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
