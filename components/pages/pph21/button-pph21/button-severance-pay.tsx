import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ButtonSeverancePay() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-blue-600 p-3 rounded-lg text-white">
          Pesangon
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Pesangon</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Pesangon Dibayar Secara Berkala</DropdownMenuItem>
          <DropdownMenuItem>Pesangon Dibayar Sekaligus</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
