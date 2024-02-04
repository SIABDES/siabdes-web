import React from 'react';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { NotEmployeeFormData } from '@/types/pph21/not-employee/not-employee';
import { formatRupiah } from '@/common/helpers/number-format';

export default function NotEmployeePPh21Calculation({
  form,
}: {
  form: ReturnType<typeof useForm<NotEmployeeFormData>>;
}) {
  return (
    <div>
      <Card className="p-3 border border-gray-300 shadow-md">
        <h1 className="text-center font-bold text-sm mb-3">
          Perhitungan Pajak PPh 21
        </h1>
        <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
          Wajib Pajak Memiliki NPWP
        </h2>
        <p className="my-2">Tarif Pasal 17 ayat (1a) :</p>
        <div className="space-y-3">
          <div className="grid grid-cols-9">
            <FormField
              control={form.control}
              name="constants.tariff_chapter_17_5_percent"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={field.value + '%'}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">x</span>
            </div>
            <FormField
              control={form.control}
              name="calculations.pph21_chapter_17_5_percent"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">=</span>
            </div>
            <FormField
              control={form.control}
              name="calculations.total_pph21_chapter_17_5_percent"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-9">
            <FormField
              control={form.control}
              name="constants.tariff_chapter_17_15_percent"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={field.value + '%'}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">x</span>
            </div>
            <FormField
              control={form.control}
              name="calculations.pph21_chapter_17_15_percent"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">=</span>
            </div>
            <FormField
              control={form.control}
              name="calculations.total_pph21_chapter_17_15_percent"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-9">
            <FormField
              control={form.control}
              name="constants.tariff_chapter_17_25_percent"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={field.value + '%'}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">x</span>
            </div>
            <FormField
              control={form.control}
              name="calculations.pph21_chapter_17_25_percent"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">=</span>
            </div>
            <FormField
              control={form.control}
              name="calculations.total_pph21_chapter_17_25_percent"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-9">
            <FormField
              control={form.control}
              name="constants.tariff_chapter_17_30_percent"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={field.value + '%'}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">x</span>
            </div>
            <FormField
              control={form.control}
              name="calculations.pph21_chapter_17_30_percent"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">=</span>
            </div>
            <FormField
              control={form.control}
              name="calculations.total_pph21_chapter_17_30_percent"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-9">
            <FormField
              control={form.control}
              name="constants.tariff_chapter_17_35_percent"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={field.value + '%'}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">x</span>
            </div>
            <FormField
              control={form.control}
              name="calculations.pph21_chapter_17_35_percent"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">=</span>
            </div>
            <FormField
              control={form.control}
              name="calculations.total_pph21_chapter_17_35_percent"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto mt-6">
          Wajib Pajak Tidak Memiliki NPWP
        </h2>
        <p className="my-2">Peraturan DJP Nomor: PER-16/PJ/2016 :</p>
        <div className="space-y-3">
          <div className="grid grid-cols-9">
            <FormField
              control={form.control}
              name="constants.tariff_tax_non_npwp"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={field.value + '%'}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">x</span>
            </div>
            <FormField
              control={form.control}
              // name="calculations.total_pph21_chapter_17_30_percent"
              name="calculations.pph21_non_npwp"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-end col-span-1">
              <span className="text-lg mb-2">=</span>
            </div>
            <FormField
              control={form.control}
              // name="calculations.pph21_non_npwp"
              name="calculations.total_pph21_non_npwp"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(field.value)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
