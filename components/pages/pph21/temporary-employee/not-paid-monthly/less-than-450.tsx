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

interface LessThan450Props {
  form: ReturnType<typeof useForm<NonPermanentEmployeeNotMonthlyFormData>>;
}

export default function LessThan450({ form }: LessThan450Props) {
  return (
    <Card>
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Upah Harian ≤ 450.000
      </h1>
      <CardContent>
        <div className="grid grid-cols-10">
          <FormField
            control={form.control}
            name="constants.tariff_ter"
            render={({ field }) => (
              <FormItem className="w-full col-span-2">
                <FormLabel htmlFor={field.name}>Tarif TER</FormLabel>
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
          <div className="flex justify-center items-end col-span-1">
            <span className="text-lg mb-2">x</span>
          </div>
          <FormField
            control={form.control}
            name="gross_salary.salary"
            render={({ field }) => (
              <FormItem className="w-full col-span-3">
                <FormLabel htmlFor={field.name}>Upah Harian</FormLabel>
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
          <div className="flex justify-center items-end col-span-1">
            <span className="text-lg mb-2">=</span>
          </div>
          <FormField
            control={form.control}
            name="calculations.pph21_has_npwp_less_then_450"
            render={({ field }) => (
              <FormItem className="w-full col-span-3">
                <FormLabel htmlFor={field.name}>PPh 21</FormLabel>
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
