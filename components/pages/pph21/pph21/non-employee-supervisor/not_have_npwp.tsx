import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import FormNumberInput from '@/components/patan-ui/form/form-number-input';

interface NotHaveNPWPProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}

export default function NotHaveNPWP({ form }: NotHaveNPWPProps) {
  return (
    <Card className="p-3 border border-gray-300 shadow-md">
      <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
        Wajib Pajak Tidak Memiliki NPWP
      </h2>
      <p className="my-2 text-red-500">Peraturan DJP Nomor: PER-16/PJ/2016 :</p>
      <div className="">
        <div className="grid grid-cols-12 items-center gap-x-4">
          <Input value={'120%'} className="col-span-2" readOnly />

          <p className="inline-flex justify-center">x</p>

          <FormNumberInput
            control={form.control}
            name="pph21_calculations.5.amount"
            variant="inline"
            defaultValue={0}
            className="col-span-4 w-full"
            readonly
            border={false}
          />

          <p className="inline-flex justify-center">=</p>

          <FormNumberInput
            control={form.control}
            name="pph21_calculations.5.result"
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
