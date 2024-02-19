import FormNumberInput from '@/components/patan-ui/form/form-number-input';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import { useForm } from 'react-hook-form';

interface MoreThan450Props {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}
export default function MoreThan450({ form }: MoreThan450Props) {
  return (
    <Card>
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Upah Harian {`>`} 450.000 - 2.500.000
      </h1>
      <CardContent>
        <div className="grid grid-cols-12 items-center gap-x-4">
          <div className="col-span-2 space-y-3">
            <p className="text-sm font-medium">Tarif TER</p>
            <Input value={'0.5%'} readOnly />
          </div>

          <p className="inline-flex justify-center mt-6">x</p>

          <FormNumberInput
            control={form.control}
            name="pkp_calculations.amount"
            variant="horizontal"
            label="Upah Harian"
            defaultValue={0}
            className="col-span-4 w-full"
            readonly
            border={false}
          />

          <p className="inline-flex justify-center mt-6">=</p>

          <FormNumberInput
            control={form.control}
            name="pkp_calculations.result"
            variant="horizontal"
            defaultValue={0}
            label="PPh 21"
            className="col-span-4 w-full"
            readonly
            border={false}
          />
        </div>
      </CardContent>
    </Card>
  );
}
