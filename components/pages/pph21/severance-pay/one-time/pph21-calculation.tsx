import { formatRupiah } from '@/common/helpers/number-format';
import FormNumberInput from '@/components/patan-ui/form/form-number-input';
import { Card, CardContent } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import { useForm } from 'react-hook-form';

interface PPh21CalculationProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}
export default function SeverencePayOneTimePPh21Calculation({
  form,
}: PPh21CalculationProps) {
  return (
    <Card className=" mt-9 mb-9 pt-6 pb-3 px-3">
      <h1 className="text-center font-bold text-sm mb-3">
        Perhitungan Pajak PPh 21
      </h1>
      <CardContent>
        <p className="my-2 text-red-500">
          Peraturan Pemerintah No 68 Tahun 2009
        </p>
        <div className="space-y-3">
          <div className="grid grid-cols-12 items-center gap-x-4">
            <Input value={'5%'} className="col-span-2" readOnly />

            <p className="inline-flex justify-center">x</p>

            <FormNumberInput
              control={form.control}
              name="pph21_calculations.0.amount"
              variant="inline"
              defaultValue={0}
              className="col-span-4 w-full"
              readonly
              border={false}
            />

            <p className="inline-flex justify-center">=</p>

            <FormNumberInput
              control={form.control}
              name="pph21_calculations.0.result"
              variant="inline"
              defaultValue={0}
              className="col-span-4 w-full"
              readonly
              border={false}
            />
          </div>

          <div className="grid grid-cols-12 items-center gap-x-4">
            <Input value={'15%'} className="col-span-2" readOnly />
            <p className="inline-flex justify-center">x</p>

            <FormNumberInput
              control={form.control}
              name="pph21_calculations.1.amount"
              variant="inline"
              defaultValue={0}
              className="col-span-4 w-full"
              readonly
              border={false}
            />

            <p className="inline-flex justify-center">=</p>
            <FormNumberInput
              control={form.control}
              name="pph21_calculations.1.result"
              variant="inline"
              defaultValue={0}
              className="col-span-4 w-full"
              readonly
              border={false}
            />
          </div>

          <div className="grid grid-cols-12 items-center gap-x-4">
            <Input value={'25%'} className="col-span-2" readOnly />
            <p className="inline-flex justify-center">x</p>

            <FormNumberInput
              control={form.control}
              name="pph21_calculations.2.amount"
              variant="inline"
              defaultValue={0}
              className="col-span-4 w-full"
              readonly
              border={false}
            />

            <p className="inline-flex justify-center">=</p>
            <FormNumberInput
              control={form.control}
              name="pph21_calculations.2.result"
              variant="inline"
              defaultValue={0}
              className="col-span-4 w-full"
              readonly
              border={false}
            />
          </div>

          <div className="grid grid-cols-12 items-center gap-x-4">
            <Input value={'30%'} className="col-span-2" readOnly />
            <p className="inline-flex justify-center">x</p>

            <FormNumberInput
              control={form.control}
              name="pph21_calculations.3.amount"
              variant="inline"
              defaultValue={0}
              className="col-span-4 w-full"
              readonly
              border={false}
            />

            <p className="inline-flex justify-center">=</p>
            <FormNumberInput
              control={form.control}
              name="pph21_calculations.3.result"
              variant="inline"
              defaultValue={0}
              className="col-span-4 w-full"
              readonly
              border={false}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
