import { Card, CardContent } from '@/components/ui/card';
import { ComboBox } from '@/components/ui/combobox';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Table } from 'lucide-react';
import React from 'react';
import { TableDataBumdes } from './table-data-bumdes';

export default function DataBumdes() {
  const [valueDistrict, setValueDistrict] = React.useState<string | undefined>(
    undefined
  );
  const [valueComponent, setValueComponent] = React.useState<
    string | undefined
  >(undefined);
  const districts = [
    { label: 'Arjasari', value: 'Arjasari' },
    { label: 'Baleendah', value: 'Baleendah' },
    { label: 'Banjaran', value: 'Banjaran' },
    { label: 'Bojongsoang', value: 'Bojongsoang' },
    { label: 'Cangkuang', value: 'Cangkuang' },
    { label: 'Cicalengka', value: 'Cicalengka' },
    { label: 'Cikancung', value: 'Cikancung' },
  ];

  const components = [
    { label: 'Pendapatan', value: 'Pendapatan' },
    { label: 'Beban', value: 'Beban' },
    { label: 'Laba/Rugi', value: 'Laba/Rugi' },
    { label: 'Aset', value: 'Aset' },
    { label: 'Utang', value: 'Utang' },
    { label: 'Modal', value: 'Modal' },
  ];

  return (
    <Card className="my-6">
      <CardContent>
        <p className="font-semibold mt-6 mb-3 ml-3">Data Bumdes</p>
        <div className="flex space-x-9">
          <ComboBox
            items={districts}
            setValue={setValueDistrict}
            value={valueDistrict}
            placeholder="Cari nama kecamatan..."
            triggerText="Pilih Kecamatan"
          />
          <ComboBox
            items={components}
            setValue={setValueComponent}
            value={valueComponent}
            placeholder="Cari nama komponen..."
            triggerText="Pilih Komponen"
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Urutkan" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="terendah">Terendah</SelectItem>
                <SelectItem value="tertinggi">Tertinggi</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <TableDataBumdes />
        </div>
      </CardContent>
    </Card>
  );
}
