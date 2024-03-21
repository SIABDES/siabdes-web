import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SelectMoon() {
  const bulan = [
    { value: 'januari', label: 'Januari' },
    { value: 'februari', label: 'Februari' },
    { value: 'maret', label: 'Maret' },
    { value: 'april', label: 'April' },
    { value: 'mei', label: 'Mei' },
    { value: 'juni', label: 'Juni' },
    { value: 'juli', label: 'Juli' },
    { value: 'agustus', label: 'Agustus' },
    { value: 'september', label: 'September' },
    { value: 'oktober', label: 'Oktober' },
    { value: 'november', label: 'November' },
    { value: 'desember', label: 'Desember' },
  ];
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Bulan" />
      </SelectTrigger>
      <SelectContent className="max-h-[200px] overflow-y-auto">
        <SelectGroup>
          {bulan.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              <SelectLabel className="">{item.label}</SelectLabel>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
