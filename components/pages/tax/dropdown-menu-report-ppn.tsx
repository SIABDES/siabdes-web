import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PpnTransactionType } from '@/types/ppn/ppn';

interface DropdownMenuReportPPNProps {
  onSelectTransactionType: (transactionType: PpnTransactionType) => void;
}
export default function DropdownMenuReportPPN({
  onSelectTransactionType,
}: DropdownMenuReportPPNProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Cetak Laporan PPN</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuGroup>
          <DropdownMenuSub>
            {/* <Link href="/unit/tax/report/ppn">
              <DropdownMenuItem
                onSelect={() =>
                  onSelectTransactionType(PpnTransactionType.PEMBELIAN)
                }
              >
                Cetak PPN Masukan
              </DropdownMenuItem>
            </Link> */}
            <Link href="/unit/tax/report/ppn/purchase">
              <DropdownMenuItem
                onSelect={() =>
                  onSelectTransactionType(PpnTransactionType.PEMBELIAN)
                }
              >
                Cetak PPN Masukan
              </DropdownMenuItem>
            </Link>
            <Link href="/unit/tax/report/ppn/sales">
              <DropdownMenuItem
                onSelect={() =>
                  onSelectTransactionType(PpnTransactionType.PENJUALAN)
                }
              >
                Cetak PPN Keluaran
              </DropdownMenuItem>
            </Link>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
