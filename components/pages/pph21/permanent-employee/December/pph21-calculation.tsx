import React, { useEffect } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  PermanentEmployeeDecemberFormData,
  PermanentEmployeeFormData,
} from "@/types/pph21/permanent-employee/permanent-employee";
import { useForm } from "react-hook-form";
import FormNumberInput from "@/components/patan-ui/form/form-number-input";

interface PPh21CalculationProps {
  form: ReturnType<typeof useForm<PermanentEmployeeDecemberFormData>>;
}

const hasNpwpTaxableIncomeRules = {
  percentage_5: {
    min: 0,
    max: 60_000_000, // 60 juta
    percentage: 0.05,
  },
  percentage_15: {
    min: 60_000_001,
    max: 250_000_000, // 250 juta
    percentage: 0.15,
  },
  percentage_25: {
    min: 250_000_001,
    max: 500_000_000, // 500 juta
    percentage: 0.25,
  },
  percentage_30: {
    min: 500_000_001,
    max: 4_500_000_000, // 4,5 milyar
    percentage: 0.3,
  },
  percentage_35: {
    min: 4_500_000_001,
    max: Infinity,
    percentage: 0.35,
  },
} as const;

const boundaryKeys = Object.keys(hasNpwpTaxableIncomeRules) as Array<
  keyof typeof hasNpwpTaxableIncomeRules
>;

export default function PPh21Calculation({ form }: PPh21CalculationProps) {
  const taxableIncome = form.watch("pkp_calculations.taxable_income");

  return (
    <Card className=" mt-9 mb-9 pt-6 pb-3 px-3">
      <h1 className="text-center font-bold text-sm mb-3">
        Perhitungan Pajak PPh 21
      </h1>
      <div className="grid grid-cols-2 gap-x-9">
        <Card className="p-3 border border-gray-300">
          <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
            Wajib Pajak Memiliki NPWP
          </h2>
          <p className="my-2 text-red-500">Tarif Pasal 17 ayat (1a) :</p>

          <div className="flex flex-col gap-y-3">
            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={"5%"} className="col-span-2" readOnly />

              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.has_npwp.percentage_5"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.has_npwp.percentage_5_result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>

            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={"15%"} className="col-span-2" readOnly />
              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.has_npwp.percentage_15"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>
              <FormNumberInput
                control={form.control}
                name="pph21_calculations.has_npwp.percentage_15_result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>

            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={"25%"} className="col-span-2" readOnly />
              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.has_npwp.percentage_25"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>
              <FormNumberInput
                control={form.control}
                name="pph21_calculations.has_npwp.percentage_25_result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>

            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={"30%"} className="col-span-2" readOnly />
              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.has_npwp.percentage_30"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>
              <FormNumberInput
                control={form.control}
                name="pph21_calculations.has_npwp.percentage_30_result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>

            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={"35%"} className="col-span-2" readOnly />
              <p className="inline-flex justify-center">x</p>

              <FormNumberInput
                control={form.control}
                name="pph21_calculations.has_npwp.percentage_35"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />

              <p className="inline-flex justify-center">=</p>
              <FormNumberInput
                control={form.control}
                name="pph21_calculations.has_npwp.percentage_35_result"
                variant="inline"
                defaultValue={0}
                className="col-span-4 w-full"
                readonly
                border={false}
              />
            </div>
          </div>
        </Card>

        <Card className="p-3 border border-gray-300 ">
          <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
            Wajib Pajak Tidak Memiliki NPWP
          </h2>
          <p className="my-2 text-red-500">
            Peraturan DJP Nomor: PER-16/PJ/2016 :
          </p>

          <div className="">
            <div className="grid grid-cols-12 items-center gap-x-4">
              <Input value={"20%"} className="col-span-2" readOnly />

              <p className="inline-flex justify-center">x</p>

              <Input className="col-span-4" readOnly />

              <p className="inline-flex justify-center">=</p>

              <Input className="col-span-4" readOnly />
            </div>
          </div>
        </Card>
      </div>
    </Card>
  );
}
