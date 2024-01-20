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

interface PKPCalculationProps {
  form: ReturnType<typeof useForm<PermanentEmployeeFormData>>;
}

export default function PKPCalculation({ form }: PKPCalculationProps) {
  return (
    <Card className="border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Perhitungan Pajak Kena Pajak (PKP)
      </h1>
      <CardContent>
        <FormField
          control={form.control}
          name="pkp_calculations.non_taxable_income"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                Penghasilan Tidak Kena Pajak
              </FormLabel>
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
          name="pkp_calculations.taxable_income"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                Penghasilan Kena Pajak Setahun
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
