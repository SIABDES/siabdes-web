import { Card } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import React from 'react';
import { PPh21OtherNonEmployeeSupervisorFormData } from '@/types/pph21/pph21/other-pph21';
import FormNumberInput from '@/components/patan-ui/form/form-number-input';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';

interface SalaryProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}

export default function PPh21OtherNonEmployeeSupervisorSalary({
  form,
}: SalaryProps) {
  const { control } = form;
  return (
    <Card className="w-1/2 mb-9 mt-12">
      <FormNumberInput
        control={control}
        name="gross_salary.salary"
        label="Jumlah Pesangon"
        variant="inline"
        defaultValue={0}
        placeholder="Penghasilan Sehari"
        className="px-6 py-3"
      />
      {/* <FormNumberInput
        control={form.control}
        name="gross_salary.salary"
        label="Upah Harian"
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
    </Card>
  );
}
