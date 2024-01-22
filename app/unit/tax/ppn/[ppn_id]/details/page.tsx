'use client';

import useGetPPNDetails from '@/hooks/ppn/useGetPPNDetails';
import React, { use, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Layout from '@/components/layout/layout';
import {
  formatNumber,
  formatRupiah,
  reverseFormat,
  reverseFormatNumber,
} from '@/common/helpers/number-format';
import { reverse } from 'dns';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import useDeletePPN from '@/hooks/ppn/useDeletePPN';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EditIcon } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { TrashIcon } from 'lucide-react';
import {
  formatPPNItemType,
  formatPPNTransactionType,
  formatPPNtaxObject,
} from '@/common/helpers/ppn-format';
import { format } from 'path';
import { formatDateToString } from '@/common/helpers/date';
import { set } from 'date-fns';

export default function Details({ params }: { params: { ppn_id: string } }) {
  const { data: details, isFetched } = useGetPPNDetails({ params });
  const detail = details?.objects;

  const router = useRouter();
  const { toast } = useToast();

  const {
    mutateAsync: mutateDeletePPN,
    isPending: isMutateDeletePending,
    isSuccess: isMutateDeleteSuccess,
  } = useDeletePPN({ ppn_id: params.ppn_id });

  const handleDeletePPN = (e: React.MouseEvent<HTMLButtonElement>) => {
    void mutateDeletePPN(undefined, {
      onSuccess: () => {
        toast({
          title: 'Hapus PPN',
          description: 'Data PPN berhasil dihapus',
          duration: 5000,
        });
        router.push('/unit/tax/ppn');
      },
      onError: (error) => {
        toast({
          title: 'gagal Menghapus PPN',
          description: error.message,
          duration: 5000,
        });
      },
    });
  };

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement>,
    ppnId: string
  ) => {
    e.preventDefault();
    router.push(`/unit/tax/ppn/${ppnId}`);
  };

  const [totalPPN, setTotalPPN] = useState<number>(0);

  console.log('total ppn', totalPPN);
  useEffect(() => {
    if (isFetched && details) {
      // Hitung total PPN dari semua objek perhitungan
      const calculatedTotalPPN = details.objects.reduce(
        (accumulator, item) => accumulator + parseFloat(item.ppn || '0'),
        0
      );

      setTotalPPN(calculatedTotalPPN);
    }

    console.log('total ppn', totalPPN);
  }, [isFetched, details]);

  const getPPNValue = () => {
    return totalPPN;
  };

  return (
    <Layout>
      <div className="flex justify-between">
        <h5 className="text-lg font-semibold flex items-center">Detail PPN</h5>

        <div className="inline-flex gap-x-4 justify-end">
          <Button variant={'outline'}>
            <Link
              href={`/unit/tax/ppn/${params.ppn_id}/edit`}
              className="flex items-center"
            >
              <EditIcon size={16} className="mr-2" />
              Edit PPN
            </Link>
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={'destructive'} disabled={isMutateDeletePending}>
                <TrashIcon size={16} className="mr-2" />
                {isMutateDeletePending ? 'Menghapus...' : 'Hapus Jurnal'}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Yakin ingin hapus jurnal?</AlertDialogTitle>
                <AlertDialogDescription>
                  Data yang telah dihapus tidak akan bisa dikembalikan. Pastikan
                  data yang akan dihapus sudah benar.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  asChild
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  <Button
                    variant={'destructive'}
                    className="w-fit"
                    onClick={handleDeletePPN}
                  >
                    Hapus Jurnal
                  </Button>
                </AlertDialogAction>
                <AlertDialogCancel>Batalkan</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div>
        {isFetched &&
          details &&
          detail &&
          detail.map((item, index) => (
            <div key={index}>
              <div className=" w-full pb-8 pt-4">
                <table>
                  <tbody>
                    <tr>
                      <td className="text-sm font-medium min-w-[12rem]">
                        Nama Barang:
                      </td>
                      <td className="text-sm">{item.name}</td>
                    </tr>
                    <tr>
                      <td className="text-sm font-medium min-w-[12rem]">
                        Nama Perusahaan:
                      </td>
                      <td className="text-sm">{details.given_to}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex flex-col h-screen pt-4 mb-9">
                  <div className="flex-grow overflow-auto">
                    <Table className="relative w-full">
                      <TableHeader className="border border-black">
                        <TableRow className="border border-black">
                          <TableCell className="sticky top-0 px-6 py-3 font-bold text-center border border-black">
                            Informasi
                          </TableCell>
                          <TableCell className="sticky top-0 px-6 py-3 font-bold text-center border border-black">
                            Data
                          </TableCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="divide-y border border-black">
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Jenis Transaksi
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {formatPPNTransactionType(details.transaction_type)}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Tanggal Transaksi
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {formatDateToString(details.transaction_date)}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Jenis Objek
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {formatPPNItemType(details.item_type)}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Pengusaha Kena Pajak
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {details.given_to}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Objek Pajak
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {formatPPNtaxObject(details.tax_object)}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Bukti Transaksi
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {/* {details.} */}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Nomor Bukti Transaksi
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {details.transaction_number}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Nama Barang/Jasa
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {item.name}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Harga Satuan
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {formatRupiah(parseFloat(item.price))}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Kuantitas
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {formatNumber(parseFloat(item.quantity))}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Harga Total
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {formatRupiah(parseFloat(item.total_price))}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Potongan Harga
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {formatRupiah(parseFloat(item.discount))}
                          </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Dasar Pengenaan Pajak (DPP)
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {formatRupiah(parseFloat(item.dpp))}
                          </TableCell>
                        </TableRow>

                        <TableRow className="border border-black">
                          <TableCell className="px-6 py-4 border border-black">
                            Pajak Pertambah Nilai (PPN)
                          </TableCell>
                          <TableCell className="px-6 py-4 border border-black">
                            {formatRupiah(parseFloat(item.ppn))}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}
