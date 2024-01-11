import React from 'react';
import InputField from '@/components/Input/input-field';
import { LaborDataType } from '@/types/pph21/labor-data';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  PermanentEmployeeFormData,
  PermanentEmployeeSchema,
} from '@/types/pph21/permanent-employee/permanent-employee';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function LaborData() {
  const form = useForm<PermanentEmployeeFormData>({
    resolver: zodResolver(PermanentEmployeeSchema),
  });
  return (
    <Card className="border border-gray-300 mb-9 pb-3 shadow-md">
      <h1 className="text-center font-bold text-sm pt-3">Data Tenaga kerja</h1>
      <CardContent className="grid grid-cols-2 p-3 gap-x-12 gap-y-8 ">
        <FormField
          control={form.control}
          name="nik"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>
                Nomer Induk Kependudukan (NIK)
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
          name="tax_period"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Masa Pajak</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  placeholder="Masukkan periode pajak"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Nama Panjang</FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status_ptkp"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>
                Status Penghasilan Tidak Kena Pajak (PTKP)
              </FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="npwp"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>
                Nomor Pokok Wajib Pajak (NPWP)
              </FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>
                Katagori Terif Efektif (TER)
              </FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Jenis Kelamin</FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ptkp"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>
                Penghasilan Tidak Kena Pajak (PTKP)
              </FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
    // <div>
    //   <section className="border-black border-2 p-6 my-10 space-y-6">
    //     <header className="bg-[#B8E2F4] p-2 mb-5">
    //       <h1 className="text-center font-semibold text-lg">
    //         Data Tenaga Kerja
    //       </h1>
    //     </header>
    //     <section className="flex gap-6">
    //       <div className="w-full space-y-2">
    //         <InputField
    //           label="Nomer Induk Kependudukan"
    //           placeholder="Masukkan NIK"
    //           name="nik"
    //           type="number"
    //           value={data?.nik || ''}
    //         />
    //         <InputField
    //           label="Nama Lengkap"
    //           placeholder="Masukkan Nama Lengkap"
    //           name="nama_lengkap"
    //           type="text"
    //           value={data?.nama_lengkap || ''}
    //         />
    //         <InputField
    //           label="NPWP"
    //           placeholder="Masukkan NPWP"
    //           name="npwp"
    //           type="number"
    //           value={data?.npwp || ''}
    //         />
    //         <InputField
    //           label="Status PTKP"
    //           placeholder="Masukkan Status PTKP"
    //           name="status_ptkp"
    //           type="text"
    //           value={data?.status_ptkp || ''}
    //         />
    //         <InputField
    //           label="Masa Penghasilan Setahun"
    //           placeholder="Masukkan Masa Penghasilan Setahun"
    //           name="masa_penghasilan_setahun"
    //           type="number"
    //           value={data?.masa_penghasilan_setahun || ''}
    //         />
    //         <InputField
    //           label="Jenis Kelamin"
    //           placeholder="Masukkan Jenis Kelamin"
    //           name="jenis_kelamin"
    //           type="text"
    //           value={data?.jenis_kelamin || ''}
    //         />
    //         <InputField
    //           label="Penghasilan Tidak Kena Pajak"
    //           placeholder="Masukkan Penghasilan Tidak Kena Pajak"
    //           name="penghasilan_tidak_kena_pajak"
    //           type="number"
    //           value={data?.penghasilan_tidak_kena_pajak || ''}
    //         />
    //       </div>
    //     </section>
    //   </section>
    // </div>
  );
}
