import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import {
  formatRupiah,
  leadingZeroTrimmer,
} from '@/common/helpers/number-format';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import FormNumberInput from '@/components/patan-ui/form/form-number-input';
import { Label } from '@/components/ui/label';

interface TemporaryEmployeePPh21CalculationProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}
export default function TemporaryEmployeeMonthlyPPh21Calculation({
  form,
}: TemporaryEmployeePPh21CalculationProps) {
  const noNpwpTariff = form.watch('pph21_calculations.1.tariff_percentage');
  const npwpTariff = form.watch('pph21_calculations.0.tariff_percentage');

  const displayNoNpwpTariff = useMemo(
    () => noNpwpTariff * 100 + '%',
    [noNpwpTariff]
  );
  const displayNpwpTariff = useMemo(
    () => leadingZeroTrimmer.format(npwpTariff * 100) + '%',
    [npwpTariff]
  );

  return (
    <Card className="col-span-5 border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm pt-3">Perhitungan PPh 21</h1>
      <CardContent>
        <h2 className="text-center font-medium text-sm mt-9 mb-3 py-2 bg-blue-200 rounded-md w-80 mx-auto">
          Wajib Pajak Memiliki NPWP
        </h2>
        <p className="text-red-500">Peraturan Pemerintah No 58 Tahun 2023</p>
        <div className="grid grid-cols-9">
          <div className="space-y-2">
            <Label>Tarif TER</Label>
            <Input
              value={displayNpwpTariff}
              className="border border-gray-400"
              readOnly
            />
          </div>

          <div className="flex justify-center items-end col-span-1">
            <span className="text-lg mb-2">x</span>
          </div>

          <FormNumberInput
            control={form.control}
            label="Penghasilan Bruto"
            name="pph21_calculations.0.amount"
            className="col-span-3"
            readonly
          />

          <div className="flex justify-center items-end col-span-1">
            <span className="text-lg mb-2">=</span>
          </div>

          <FormNumberInput
            control={form.control}
            label="PPh 21"
            name="pph21_calculations.0.result"
            className="col-span-3"
            readonly
          />
        </div>
        <h2 className="text-center font-medium text-sm mt-9 mb-3 py-2 bg-blue-200 rounded-md w-80 mx-auto">
          Wajib Pajak Tidak Memiliki NPWP
        </h2>
        <p className="text-red-500 mb-3">Peraturan DJP Nomor: PER-16/PJ/2016</p>
        <div className="grid grid-cols-9">
          <Input
            value={displayNoNpwpTariff}
            className="border border-gray-400"
            readOnly
          />

          <div className="flex justify-center items-end col-span-1">
            <span className="text-lg mb-2">x</span>
          </div>

          <FormNumberInput
            control={form.control}
            name="pph21_calculations.1.amount"
            className="col-span-3"
            readonly
          />

          <div className="flex justify-center items-end col-span-1">
            <span className="text-lg mb-2">=</span>
          </div>

          <FormNumberInput
            control={form.control}
            name="pph21_calculations.1.result"
            className="col-span-3"
            readonly
          />
        </div>
      </CardContent>
    </Card>
  );
}
