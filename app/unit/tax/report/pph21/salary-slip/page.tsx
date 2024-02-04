'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Lengkong from '../../../../../../public/lengkong.png';
import { formatRupiah, numberToWordsID } from '@/common/helpers/number-format';
import { useReactToPrint } from 'react-to-print';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
export default function PreviewSalarySlip() {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: 'Laporan PPh 21',
  });
  return (
    <>
      <div id="print-controller" className="my-6">
        <div className="mx-auto max-w-6xl flex justify-between">
          <Button variant={'secondary'} asChild>
            <Link href={'/unit/tax/pph21'}>Kembali ke Halaman Pajak PPh21</Link>
          </Button>

          <Button onClick={handlePrint}>Cetak Laporan (PDF)</Button>
        </div>

        <Separator />
      </div>

      <section ref={contentRef} className="max-w-5xl mx-auto">
        <header className="border-b-4 border-black mb-8 pb-4 max-w-3xl mx-auto">
          <div className="flex justify-center mt-10 space-x-6">
            <div>
              <Image src={Lengkong} alt="bg" width={130} />
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-2 max-w-md">
                <h1>BADAN USAHA MILIK DESA LENGKONG</h1>
                <h1>LAPORAN LABA RUGI</h1>
                <h1>UNIT USAHA JASA WISATA</h1>
              </div>
              <h3>Desa Lengkong, Kec. Bojongsoang,</h3>
              <h3>Kab. Bandung, Provinsi Jawa Barat</h3>
            </div>
          </div>
        </header>
        <div>
          <div className="max-w-2xl mx-auto px-8 pt-3 pb-8 mb-4">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold">Slip Gaji</h2>
              <h2>Periode 1 Januari - 31 januari 2023</h2>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-3">Nama Lengkap</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-5">
                  Clarisa Syifa Munawar
                </span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-3">Masa Pajak</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-5">Desember 2023</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-3">NPWP</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-5">
                  11.344.643.8-980.780
                </span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-3">NIK</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-5">33050250701001</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-3">Jenis Tenaga Kerja</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-5">Pegawai Tetap</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-3">Jenis Kelamin</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-5">Perempuan</span>
              </div>

              <div className="grid grid-cols-9 items-center">
                <span className="col-span-3">Penghasilan Bruto</span>
                {/* <span className="col-span-1">:</span> */}
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">Gaji</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 5.400.000</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">Bonus</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 500.000</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">THR</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 2.100.000</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">Tunjangan PPh</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 1.700.000</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">
                  Jumlah Premi Dibayar Pemberi Kerja
                </span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 1.200.000</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">
                  Jumlah Penghasilan bruto
                </span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 10.900.000</span>
              </div>

              <div className="grid grid-cols-9 items-center">
                <span className="col-span-3">Pengurang</span>
                {/* <span className="col-span-1">:</span> */}
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">Biaya Jabatan</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 288.000</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">Iuran Pensiun/JT</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 108.000</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">Jumlah Pengurang</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 396.900</span>
              </div>

              <div className="grid grid-cols-9 items-center">
                <span className="col-span-3">Potongan</span>
                {/* <span className="col-span-1">:</span> */}
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">PPh 21</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 50.305</span>
              </div>
              <div className="grid grid-cols-9 items-center">
                <span className="col-span-5 ml-9">Jumlah Potongan</span>
                <span className="col-span-1">:</span>
                <span className="text-left col-span-3">Rp 50.305</span>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto border p-4 flex flex-col justify-center items-center border-black rounded-lg w-full">
            <div className="font-bold">
              {`Penerimaan bersih: ${formatRupiah(10849695)}`}
            </div>
            <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
            <div className="text-center">{`Terbilang : ${numberToWordsID(
              10849695
            )}`}</div>
          </div>
        </div>
      </section>
    </>
  );
}
