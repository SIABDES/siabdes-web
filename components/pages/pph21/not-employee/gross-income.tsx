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
import {
  formatRupiah,
  reverseFormat,
  reverseFormatRupiah,
} from '@/common/helpers/number-format';
import FormNumberInput from '@/components/patan-ui/form/form-number-input';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';

interface NotEmployeeGrossIncomeProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}
export default function NotEmployeeGrossIncome({
  form,
}: NotEmployeeGrossIncomeProps) {
  return (
    <Card className="p-3 border border-gray-300 shadow-md">
      <h2 className="text-center font-bold text-sm py-3  rounded-md w-80 mx-auto">
        Penghasilan Bruto
      </h2>
      <div className="space-y-3 mt-3">
        {/* <FormField
          control={form.control}
          name="gross_salary.salary"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>Penghasilan Bruto</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  {...field}
                  value={formatRupiah(field.value)}
                  onChange={(e) => {
                    const value = reverseFormat(e.target.value);
                    field.onChange(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* <FormNumberInput
          control={form.control}
          name="gross_salary.salary"
          label="Penghasilan Bruto"
          transform={{
            input: (value) => {
              return isNaN(value) ? '' : formatRupiah(value);
            },
            output: (event) => {
              const unformatted = event.target.value;

              const value = reverseFormatRupiah(unformatted);

              const output = Number(value);

              return isNaN(output) ? 0 : output;
            },
          }}
        /> */}
        <FormNumberInput
          control={form.control}
          name="gross_salary.salary"
          label="Penghasilan Bruto"
          variant="horizontal"
          defaultValue={0}
          placeholder="Penghasilan Bruto"
        />
      </div>
      <h2 className="text-center font-bold text-sm py-2  rounded-md w-80 mx-auto mt-12">
        Penghasilan Kena Pajak
      </h2>
      <div className="grid grid-cols-12 items-center gap-x-4">
        <Input
          value={'50%'}
          className="col-span-2 border border-gray-400"
          readOnly
        />
        <p className="inline-flex justify-center">x</p>

        <FormNumberInput
          control={form.control}
          name="pkp_calculations.amount"
          variant="inline"
          defaultValue={0}
          className="col-span-4 w-full"
          readonly
          border={true}
        />

        <p className="inline-flex justify-center">=</p>
        <FormNumberInput
          control={form.control}
          name="pkp_calculations.result"
          variant="inline"
          defaultValue={0}
          className="col-span-4 w-full"
          readonly
          border={true}
        />
      </div>
    </Card>
  );
}
