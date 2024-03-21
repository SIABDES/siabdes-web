import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ButtonPPH21() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-blue-600 p-3 rounded-lg text-white">
          PPH 21 Lainnya
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>PPH 21 Lainnya</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Peserta Kegiatan</DropdownMenuItem>
          <DropdownMenuItem>Pengawas Non Pegawai</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
