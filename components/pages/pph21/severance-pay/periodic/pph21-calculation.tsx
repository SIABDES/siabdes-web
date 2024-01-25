import React from 'react';
import { Card } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SeverencePayPeriodicFormData } from '@/types/pph21/severance-pay/severence-pay';
import { useForm } from 'react-hook-form';
import HaveNPWP from './have_npwp';
import NotHaveNPWP from './not_have_npwp';

interface PPh21CalculationProps {
  form: ReturnType<typeof useForm<SeverencePayPeriodicFormData>>;
}
export default function SeverencePayPeriodicPPh21Calculation({
  form,
}: PPh21CalculationProps) {
  return (
    <Card className=" mt-9 mb-9 pt-6 pb-3 px-3">
      <h1 className="text-center font-bold text-sm mb-3">
        Perhitungan Pajak PPh 21
      </h1>
      <div className="grid grid-cols-2 gap-x-9">
        <HaveNPWP form={form} />
        <NotHaveNPWP form={form} />
      </div>
    </Card>
  );
}
