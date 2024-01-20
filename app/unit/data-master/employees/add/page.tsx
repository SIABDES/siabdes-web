'use client';

import React, { use, useEffect, useState } from 'react';
import Layout from '@/components/layout/layout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ComboBox } from '@/components/ui/combobox';
import InputField from '@/components/Input/input-field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { EmployeesSchema, EmployeeFormDataType } from '@/types/employees/dto';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EmployeesChildrenAmount,
  EmployeesExistenceNPWP as ada,
  EmployeesGender,
  EmployeesMarriageStatus,
  EmployeesNPWPStatus,
  EmployeesStatus,
  EmployeesType,
} from '@/types/employees/employees';
import Link from 'next/link';
import { format } from 'path';
import { useRouter } from 'next/navigation';
import useAddEmployee from '@/hooks/employee/useAddEmployee';
import { toast } from '@/components/ui/use-toast';
import { AxiosError } from 'axios';
import { DatePicker } from '@/components/ui/date-picker';

export default function Add() {
  const router = useRouter();

  const form = useForm<EmployeeFormDataType>({
    resolver: zodResolver(EmployeesSchema),
    defaultValues: {
      name: '',
      gender: EmployeesGender.PRIA,
      nik: '',
      start_working_at: new Date(),
      npwp: '',
      // existence_npwp: EmployeesExistenceNPWP.ADA,
      npwp_status: undefined,
      marriage_status: undefined,
      children_amount: undefined,
      employee_status: undefined,
      employee_type: undefined,
    },
  });
  const [existenceNPWP, setExistenceNPWP] = useState(ada.ADA);
  useEffect(() => {
    console.log(form.watch());
  }, [form]);

  //new Date().getFullYear().toString() + '-01-01',
  const formatNPWP = (value: string) => {
    const cleanedValue = value.replace(/\D/g, '');

    let formatted = '';
    for (let i = 0; i < cleanedValue.length && formatted.length < 20; i++) {
      if (i === 2 || i === 5 || i === 8 || i === 12) {
        formatted += '.';
      }
      if (i === 9) {
        formatted += '-';
      }
      formatted += cleanedValue[i];
    }

    return formatted;
  };

  const { mutateAsync: mutateNewEmployee, isPending: isPendingNewEmployee } =
    useAddEmployee();

  const onSubmit = async (data: EmployeeFormDataType) => {
    console.log('mantaps dadada');

    const validatedData = EmployeesSchema.safeParse(data);

    if (!validatedData.success) {
      toast({
        title: 'Kesalahan Input Pengguna',
        description: 'Mohon periksa kembali inputan anda..',
        variant: 'destructive',
      });
      console.log('asdasdsad');
    }

    await mutateNewEmployee(data, {
      onSettled: () => {
        toast({
          title: 'Menambahkan...',
          description: 'Sedang menambahkan data tenaga kerja..',
        });
      },
      onSuccess: () => {
        router.push('/unit/data-master/employees');
        toast({
          title: 'Berhasil',
          description: 'Berhasil menambahkan data tenaga kerja..',
        });
      },
      onError: (error) => {
        toast({
          title: 'Gagal',
          description:
            (error instanceof AxiosError && error.response?.data.message) ??
            'Terjadi kesalahan internal..',
          variant: 'destructive',
        });
      },
    });
  };
  return (
    <Layout>
      <section>
        <header className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-left">
            Tambah Data Tenaga Kerja Unit
          </h1>
          <Link href="/unit/data-master/employees">
            <Button>Kembali</Button>
          </Link>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="border border-gray-300 shadow-md pt-3 mt-6">
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
                          value={formatNPWP(String(field.value))}
                          // disabled={
                          //   existence_npwp === EmployeesExistenceNPWP.ADA
                          // }
                          // disabled={
                          //   form.watch('existence_npwp') ===
                          //   EmployeesExistenceNPWP.TIDAK_ADA
                          // }
                          // placeholder={
                          //   form.watch('existence_npwp') ===
                          //   EmployeesExistenceNPWP.TIDAK_ADA
                          //     ? '00.000.000.0-000.000'
                          //     : '_ _ . _ _ _ . _ _ _ . _ - _ _ _ . _ _ _'
                          // }
                        />
                      </FormControl>
                      <FormControl>
                        <div></div>
                      </FormControl>
                      <FormControl></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <RadioGroup defaultValue="ada" className="grid grid-cols-2">
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
                {/* <FormField
                  control={form.control}
                  name="existence_npwp"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center mb-3">
                      <FormLabel htmlFor={field.name}></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={EmployeesExistenceNPWP.ADA}
                          className="grid grid-cols-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value={EmployeesExistenceNPWP.ADA}
                            />
                            <Label htmlFor="yes">Ada NPWP</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value={EmployeesExistenceNPWP.TIDAK_ADA}
                            />
                            <Label htmlFor="no">Tidak Ada NPWP</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
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
                        Bulan Mulai Bekerja
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
                          date={field.value}
                          setDate={field.onChange}
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
                      <FormLabel htmlFor={field.name}>Status NPWP</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={
                            form.watch('gender') === EmployeesGender.PRIA ||
                            (form.watch('gender') === EmployeesGender.WANITA &&
                              form.watch('marriage_status') ===
                                EmployeesMarriageStatus.BELUM_KAWIN)
                          }
                        >
                          <FormControl className="border border-gray-400">
                            <SelectTrigger>
                              <SelectValue
                                placeholder={
                                  form.watch('gender') === EmployeesGender.PRIA
                                    ? '_ _ _ _ _ _ _ _ _'
                                    : 'Pilih status NPWP'
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
                disabled={isPendingNewEmployee}
              >
                {isPendingNewEmployee
                  ? 'Menambahkan Karyawan...'
                  : 'Tambah Karyawan'}
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </Layout>
  );
}
