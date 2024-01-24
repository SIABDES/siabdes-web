'use client';

import React, { ChangeEvent, useState } from 'react';
import Layout from '@/components/layout/layout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

import {
  Select,
  SelectContent,
  SelectItem,
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
import {
  EmployeeFormDataType,
  UpdateEmployeeFormData,
  UpdateEmployeeRequest,
} from '@/types/employees/dto';
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
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { DatePicker } from '@/components/ui/date-picker';
import { string } from 'zod';
import { Value } from '@radix-ui/react-select';
import { UndoIcon } from 'lucide-react';
import useGetEmployeeDetails from '@/hooks/employee/useGetEmployeeDetails';
import { useEditJournal } from '@/hooks/journals/useEditJournal';
import useEditEmployee from '@/hooks/employee/useEditEmployee';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

interface EditEmployeeFormProps {
  params: { employee_id: string };
  existenceNPWP: string;
}

export default function Edit({ params }: { params: { employee_id: string } }) {
  const { toast } = useToast();
  const router = useRouter();
  const [existenceNPWP, setExistenceNPWP] = useState<string | undefined>('ada');

  const form = useForm<UpdateEmployeeFormData>({
    resolver: zodResolver(UpdateEmployeeRequest),
  });

  const {
    data: details,
    isLoading: isDetailsLoading,
    refetch: refetchDetails,
  } = useGetEmployeeDetails({ params });

  const { mutateAsync: mutateEditEmployee, isPending: isPendingEditEmployee } =
    useEditEmployee({ employee_id: params.employee_id });

  const onSubmit = async (data: EmployeeFormDataType) => {
    const employeeData = {
      ...data,
      npwp: existenceNPWP === 'tidak' ? '' : data.npwp,
    };
    // try {
    //   await mutateEditEmployee(employeeData);
    //   toast.success('Berhasil mengubah data tenaga kerja');
    //   router.push(
    //     `/unit/data-master/employees/${params.employee_id}/details`
    //   );
    // } catch (error) {
    //   const err = error as AxiosError;
    //   if (err.response?.status === 422) {
    //     toast.error('Data yang dimasukkan tidak valid');
    //   } else {
    //     toast.error('Terjadi kesalahan');
    //   }
    // }
    const validatedData = await form.trigger();
  };

  return (
    <Layout>
      <section>
        <header>
          <Link
            href={`/unit/data-master/employees/${params.employee_id}/details`}
            className="w-fit"
          >
            <Button variant={'ghost'}>
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
                          placeholder={
                            existenceNPWP === 'ada'
                              ? '_ _ . _ _ _ . _ _ _ - _ . _ _ _ . _ _ _'
                              : '00.000.000-0.000.000'
                          }
                          // value={
                          //   existenceNPWP === 'tidak'
                          //     ? undefined
                          //     : formatNPWP(String(field.value))
                          // }
                          value={
                            existenceNPWP === 'tidak' ? '' : form.watch('npwp')
                          }
                          disabled={existenceNPWP === 'tidak'}
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
                          className="w-full border border-gray-400"
                          placeholder="Pilih bulan mulai bekerja"
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
            {/* <div className="flex justify-end mt-10 mb-10">
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                // onClick={form.handleSubmit(onSubmit)}
                // disabled={isPendingNewEmployee}
              >
                {isPendingNewEmployee
                  ? 'Menambahkan Karyawan...'
                  : 'Tambah Karyawan'}
              </Button>
            </div> */}
          </form>
        </Form>
      </section>
    </Layout>
  );
}
