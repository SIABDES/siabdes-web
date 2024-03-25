"use client";

import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChangeEvent, useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useEditEmployee from "@/hooks/employee/useEditEmployee";
import useGetEmployeeDetails from "@/hooks/employee/useGetEmployeeDetails";
import {
  UpdateEmployeeFormData,
  UpdateEmployeeRequest,
} from "@/types/employees/dto";
import {
  EmployeesChildrenAmount,
  EmployeesGender,
  EmployeesMarriageStatus,
  EmployeesNPWPStatus,
  EmployeesStatus,
  EmployeesType,
} from "@/types/employees/employees";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Edit({ params }: { params: { employee_id: string } }) {
  const router = useRouter();

  const {
    data: details,
    isLoading: isDetailsLoading,
    refetch: refetchDetails,
  } = useGetEmployeeDetails({ params });

  const form = useForm<UpdateEmployeeFormData>({
    resolver: zodResolver(UpdateEmployeeRequest),
    defaultValues: {
      name: details?.name || "",
      nik: details?.nik || "",
      npwp: details?.npwp || "",
      employee_status: details?.employee_status || undefined,
      // start_working_at: details?.start_working_at || undefined,
      start_working_at: details?.start_working_at
        ? new Date(details?.start_working_at)
        : undefined,
      gender: details?.gender || undefined,
      marriage_status: details?.marriage_status || undefined,
      npwp_status: details?.npwp_status || undefined,
      children_amount: details?.children_amount || undefined,
      employee_type: details?.employee_type || undefined,
    },
  });

  const [existenceNPWP, setExistenceNPWP] = useState<string | undefined>("ada");

  const formatNPWP = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "");

    let formatted = "";
    for (let i = 0; i < cleanedValue.length && formatted.length < 20; i++) {
      if (i === 2 || i === 5 || i === 8 || i === 12) {
        formatted += ".";
      }
      if (i === 9) {
        formatted += "-";
      }
      formatted += cleanedValue[i];
    }

    return formatted;
  };

  const { mutateAsync: mutateEditEmployee, isPending: isPendingEditEmployee } =
    useEditEmployee({ employee_id: params.employee_id });

  const onSubmit = async (data: UpdateEmployeeFormData) => {
    try {
      await mutateEditEmployee(data);

      toast.success("Berhasil mengubah data tenaga kerja", {
        description: `Data tenaga kerja '${data.name}' telah diubah...`,
      });

      router.push(`/unit/data-master/employees/${params.employee_id}/details`);
    } catch (err) {
      toast.error("Gagal mengubah data tenaga kerja", {
        description: `Data tenaga kerja '${data.name}' gagal diubah...`,
      });
    }
  };

  return (
    <Layout>
      <section>
        <header>
          <Link
            href={`/unit/data-master/employees/${params.employee_id}/details`}
            className="w-fit"
          >
            <Button variant={"ghost"}>
              <ChevronLeftIcon className="w-4 h-4 mr-2" />
              Kembali
            </Button>
          </Link>

          <h5 className="font-semibold mt-4 pl-1">
            Edit Data Tenaga Kerja Unit
          </h5>
          {/* <h1 className="text-lg font-bold text-left">Tambah</h1>
          <Link href="/unit/data-master/employees">
            <Button>Kembali</Button>
          </Link> */}
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="border border-gray-300 shadow-md pt-3 mt-3">
              <CardContent>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center">
                      <FormLabel htmlFor={field.name}>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input
                          className="border border-gray-400"
                          placeholder="Masukkan nama lengkap"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nik"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center">
                      <FormLabel htmlFor={field.name}>
                        Nomor Induk kependudukan (NIK)
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border border-gray-400"
                          placeholder="Masukkan NIK"
                          {...field}
                          maxLength={16}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="npwp"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center">
                      <FormLabel htmlFor={field.name}>
                        Nomor Pokok Wajib Pajak (NPWP)
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border border-gray-400"
                          {...field}
                          // placeholder={
                          //   existenceNPWP === 'ada'
                          //     ? '_ _ . _ _ _ . _ _ _ - _ . _ _ _ . _ _ _'
                          //     : '00.000.000-0.000.000'
                          // }
                          value={
                            existenceNPWP === "tidak"
                              ? ""
                              : formatNPWP(String(field.value))
                          }
                          disabled={existenceNPWP === "tidak"}
                          maxLength={20}
                        />
                      </FormControl>
                      <div></div>
                      <div>
                        <RadioGroup
                          className="grid grid-cols-2 mb-3"
                          defaultValue={existenceNPWP}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            const selectedValue = e.target.value;
                            if (selectedValue !== existenceNPWP) {
                              setExistenceNPWP(selectedValue);
                            }
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ada" />
                            <Label htmlFor="ada">Ada NPWP</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="tidak" />
                            <Label htmlFor="tidak">Tidak Ada NPWP</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="employee_status"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center">
                      <FormLabel htmlFor={field.name}>
                        Status Tenaga Kerja
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="border border-gray-400">
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih status tenaga kerja" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={EmployeesStatus.KARYAWAN_LAMA}>
                              Karyawan Lama
                            </SelectItem>
                            <SelectItem value={EmployeesStatus.KARYAWAN_BARU}>
                              Karyawan Baru
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="start_working_at"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center">
                      <FormLabel htmlFor={field.name}>
                        Tanggal Mulai Bekerja
                      </FormLabel>
                      <FormControl>
                        {/* <Input
                          type="date"
                          className="border border-gray-400"
                          placeholder="Masukkan nama lengkap"
                          {...field}
                          min={
                            form.watch('employee_status') ===
                            EmployeesStatus.KARYAWAN_BARU
                              ? new Date().getFullYear().toString() + '-01-01'
                              : undefined
                          }
                        /> */}
                        <DatePicker
                          className="w-full border border-gray-400"
                          placeholder="Pilih bulan mulai bekerja"
                          date={field.value}
                          setDate={field.onChange}
                          disablePreviousYears={
                            form.watch("employee_status") ===
                            EmployeesStatus.KARYAWAN_BARU
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center">
                      <FormLabel htmlFor={field.name}>Jenis Kelamin</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="border border-gray-400">
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih jenis kelamin" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={EmployeesGender.PRIA}>
                              Laki-laki
                            </SelectItem>
                            <SelectItem value={EmployeesGender.WANITA}>
                              Perempuan
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="font-semibold mt-3">
                  Status Penghasilan Tidak Kena Pajak
                </p>
                <FormField
                  control={form.control}
                  name="marriage_status"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center">
                      <FormLabel htmlFor={field.name}>
                        Status Perkawinan
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="border border-gray-400">
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih status perkawinan" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={EmployeesMarriageStatus.KAWIN}>
                              Kawin
                            </SelectItem>
                            <SelectItem
                              value={EmployeesMarriageStatus.BELUM_KAWIN}
                            >
                              Belum Kawin
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="npwp_status"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center">
                      <FormLabel htmlFor={field.name}>
                        Kepemilikan NPWP
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={
                            form.watch("gender") === EmployeesGender.PRIA ||
                            (form.watch("gender") === EmployeesGender.WANITA &&
                              form.watch("marriage_status") ===
                                EmployeesMarriageStatus.BELUM_KAWIN)
                          }
                          // value={
                          //   form.watch('gender') === EmployeesGender.PRIA ||
                          //   (form.watch('gender') === EmployeesGender.WANITA &&
                          //     form.watch('marriage_status') ===
                          //       EmployeesMarriageStatus.BELUM_KAWIN)
                          //     ? undefined
                          //     : field.value
                          // }
                        >
                          <FormControl className="border border-gray-400">
                            <SelectTrigger>
                              <SelectValue
                                placeholder={
                                  form.watch("gender") === EmployeesGender.PRIA
                                    ? "_ _ _ _ _ _ _ _ _"
                                    : "Pilih status NPWP"
                                }
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem
                              value={EmployeesNPWPStatus.DIGABUNG_DENGAN_SUAMI}
                            >
                              Digabung dengan suami
                            </SelectItem>
                            <SelectItem
                              value={EmployeesNPWPStatus.DIPISAH_DENGAN_SUAMI}
                            >
                              Dipisah dengan suami
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="children_amount"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center">
                      <FormLabel htmlFor={field.name}>
                        Jumlah Tanggungan
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="border border-gray-400">
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih jumlah tanggungan" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem
                              value={EmployeesChildrenAmount.TIDAK_ADA}
                            >
                              Tidak Ada
                            </SelectItem>
                            <SelectItem value={EmployeesChildrenAmount.SATU}>
                              1 (Satu)
                            </SelectItem>
                            <SelectItem value={EmployeesChildrenAmount.DUA}>
                              2 (Dua)
                            </SelectItem>
                            <SelectItem value={EmployeesChildrenAmount.TIGA}>
                              3 (Tiga)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="employee_type"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center">
                      <FormLabel htmlFor={field.name}>
                        Jenis Tenaga Kerja
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="border border-gray-400">
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih jenis tenaga kerja" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={EmployeesType.PEGAWAI_TETAP}>
                              Pegawai Tetap
                            </SelectItem>
                            <SelectItem value={EmployeesType.DIBAYAR_BULANAN}>
                              Pegawai Tidak Tetap - Dibayar Bulanan
                            </SelectItem>
                            <SelectItem value={EmployeesType.DIBAYAR_HARIAN}>
                              Pegawai Tidak Tetap - Tidak Dibayar Bulanan
                            </SelectItem>
                            <SelectItem value={EmployeesType.BUKAN_PEGAWAI}>
                              Bukan Pegawai
                            </SelectItem>
                            <SelectItem value={EmployeesType.DIBAYAR_SEKALIGUS}>
                              Pesangon - Dibayar Sekaligus
                            </SelectItem>
                            <SelectItem value={EmployeesType.DIBAYAR_BERKALA}>
                              Pesangon - Dibayar Berkala
                            </SelectItem>
                            <SelectItem value={EmployeesType.PESERTA_KEGIATAN}>
                              PPh 21 Lainnya - Peserta Kegiatan
                            </SelectItem>
                            <SelectItem
                              value={EmployeesType.PENGAWAS_NON_PEGAWAI}
                            >
                              PPh 21 Lainnya - Pengawas Non Pegawai
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <div className="flex justify-end mt-10 mb-10">
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                // onClick={form.handleSubmit(onSubmit)}
                disabled={isPendingEditEmployee}
              >
                {isPendingEditEmployee
                  ? "Mungubah Data Karyawan..."
                  : "Ubah Data Karyawan"}
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </Layout>
  );
}
