import { Card } from '@/components/ui/card';
import React from 'react';
import { useForm } from 'react-hook-form';
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
    </Card>
  );
}
