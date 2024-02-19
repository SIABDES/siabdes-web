import FormNumberInput from '@/components/patan-ui/form/form-number-input';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import { useForm } from 'react-hook-form';

interface TaxNonNPWPProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}

export default function TaxNonNPWP({ form }: TaxNonNPWPProps) {
  return (
    <Card className="col-span-2 mt-6">
      <CardContent>
        <h2 className="text-center font-medium text-sm mt-3 mb-3 py-2 bg-blue-200 rounded-md w-80 mx-auto">
          Wajib Pajak Tidak Memiliki NPWP
        </h2>
        <div className="grid grid-cols-12 items-center gap-x-4">
          <p className="items-center mt-1 text-red-500 col-span-4">
            Peraturan DJP Nomor: PER-16/PJ/2016
          </p>
          <Input value={'120%'} readOnly />

          <p className="inline-flex justify-center">x</p>

          <FormNumberInput
            control={form.control}
            name="pph21_calculations.5.amount"
            variant="inline"
            defaultValue={0}
            className="col-span-3 w-full"
            readonly
            border={false}
          />

          <p className="inline-flex justify-center">=</p>

          <FormNumberInput
            control={form.control}
            name="pph21_calculations.5.result"
            variant="inline"
            defaultValue={0}
            className="col-span-2 w-full"
            readonly
            border={false}
          />
        </div>
      </CardContent>
    </Card>
  );
}
