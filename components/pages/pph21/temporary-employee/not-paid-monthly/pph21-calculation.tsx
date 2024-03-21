import { Card } from '@/components/ui/card';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import { useForm } from 'react-hook-form';
import LessThan450 from './less-than-450';
import MoreThan2500 from './more-than-2500';
import MoreThan450 from './more-than-450';
import TaxNonNPWP from './tax-non-npwp';

interface TemporaryEmployeeNotMonthlyPPh21CalculationPro {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
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
