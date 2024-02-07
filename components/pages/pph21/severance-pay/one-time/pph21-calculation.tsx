import React from 'react';
import InputField from '@/components/Input/input-field';
import { PPh21CalculationType } from '@/types/pph21/severance-pay/one-time/pph21-calculation';
import { SeverencePayOneTimeFormData } from '@/types/pph21/severance-pay/severence-pay';
import { useForm } from 'react-hook-form';
import { Card, CardContent } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { formatRupiah } from '@/common/helpers/number-format';

interface PPh21CalculationProps {
  form: ReturnType<typeof useForm<SeverencePayOneTimeFormData>>;
}
export default function SeverencePayOneTimePPh21Calculation({
  form,
}: PPh21CalculationProps) {
  return (
    <Card className=" mt-9 mb-9 pt-6 pb-3 px-3">
      <h1 className="text-center font-bold text-sm mb-3">
        Perhitungan Pajak PPh 21
      </h1>
      <CardContent>
        <p className="my-2 text-red-500">
          Peraturan Pemerintah No 68 Tahun 2009
        </p>
        <div className="space-y-3">
          <div className="grid grid-cols-9">
            <FormField
              control={form.control}
              name="constants.tariff_0_percent"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={0 + '%'}
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
              name="calculations.pph21_0_percent"
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
              name="calculations.total_pph21_0_percent"
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
              name="constants.tariff_5_percent"
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
              name="calculations.pph21_5_percent"
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
              name="calculations.total_pph21_5_percent"
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
              name="constants.tariff_15_percent"
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
              name="calculations.pph21_15_percent"
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
              name="calculations.total_pph21_15_percent"
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
              name="constants.tariff_25_percent"
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
              name="calculations.pph21_25_percent"
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
              name="calculations.total_pph21_25_percent"
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
      </CardContent>
    </Card>
  );
}
