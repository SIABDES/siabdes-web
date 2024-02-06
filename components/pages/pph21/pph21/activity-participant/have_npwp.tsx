import { formatRupiah } from '@/common/helpers/number-format';
import { Card } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PPh21OtherActivityParticipantFormData } from '@/types/pph21/pph21/other-pph21';
import { SeverencePayPeriodicFormData } from '@/types/pph21/severance-pay/severence-pay';
import { format } from 'path';
import React from 'react';
import { useForm } from 'react-hook-form';

interface HaveNPWPProps {
  form: ReturnType<typeof useForm<PPh21OtherActivityParticipantFormData>>;
}

export default function HaveNPWP({ form }: HaveNPWPProps) {
  return (
    <Card className="p-3 border border-gray-300 shadow-md">
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
    </Card>
  );
}
