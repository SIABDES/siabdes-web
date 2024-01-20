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

interface PPh21CutInDecemberProps {
  form: ReturnType<typeof useForm<PermanentEmployeeFormData>>;
}
export default function PPh21CutInDecember({ form }: PPh21CutInDecemberProps) {
  return (
    <Card className="border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        PPh 21 Yang Harus Dipotong Di Bulan Desember
      </h1>
      <CardContent>
        <FormField
          control={form.control}
          name="pph21_cut_in_december.pph21_payable"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                PPh 21 Terutang Setahun
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Rp"
                  className="border border-gray-400"
                  {...field}
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pph21_cut_in_december.pph21_deducted_until_november"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                PPh 21 Yang Telah Dipotong Sampai Dengan Bulan November
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  {...field}
                  placeholder="Rp"
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pph21_cut_in_december.pph21_deducted_until_december"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                PPh 21 Yang Telah Dipotong Sampai Dengan Bulan Desember
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  {...field}
                  placeholder="Rp"
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
