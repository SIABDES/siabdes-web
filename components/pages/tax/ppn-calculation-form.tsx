import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CreatePPNFormData } from '@/types/ppn/dto';
import { PpnTaxObjectType } from '@/types/ppn/ppn';
import { TrashIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  formatNumber,
  formatRupiah,
  reverseFormat,
} from '@/common/helpers/number-format';

interface PPNTransactionFormProps {
  form: ReturnType<typeof useForm<CreatePPNFormData>>;
  index: number;
  handleRemove: () => void;
}
export default function PPNCalculationForm({
  form,
  index,
  handleRemove,
}: PPNTransactionFormProps) {
  const basePath = `object_items.${index}` as const;
  const currentIndex = index + 1;

  const price = form.watch(`${basePath}.price`);
  const quantity = form.watch(`${basePath}.quantity`);
  const discount = form.watch(`${basePath}.discount`);
  const dpp = form.watch(`${basePath}.dpp`);

  const [ppnRate, setPpnRate] = useState<number>(
    form.watch('tax_object') === PpnTaxObjectType.KENA_PAJAK_DALAM_NEGERI
      ? 10
      : 5
  );

  const ppn = dpp * (ppnRate / 100);

  useEffect(() => {
    const total = price * quantity;
    const dpp = total - discount;

    setPpnRate(
      form.watch('tax_object') === PpnTaxObjectType.KENA_PAJAK_DALAM_NEGERI
        ? 10
        : 5
    );

    form.setValue(`${basePath}.total_price`, total);
    form.setValue(`${basePath}.dpp`, dpp);
    form.setValue(`${basePath}.ppn`, ppn);
  }, [price, quantity, discount, dpp, ppn, form.watch('tax_object')]);

  return (
    <Card className="mt-9">
      <CardContent>
        <h2 className="ml-3 mt-3">Objek {index + 1}</h2>
        <FormField
          control={form.control}
          name={`${basePath}.name`}
          render={({ field }) => (
            <FormItem className="w-1/3 ml-3">
              <FormLabel htmlFor={field.name}>Nama Barang/Jasa</FormLabel>
              <FormControl>
                <Input
                  className="w-full border border-gray-400"
                  placeholder="Masukkan nama barang/jasa"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <CardContent className="grid grid-cols-4 p-3 gap-x-12 gap-y-8">
          <FormField
            control={form.control}
            name={`${basePath}.price`}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Harga Satuan</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border border-gray-400"
                    placeholder="0"
                    {...field}
                    value={formatRupiah(form.getValues(`${basePath}.price`))}
                    onChange={(e) => {
                      const rawValue = reverseFormat(e.target.value);
                      form.setValue(`${basePath}.price`, parseFloat(rawValue));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`${basePath}.quantity`}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Kuantitas</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border border-gray-400"
                    placeholder="0"
                    {...field}
                    value={formatNumber(form.getValues(`${basePath}.quantity`))}
                    onChange={(e) => {
                      const rawValue = reverseFormat(e.target.value);
                      form.setValue(
                        `${basePath}.quantity`,
                        parseFloat(rawValue)
                      );
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`${basePath}.total_price`}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Harga Total</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border border-gray-400"
                    placeholder="0"
                    readOnly
                    {...field}
                    value={formatRupiah(
                      form.getValues(`${basePath}.total_price`)
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`${basePath}.discount`}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Potongan Harga</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border border-gray-400"
                    placeholder="0"
                    {...field}
                    value={formatRupiah(form.getValues(`${basePath}.discount`))}
                    onChange={(e) => {
                      const rawValue = reverseFormat(e.target.value);
                      form.setValue(
                        `${basePath}.discount`,
                        parseFloat(rawValue)
                      );
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardContent className="grid grid-cols-3 p-3 gap-x-12 gap-y-8">
          <FormField
            control={form.control}
            name={`${basePath}.dpp`}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>
                  Dasar Pengenaan Pajak (DPP)
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full border border-gray-400"
                    placeholder="0"
                    {...field}
                    value={formatRupiah(form.getValues(`${basePath}.dpp`))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Label>Tarif PPN (%)</Label>
            <Input
              className="border border-gray-400"
              type="number"
              readOnly
              value={
                form.watch('tax_object') ===
                PpnTaxObjectType.KENA_PAJAK_DALAM_NEGERI
                  ? 10
                  : 5
              }
            />
          </div>
          <FormField
            control={form.control}
            name={`${basePath}.ppn`}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>
                  Pajak Pertambah Nilai (PPN)
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full border border-gray-400"
                    placeholder="0"
                    {...field}
                    value={formatRupiah(form.getValues(`${basePath}.ppn`))}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <div>
          {currentIndex > 1 && (
            // <Button onClick={() => handleRemove(index)}>Hapus</Button>
            <div className="inline-flex justify-center w-full col-span-12 mt-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={'destructive'}
                      size={'icon'}
                      onClick={() => handleRemove()}
                      // disabled={!props.isAbleToDelete}
                    >
                      <TrashIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-destructive text-destructive-foreground">
                    {currentIndex > 1
                      ? 'Hapus'
                      : 'Tidak dapat menghapus objek pajak'}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
