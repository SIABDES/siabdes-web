import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import ButtonPermanentEmployee from './button-temporary-employee';
import ButtonSeverancePay from './button-severance-pay';
import ButtonPPH21 from './button-pph21';
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

export default function DropdownMenuButtonPPh21() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-blue-600 text-white hover:selection:bg-blue-200"
          >
            Tambah PPh 21
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ">
          <DropdownMenuLabel>Pajak Penghasilan</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <Link href="/unit/tax/pph21/add/permanent-employee">
                <DropdownMenuItem>Pegawai Tetap</DropdownMenuItem>
              </Link>
              <DropdownMenuSubTrigger>
                Pegawai Tidak Tetap
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {/* <Link href="/unit/tax/pph21/add/temporary-employee/weekly-salary">
                    <DropdownMenuItem>Upah Mingguan</DropdownMenuItem>
                  </Link>
                  <Link href="/unit/tax/pph21/add/temporary-employee/one-time-salary">
                    <DropdownMenuItem>Upah Borongan</DropdownMenuItem>
                  </Link>
                  <Link href="/unit/tax/pph21/add/temporary-employee/piece-salary">
                    <DropdownMenuItem>Upah Satuan</DropdownMenuItem>
                  </Link> */}
                  <Link
                    href={'/unit/tax/pph21/add/temporary-employee/paid-monthly'}
                  >
                    <DropdownMenuItem>Dibayar Bulanan</DropdownMenuItem>
                  </Link>
                  <Link
                    href={
                      '/unit/tax/pph21/add/temporary-employee/not-paid-monthly'
                    }
                  >
                    <DropdownMenuItem>Tidak Dibayar Bulanan</DropdownMenuItem>
                  </Link>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <Link href="/unit/tax/pph21/add/not-employee">
            <DropdownMenuItem>Bukan Pegawai</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Pesangon</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <Link href="/unit/tax/pph21/add/severance-pay/periodic">
                    <DropdownMenuItem>Dibayar Berkala</DropdownMenuItem>
                  </Link>
                  <Link href="/unit/tax/pph21/add/severance-pay/one-time">
                    <DropdownMenuItem>Dibayar Sekaligus</DropdownMenuItem>
                  </Link>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>PPH 21 Lainnya</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <Link href="/unit/tax/pph21/add/pph21/activity-participants">
                    <DropdownMenuItem>Peserta Kegiatan</DropdownMenuItem>
                  </Link>
                  <Link href="/unit/tax/pph21/add/pph21/non-employee-supervisor">
                    <DropdownMenuItem>Pengawas Non Pegawai</DropdownMenuItem>
                  </Link>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <div className="space-y-8">
        <Link href="/unit/tax/pph21/permanent-employee">
          <Button className="w-auto px-20">Pegawai Tetap</Button>
        </Link>
        <div>
          <ButtonPermanentEmployee />
        </div>
        <div>
          <ButtonSeverancePay />
        </div>
        <div>
          <ButtonPPH21 />
        </div>
      </div> */}
    </div>
  );
}
