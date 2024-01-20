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

interface NetCalculationProps {
  form: ReturnType<typeof useForm<PermanentEmployeeFormData>>;
}

export default function NetCalculation({ form }: NetCalculationProps) {
  return (
    <Card className="border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Perhitungan Neto
      </h1>
      <CardContent>
        <FormField
          control={form.control}
          name="net_calculations.position_allowance"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>Biaya Jabatan</FormLabel>
              <FormControl>
                <Input
                  placeholder="Rp. "
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
          name="net_calculations.annual_fee"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                Iuran Setahun Dibayar Pegawai
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
          name="net_calculations.assurance"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                Premi Setahun Dibayar Pegawai
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
          name="net_calculations.net_income"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                Penghasilan Neto Setahun
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
