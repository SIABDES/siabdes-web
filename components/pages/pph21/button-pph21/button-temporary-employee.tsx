import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function TemporaryEmployees() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-blue-600 p-3 rounded-lg text-white">
          Pegawai Tidak Tetetap
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Pegawai Tidak Tetetap</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Upah Mingguan</DropdownMenuItem>
          <DropdownMenuItem>Upah Borongan</DropdownMenuItem>
          <DropdownMenuItem>Upah Satuan</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
