import { Card, CardContent } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CreatePPNFormData, PPNTransactionFormDataType } from '@/types/ppn/dto';
import {
  PpnItemType,
  PpnTaxObjectType,
  PpnTransactionType,
} from '@/types/ppn/ppn';
import { DatePicker } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PPNTransactionFormProps {
  form: ReturnType<typeof useForm<CreatePPNFormData>>;
  setEvidence: React.Dispatch<React.SetStateAction<File | null>>;
}
export default function PPNTransactionForm({
  form,
  setEvidence,
}: PPNTransactionFormProps) {
  return (
    <Card>
      <CardContent className="grid grid-cols-3 px-6 py-8 gap-x-12 gap-y-8">
        <FormField
          control={form.control}
          name="transaction_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Transaksi</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border border-gray-400">
                      <SelectValue placeholder="Pilih Transaksi" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value={PpnTransactionType.PEMBELIAN}>
                      Pembelian
                    </SelectItem>
                    <SelectItem value={PpnTransactionType.PENJUALAN}>
                      Penjualan
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="transaction_date"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Tanggal Transaksi</FormLabel>
              <FormControl>
                <DatePicker
                  className="w-full border border-gray-400"
                  setDate={field.onChange}
                  placeholder="Pilih tanggal transaksi"
                  date={field.value ? new Date(field.value) : undefined}
                  disabled={(date) => {
                    return date > new Date();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="item_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Jenis Objek</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border border-gray-400">
                      <SelectValue placeholder="Pilih Jenis Objek" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value={PpnItemType.BARANG}>Barang</SelectItem>
                    <SelectItem value={PpnItemType.JASA}>Jasa</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="given_to"
          render={({ field }) => (
            <FormItem className="w-full col-span-2">
              <FormLabel htmlFor={field.name}>Pengusaha Kena Pajak</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  placeholder="Nama pengusaha kena pajak"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tax_object"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Objek Pajak</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border border-gray-400">
                      <SelectValue placeholder="Pilih Objek Pajak" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem
                      value={PpnTaxObjectType.KENA_PAJAK_DALAM_NEGERI}
                    >
                      Kena Pajak - Dalam Negeri
                    </SelectItem>
                    <SelectItem value={PpnTaxObjectType.KENA_PAJAK_LUAR_NEGERI}>
                      Kena Pajak - Luar Negeri
                    </SelectItem>
                    <SelectItem value={PpnTaxObjectType.TIDAK_KENA_PAJAK}>
                      Tidak Kena Pajak
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <Label>Bukti Transaksi</Label>
          <Input
            className="border border-gray-400"
            type="file"
            accept="image/*"
            onChange={(e) => setEvidence(e.target.files?.item(0) ?? null)}
          />
        </div>

        <FormField
          control={form.control}
          name="transaction_number"
          render={({ field }) => (
            <FormItem className="w-full col-span-2">
              <FormLabel htmlFor={field.name}>Nomor Bukti Transaksi</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  placeholder="Contoh bukti transaksi: faktur pajak, invoice dll"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}