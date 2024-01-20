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
import { PermanentEmployeeFormData } from '@/types/pph21/permanent-employee/permanent-employee';
import { useForm } from 'react-hook-form';

interface PPh21CalculationProps {
  form: ReturnType<typeof useForm<PermanentEmployeeFormData>>;
}
export default function PPh21Calculation({ form }: PPh21CalculationProps) {
  return (
    <Card className=" mt-9 mb-9 pt-6 pb-3 px-3">
      <h1 className="text-center font-bold text-sm mb-3">
        Perhitungan Pajak PPh 21
      </h1>
      <div className="grid grid-cols-2 gap-x-9">
        <Card className="p-3 border border-gray-300 shadow-md">
          <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
            Wajib Pajak Memiliki NPWP
          </h2>
          <p className="my-2 text-red-500">Tarif Pasal 17 ayat (1a) :</p>
          <div className="space-y-3">
            <div className="grid grid-cols-9">
              <FormField
                control={form.control}
                name="constants.tariff_ter"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        readOnly
                        value={'5%'}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        readOnly
                        value={'15%'}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        readOnly
                        value={'25%'}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        readOnly
                        value={'30%'}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        readOnly
                        value={'35%'}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
        <Card className="p-3 border border-gray-300 shadow-md">
          <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
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
                        value={`${field.value}%`}
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
                name="result.total_salary_dec"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
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
    </Card>
  );
}
