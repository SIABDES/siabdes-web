import {
  formatRupiah,
  reverseFormat,
  reverseFormatNumber,
} from '@/common/helpers/number-format';
import { Card } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  SeverencePayOneTimeFormData,
  SeverencePayPeriodicFormData,
} from '@/types/pph21/severance-pay/severence-pay';
import { useForm } from 'react-hook-form';

interface ResultsProps {
  form: ReturnType<typeof useForm<SeverencePayPeriodicFormData>>;
  total_salary: string;
  total_pph21: string;
  net_receipts: string;
}

export default function SeverencePayPeriodicResults({
  form,
  total_salary,
  total_pph21,
  net_receipts,
}: ResultsProps) {
  return (
    <div className="grid grid-cols-3 gap-x-9 mt-9">
      <Card>
        <FormField
          control={form.control}
          name={total_salary as any}
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
              <FormLabel htmlFor={field.name}>Jumlah Penghasilan</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400 bg-[#E5F5FC]"
                  {...field}
                  value={formatRupiah(field.value)}
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Card>
      <Card>
        <FormField
          control={form.control}
          name={total_pph21 as any}
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
              <FormLabel htmlFor={field.name}>Jumlah PPh 21</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400 bg-[#E5F5FC]"
                  {...field}
                  value={formatRupiah(field.value)}
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Card>
      <Card>
        <FormField
          control={form.control}
          name={net_receipts as any}
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
              <FormLabel htmlFor={field.name}>Penerimaan Bersih</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400 bg-[#E5F5FC]"
                  {...field}
                  value={formatRupiah(field.value)}
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Card>
    </div>
  );
}
