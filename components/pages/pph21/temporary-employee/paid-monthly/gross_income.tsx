import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { useForm } from 'react-hook-form';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import FormNumberInput from '@/components/patan-ui/form/form-number-input';

interface TemporaryEmployeeGrossIncomeProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}
export default function TemporaryEmployeeMonthlyGrossIncome({
  form,
}: TemporaryEmployeeGrossIncomeProps) {
  const { control } = form;
  return (
    <Card className="col-span-4 border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Penghasilan Bruto
      </h1>
      <CardContent>
        <FormNumberInput
          control={control}
          name="gross_salary.daily_salary"
          label="Penghasilan Sehari"
          variant="inline"
          defaultValue={0}
          placeholder="Penghasilan Sehari"
        />
        <FormNumberInput
          control={control}
          name="gross_salary.working_days"
          label="Jumlah Hari Kerja Sebulan"
          variant="inline"
          defaultValue={0}
          placeholder="Jumlah Hari Kerja Sebulan"
        />
        <FormNumberInput
          control={control}
          name="gross_salary.monthly_salary"
          label="Penghasilan Sebulan"
          variant="inline"
          defaultValue={0}
          placeholder="Penghasilan Sebulan"
        />
      </CardContent>
    </Card>
  );
}
