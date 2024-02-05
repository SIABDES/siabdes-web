'use client';

import React from 'react';
import { formatDateToString } from '@/common/helpers/date';
import Layout from '@/components/layout/layout';
import useGetEmployeeDetails from '@/hooks/employee/useGetEmployeeDetails';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import useDeleteEmployee from '@/hooks/employee/useDeleteEmployee';
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
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EditIcon, TrashIcon } from 'lucide-react';
import {
  formatEmployeeChildrenAmount,
  formatEmployeeGender,
  formatEmployeeMarriageStatus,
  formatEmployeeNPWPStatus,
  formatEmployeeStatus,
  formatEmployeeType,
} from '@/common/helpers/employee-format';

export default function DetailEmployees({
  params,
}: {
  params: { employee_id: string };
}) {
  const { data: details, isFetched } = useGetEmployeeDetails({ params });

  console.log(details);
  const router = useRouter();
  const { toast } = useToast();

  const {
    mutateAsync: mutateDeleteEmployee,
    isPending: isMutateDeletePending,
    isSuccess: isMutateDeleteSucces,
  } = useDeleteEmployee({ employee_id: params.employee_id });

  const handleDeleteEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
    void mutateDeleteEmployee(undefined, {
      onSuccess: () => {
        toast({
          title: 'Hapus PPN',
          description: 'Data PPN berhasil dihapus',
          duration: 5000,
        });
        router.push('/unit/data-master/employees');
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

  return (
    <Layout>
      {/* <h1 className="text-2xl font-bold mb-4 text-left underline underline-offset-8 ">
        Detail Tenaga Kerja
      </h1> */}
      <div className="flex justify-between">
        <h5 className="text-lg font-semibold flex items-center">
          Detail Tenaga Kerja
        </h5>

        <div className="inline-flex gap-x-4 justify-end">
          <Button variant={'outline'}>
            <Link
              href={`/unit/data-master/employees/${params.employee_id}/edit`}
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
                    onClick={handleDeleteEmployee}
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
        {isFetched && details && (
          <div>
            <div className="inline-flex justify-between items-center w-full pb-8 pt-4">
              <table>
                <tbody>
                  <tr>
                    <td className="text-sm font-medium min-w-[12rem]">
                      Nama Karyawan:
                    </td>
                    <td className="text-sm">{details.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col h-screen">
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
                        Nama Lengkap
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {details?.name}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Nomor Induk Kependudukan (NIK)
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {details?.nik}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Nomor Pokok Wajib Pajak (NPWP)
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {details?.npwp}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Status Tenaga Kerja
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {/* {details?.employee_status === 'NEW'
                          ? 'Karyawan Baru'
                          : 'Karyawan Lama'} */}
                        {formatEmployeeStatus(details?.employee_status)}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Bulan Mulai Bekerja
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {formatDateToString(details?.start_working_at)}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Jenis Kelamin
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {formatEmployeeGender(details?.gender)}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Status Perkawinan
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {formatEmployeeMarriageStatus(details.marriage_status)}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Status Nomor Pokok Wajib Pajak (NPWP)
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {formatEmployeeNPWPStatus(details?.npwp_status)}
                        ini masih belum ada di database
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Jumlah Tanggungan
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {formatEmployeeChildrenAmount(details?.children_amount)}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Jenis Tenaga Kerja
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {formatEmployeeType(details?.employee_type)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
