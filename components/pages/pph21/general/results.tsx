import { Card } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PermanentEmployeeFormData } from '@/types/pph21/permanent-employee/permanent-employee';
import React from 'react';
import { useForm } from 'react-hook-form';

interface ResultsProps {
  form: ReturnType<typeof useForm<PermanentEmployeeFormData>>;
}

export default function Results({ form }: ResultsProps) {
  return (
    <div className="grid grid-cols-3 gap-x-9 mt-9">
      <Card>
        <FormField
          control={form.control}
          name="ptkp"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
              <FormLabel htmlFor={field.name}>Jumlah Penghasilan</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400 bg-[#E5F5FC]"
                  {...field}
                  placeholder="Rp"
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Card>
      <Card>
        <FormField
          control={form.control}
          name="ptkp"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
              <FormLabel htmlFor={field.name}>Jumlah PPh 21</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400 bg-[#E5F5FC]"
                  {...field}
                  placeholder="Rp"
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Card>
      <Card>
        <FormField
          control={form.control}
          name="ptkp"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
              <FormLabel htmlFor={field.name}>Penerimaan Bersih</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400 bg-[#E5F5FC]"
                  {...field}
                  placeholder="Rp"
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Card>
    </div>
  );
}
