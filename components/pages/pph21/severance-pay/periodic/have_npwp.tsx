import FormNumberInput from '@/components/patan-ui/form/form-number-input';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import React from 'react';
import { useForm } from 'react-hook-form';

interface HaveNPWPProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}

export default function HaveNPWP({ form }: HaveNPWPProps) {
  return (
    <Card className="p-3 border border-gray-300 shadow-md">
      <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
        Wajib Pajak Memiliki NPWP
      </h2>
      <p className="my-2 text-red-500">Tarif Pasal 17 ayat (1a) :</p>
      <div className="flex flex-col gap-y-3">
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

        <div className="grid grid-cols-12 items-center gap-x-4">
          <Input value={'35%'} className="col-span-2" readOnly />
          <p className="inline-flex justify-center">x</p>

          <FormNumberInput
            control={form.control}
            name="pph21_calculations.4.amount"
            variant="inline"
            defaultValue={0}
            className="col-span-4 w-full"
            readonly
            border={false}
          />

          <p className="inline-flex justify-center">=</p>
          <FormNumberInput
            control={form.control}
            name="pph21_calculations.4.result"
            variant="inline"
            defaultValue={0}
            className="col-span-4 w-full"
            readonly
            border={false}
          />
        </div>
      </div>
    </Card>
  );
}
