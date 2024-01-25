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
import MoreThan450 from './more-than-450';
import LessThan450 from './less-than-450';
import MoreThan2500 from './more-than-2500';
import Tax from '@/app/unit/tax/page';
import TaxNonNPWP from './tax-non-npwp';

interface TemporaryEmployeeNotMonthlyPPh21CalculationPro {
  form: ReturnType<typeof useForm<NonPermanentEmployeeNotMonthlyFormData>>;
}

export default function TemporaryEmployeeNotMonthlyPPh21Calculation({
  form,
}: TemporaryEmployeeNotMonthlyPPh21CalculationPro) {
  return (
    <Card>
      <h1 className="text-center font-bold text-sm pt-3">Perhitungan PPh 21</h1>
      <div className="grid grid-cols-2 gap-x-9 mt-6 p-3">
        <div className="grid gap-y-6">
          <LessThan450 form={form} />
          <MoreThan450 form={form} />
        </div>
        <MoreThan2500 form={form} />
        <TaxNonNPWP form={form} />
      </div>
    </Card>
  );
}
