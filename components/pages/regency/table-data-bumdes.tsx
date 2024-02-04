import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const dataBumdes = [
  {
    No: '1',
    Bumdes: 'BUMDes Cipagalo',
    Kecamatan: 'Cipagalo',
    Pendapatan: 'Rp 175.000.000',
    Beban: 'Rp 170.000.000',
    'Laba/Rugi': 'Rp: 5.000.000',
    Aset: 'Rp 175.000.000',
    Utang: 'Rp 170.000.000',
    Modal: 'Rp 5.000.000',
  },
  {
    No: '2',
    Bumdes: 'BUMDes Ciparangan',
    Kecamatan: 'Ciparangan',
    Pendapatan: 'Rp 175.000.000',
    Beban: 'Rp 170.000.000',
    'Laba/Rugi': 'Rp: 5.000.000',
    Aset: 'Rp 175.000.000',
    Utang: 'Rp 170.000.000',
    Modal: 'Rp 5.000.000',
  },
  {
    No: '3',
    Bumdes: 'BUMDes Kalisusu',
    Kecamatan: 'Kalisusu',
    Pendapatan: 'Rp 175.000.000',
    Beban: 'Rp 170.000.000',
    'Laba/Rugi': 'Rp: 5.000.000',
    Aset: 'Rp 175.000.000',
    Utang: 'Rp 170.000.000',
    Modal: 'Rp 5.000.000',
  },
];

export function TableDataBumdes() {
  return (
    <div className="mt-6">
      <Table>
        {/* <TableCaption>A list of your recent data.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20px]">No</TableHead>
            <TableHead>Bumdes</TableHead>
            <TableHead>Kecamatan</TableHead>
            <TableHead>Pendapatan</TableHead>
            <TableHead>Beban</TableHead>
            <TableHead>Laba/Rugi</TableHead>
            <TableHead>Aset</TableHead>
            <TableHead>Utang</TableHead>
            <TableHead>Modal</TableHead>
            {/* <TableHead className="text-right"></TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataBumdes.map((data) => (
            <TableRow key={data.No}>
              <TableCell className="font-medium">{data.No}</TableCell>
              <TableCell>{data.Bumdes}</TableCell>
              <TableCell>{data.Kecamatan}</TableCell>
              <TableCell>{data.Pendapatan}</TableCell>
              <TableCell>{data.Beban}</TableCell>
              <TableCell>{data['Laba/Rugi']}</TableCell>
              <TableCell>{data.Aset}</TableCell>
              <TableCell>{data.Utang}</TableCell>
              <TableCell>{data.Modal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}
