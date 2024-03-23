"use client";

import { formatDateToString } from "@/common/helpers/date";
import {
  formatEmployeeChildrenAmount,
  formatEmployeeGender,
  formatEmployeeMarriageStatus,
  formatEmployeeNPWPStatus,
  formatEmployeeStatus,
  formatEmployeeType,
} from "@/common/helpers/employee-format";
import Layout from "@/components/layout/layout";
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useDeleteEmployee from "@/hooks/employee/useDeleteEmployee";
import useGetEmployeeDetails from "@/hooks/employee/useGetEmployeeDetails";
import { EditIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default function DetailEmployees({
  params,
}: {
  params: { employee_id: string };
}) {
  const { data: details, isFetched } = useGetEmployeeDetails({ params });

  const router = useRouter();

  const {
    mutateAsync: mutateDeleteEmployee,
    isPending: isMutateDeletePending,
    isSuccess: isMutateDeleteSucces,
  } = useDeleteEmployee({ employee_id: params.employee_id });

  const handleDeleteEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
    void mutateDeleteEmployee(undefined, {
      onSuccess: () => {
        // toast({
        //   title: "Hapus PPN",
        //   description: "Data PPN berhasil dihapus",
        //   duration: 5000,
        // });
        toast.success("Data Tenaga Kerja berhasil dihapus", {
          description: "Memuat ulang data Tenaga Kerja...",
        });
        router.push("/unit/data-master/employees");
      },
      onError: (error) => {
        // toast({
        //   title: "gagal Menghapus PPN",
        //   description: error.message,
        //   duration: 5000,
        // });
        toast.error("Gagal menghapus data Tenaga Kerja", {
          description: error.message,
        });
      },
    });
  };

  return (
    <Layout>
      <Link href="/unit/data-master/employees">
        <Button variant={"outline"}>Kembali</Button>
      </Link>

      <div className="flex justify-between mt-8">
        <h5 className="font-semibold flex items-center">Detail Tenaga Kerja</h5>

        <div className="inline-flex gap-x-4 justify-end">
          <Button variant={"outline"}>
            <Link
              href={`/unit/data-master/employees/${params.employee_id}/edit`}
              className="flex items-center"
            >
              <EditIcon size={16} className="mr-2" />
              Edit Data
            </Link>
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"destructive"} disabled={isMutateDeletePending}>
                <TrashIcon size={16} className="mr-2" />
                {isMutateDeletePending ? "Menghapus..." : "Hapus Data"}
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
                    variant={"destructive"}
                    className="w-fit"
                    onClick={handleDeleteEmployee}
                  >
                    Hapus Data
                  </Button>
                </AlertDialogAction>
                <AlertDialogCancel>Batalkan</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="mt-8">
        {isFetched && details && (
          <div>
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
                        {/* {details?.npwp} */}
                        {/* gimana caranya jika null maka tidak akan di tmapilkan */}
                        {details?.npwp ? details?.npwp : "-"}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Status Tenaga Kerja
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {formatEmployeeStatus(details?.employee_status)}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border border-black">
                      <TableCell className="px-6 py-4 border border-black">
                        Tanggal Mulai Bekerja
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
                        Kepemilikan Nomor Pokok Wajib Pajak (NPWP)
                      </TableCell>
                      <TableCell className="px-6 py-4 border border-black">
                        {formatEmployeeNPWPStatus(
                          details?.npwp_status ? details?.npwp_status : "-"
                        )}
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
