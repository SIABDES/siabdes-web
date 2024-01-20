import React from 'react';

import {
  Form,
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
import LaborData from '../../general/labor-data';
import Results from '../../general/results';
import GrossIncome from './gross_income';
import PPh21Calculation from './pph21-calculation';

interface PermanentEmployeeJanNovProps {
  form: ReturnType<typeof useForm<PermanentEmployeeFormData>>;
  onSubmit: (data: PermanentEmployeeFormData) => void;
}

export default function PermanentEmployeeJanNov({
  form,
  onSubmit,
}: PermanentEmployeeJanNovProps) {
  return (
    <Card className="bg-white border border-gray-300 p-3 rounded-xl mt-5 pb-5">
      <h1 className="mt-3 mb-4 text-center font-bold text-lg">
        Pegawai Tetap Bulanan Masa Pajak Januari - November
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}></form>
        <LaborData form={form} />
        <div className="grid grid-cols-9 gap-x-12 gap-y-8 mt-9">
          <GrossIncome form={form} />
          <PPh21Calculation form={form} />
        </div>
        <Results
          form={form}
          total_salary="result.total_salary"
          total_pph21="result.total_pph21"
          net_receipts="result.net_receipts"
        />
      </Form>
    </Card>
  );
}
