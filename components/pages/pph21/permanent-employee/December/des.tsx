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
import GrossIncomeDes from './gross-income';
import NetCalculation from './net-calculation';
import PKPCalculation from './pkp-calculation';
import PPh21Calculation from './pph21-calculation';
import PPh21CutInDecember from './pph21-cut-in-december';

interface PermanentEmployeeDesProps {
  form: ReturnType<typeof useForm<PermanentEmployeeFormData>>;
  onSubmit: (data: PermanentEmployeeFormData) => void;
}
export default function PermanentEmployeeDes({
  form,
  onSubmit,
}: PermanentEmployeeDesProps) {
  return (
    <Card className="bg-white border border-gray-300 p-3 rounded-xl mt-5 pb-5">
      <h1 className="mt-3 mb-4 text-center font-bold text-lg">
        Pegawai Tetap Bulanan Masa Desember
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}></form>
        <LaborData form={form} />
        <div className="grid grid-cols-2 gap-x-9">
          <GrossIncomeDes form={form} />
          <div className="space-y-9">
            <NetCalculation form={form} />
            <PKPCalculation form={form} />
          </div>
        </div>
        <PPh21Calculation form={form} />
        <PPh21CutInDecember form={form} />
        <Results
          form={form}
          total_salary="result.total_salary_dec"
          total_pph21="result.total_pph21_dec"
          net_receipts="result.net_receipts_dec"
        />
      </Form>
    </Card>
  );
}
