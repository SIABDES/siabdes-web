import { Card, CardContent } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NonPermanentEmployeeNotMonthlyFormData } from '@/types/pph21/temporary-employee/temporary-employee';
import React from 'react';
import { useForm } from 'react-hook-form';

interface TaxNonNPWPProps {
  form: ReturnType<typeof useForm<NonPermanentEmployeeNotMonthlyFormData>>;
}

export default function TaxNonNPWP({ form }: TaxNonNPWPProps) {
  return (
    <Card className="col-span-2 mt-6">
      <CardContent>
        <h2 className="text-center font-medium text-sm mt-3 mb-3 py-2 bg-blue-200 rounded-md w-80 mx-auto">
          Wajib Pajak Tidak Memiliki NPWP
        </h2>
        <div className="grid grid-cols-12 pt-3">
          <p className="items-center mt-1 text-red-500 col-span-4">
            Peraturan DJP Nomor: PER-16/PJ/2016
          </p>
          <FormField
            control={form.control}
            name="constants.tariff_tax_non_npwp"
            render={({ field }) => (
              <FormItem className="w-full col-span-2">
                <FormControl>
                  <Input
                    className="border border-gray-400"
                    {...field}
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-end">
            <span className="text-lg mb-2">x</span>
          </div>
          <FormField
            control={form.control}
            name="gross_salary.salary"
            render={({ field }) => (
              <FormItem className="w-full col-span-2">
                <FormControl>
                  <Input
                    className="border border-gray-400"
                    {...field}
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-end">
            <span className="text-lg mb-2">=</span>
          </div>
          <FormField
            control={form.control}
            name="calculations.pph21_non_npwp"
            render={({ field }) => (
              <FormItem className="w-full col-span-2">
                <FormControl>
                  <Input
                    className="border border-gray-400"
                    {...field}
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
