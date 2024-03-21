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
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import FormNumberInput from '@/components/patan-ui/form/form-number-input';

export default function NotEmployeePPh21Calculation({
  form,
}: {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}) {
  return (
    <div>
      <Card className="pt-6 pb-3 px-3 border border-gray-300">
        <h1 className="text-center font-bold text-sm mb-3">
          Perhitungan Pajak PPh 21
        </h1>
        <Card className="p-3 border border-gray-300">
          <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
            Wajib Pajak Memiliki NPWP
          </h2>
          <p className="my-2 text-red-500">Tarif Pasal 17 ayat (1a) :</p>

          <div className="flex flex-col gap-y-3">
            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={'5%'} className="col-span-2" readOnly />

              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.0.amount"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.0.result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>

            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={'15%'} className="col-span-2" readOnly />
              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.1.amount"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>
              <FormNumberInput
                control={form.control}
                name="pph21_calculations.1.result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>

            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={'25%'} className="col-span-2" readOnly />
              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.2.amount"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>
              <FormNumberInput
                control={form.control}
                name="pph21_calculations.2.result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>

            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={'30%'} className="col-span-2" readOnly />
              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.3.amount"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>
              <FormNumberInput
                control={form.control}
                name="pph21_calculations.3.result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>

            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={'35%'} className="col-span-2" readOnly />
              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.4.amount"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>
              <FormNumberInput
                control={form.control}
                name="pph21_calculations.4.result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>
          </div>
        </Card>

        <Card className="mt-9 p-3 border border-gray-300 ">
          <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
            Wajib Pajak Tidak Memiliki NPWP
          </h2>
          <p className="my-2 text-red-500">
            Peraturan DJP Nomor: PER-16/PJ/2016 :
          </p>

          <div className="">
            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={'120%'} className="col-span-2" readOnly />

              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.5.amount"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.5.result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>
          </div>
        </Card>
      </Card>
      {/* <Card className="p-3 border border-gray-300 shadow-md">
        <h1 className="text-center font-bold text-sm mb-3">
          Perhitungan Pajak PPh 21
        </h1>
        <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
          Wajib Pajak Memiliki NPWP
        </h2>
        <p className="my-2 text-red-500">Tarif Pasal 17 ayat (1a) :</p>
        <div className="space-y-3">
          <div className="grid grid-cols-9">
            <FormField
              control={form.control}
              name="pph21_calculations.0.tariff_percentage"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={5 + '%'}
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
                      value={15 + '%'}
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
                      value={25 + '%'}
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
                      value={30 + '%'}
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
                      value={35 + '%'}
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
        <p className="my-2 text-red-500">
          Peraturan DJP Nomor: PER-16/PJ/2016 :
        </p>
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
      </Card> */}
    </div>
  );
}
