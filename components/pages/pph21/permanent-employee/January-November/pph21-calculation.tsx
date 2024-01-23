import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PermanentEmployeeBeforeDecemberFormData } from "@/types/pph21/permanent-employee/permanent-employee";
import { useForm } from "react-hook-form";

interface PPh21CalculationProps {
  form: ReturnType<typeof useForm<PermanentEmployeeBeforeDecemberFormData>>;
}

export default function PPh21Calculation({ form }: PPh21CalculationProps) {
  return (
    <Card className="col-span-5 border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm pt-3">Perhitungan PPh 21</h1>
      <CardContent>
        <h2 className="text-center font-medium text-sm mt-9 mb-3 py-2 bg-blue-200 rounded-md w-80 mx-auto">
          Wajib Pajak Memiliki NPWP
        </h2>
        <p className="text-red-500">Peraturan Pemerintah No 58 Tahun 2023</p>
        <div className="grid grid-cols-9">
          <FormField
            control={form.control}
            name="constants.tariff_ter"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Tarif TER (%)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="border border-gray-400"
                    {...field}
                    value={field.value}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-end col-span-1">
            <span className="text-lg mb-2">x</span>
          </div>
          <FormField
            control={form.control}
            name="result.total_salary"
            render={({ field }) => (
              <FormItem className="w-full col-span-3">
                <FormLabel htmlFor={field.name}>Penghasilan Bruto</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="border border-gray-400"
                    {...field}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-end col-span-1">
            <span className="text-lg mb-2">=</span>
          </div>
          <FormField
            control={form.control}
            name="calculations.pph21_has_npwp"
            render={({ field }) => (
              <FormItem className="w-full col-span-3">
                <FormLabel htmlFor={field.name}>PPh 21</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="border border-gray-400"
                    {...field}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <h2 className="text-center font-medium text-sm mt-9 mb-3 py-2 bg-blue-200 rounded-md w-80 mx-auto">
          Wajib Pajak Tidak Memiliki NPWP
        </h2>
        <p className="text-red-500 mb-3">Peraturan DJP Nomor: PER-16/PJ/2016</p>
        <div className="grid grid-cols-9">
          <FormField
            control={form.control}
            name="constants.tariff_tax_non_npwp"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="number"
                    className="border border-gray-400"
                    {...field}
                    value={field.value}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-end col-span-1">
            <span className="text-lg mb-2">x</span>
          </div>
          <FormField
            control={form.control}
            name="calculations.pph21_has_npwp"
            render={({ field }) => (
              <FormItem id={field.name} className="w-full col-span-3">
                <FormControl>
                  <Input
                    type="number"
                    className="border border-gray-400"
                    {...field}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-end col-span-1">
            <span className="text-lg mb-2">=</span>
          </div>
          <FormField
            control={form.control}
            name="calculations.pph21_non_npwp"
            render={({ field }) => (
              <FormItem id={field.name} className="w-full col-span-3">
                <FormControl>
                  <Input
                    type="number"
                    className="border border-gray-400"
                    {...field}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
