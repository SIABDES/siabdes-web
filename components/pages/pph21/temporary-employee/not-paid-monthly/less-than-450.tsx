import FormNumberInput from '@/components/patan-ui/form/form-number-input';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import { useForm } from 'react-hook-form';

interface LessThan450Props {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}

export default function LessThan450({ form }: LessThan450Props) {
  return (
    <Card>
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Upah Harian ≤ 450.000
      </h1>
      <CardContent>
        <div className="grid grid-cols-12 items-center gap-x-4">
          <div className="col-span-2 space-y-3">
            <p className="text-sm font-medium">Tarif TER</p>
            <Input value={'0%'} readOnly />
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
        {/* <div className="grid grid-cols-10">
          <FormField
            control={form.control}
            name="constants.tariff_ter"
            render={({ field }) => (
              <FormItem className="w-full col-span-2">
                <FormLabel htmlFor={field.name}>Tarif TER</FormLabel>
                <FormControl>
                  <Input
                    className="border border-gray-400"
                    {...field}
                    value={`${0}%`}
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
            name="calculations.salary_less_450"
            render={({ field }) => (
              <FormItem className="w-full col-span-3">
                <FormLabel htmlFor={field.name}>Upah Harian</FormLabel>
                <FormControl>
                  <Input
                    className="border border-gray-400"
                    {...field}
                    value={formatRupiah(
                      form.getValues('calculations.salary_less_450')
                    )}
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
            name="calculations.pph21_has_npwp_less_then_450"
            render={({ field }) => (
              <FormItem className="w-full col-span-3">
                <FormLabel htmlFor={field.name}>PPh 21</FormLabel>
                <FormControl>
                  <Input
                    className="border border-gray-400"
                    {...field}
                    value={formatRupiah(
                      form.getValues(
                        'calculations.pph21_has_npwp_less_then_450'
                      )
                    )}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div> */}
      </CardContent>
    </Card>
  );
}
