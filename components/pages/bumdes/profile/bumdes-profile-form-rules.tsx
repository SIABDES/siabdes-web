import { DatePicker } from "@/components/ui/date-picker";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { UpdateBumdesProfileFormData } from "@/types/bumdes";
import { useForm } from "react-hook-form";

interface BumdesProfileFormRulesProps {
  form: ReturnType<typeof useForm<UpdateBumdesProfileFormData>>;
}

export default function BumdesProfileFormRules({
  form,
}: BumdesProfileFormRulesProps) {
  return (
    <div id="rules">
      <h4 className="font-medium">Peraturan Bumdes</h4>

      <Separator className="mb-4 mt-2" />

      <div className="flex flex-col gap-y-4">
        <FormField
          control={form.control}
          name="village_rule_number"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Nomor Peraturan Desa</FormLabel>
              <FormControl>
                <Input placeholder="Tulis nomor peraturan desa.." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sk_administrator_number"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>
                Nomor SK Pengurus BUMDes
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Tulis nomor SK pengurus BUMDes.."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sk_administrator_date"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>
                Tanggal SK Pengurus BUMDes
              </FormLabel>
              <FormControl>
                <DatePicker
                  className="w-full"
                  setDate={field.onChange}
                  date={field.value}
                  disabled={(date) => {
                    return date > new Date();
                  }}
                  placeholder="Pilih tanggal SK pengurus bumdes..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sk_assistant_number"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Nomor SK AD/ART BUMDes</FormLabel>
              <FormControl>
                <Input
                  placeholder="Tulis nomor SK AD/ART BUMDes.."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sk_assistant_date"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>
                Tanggal SK AD/ART BUMDes
              </FormLabel>
              <FormControl>
                <DatePicker
                  className="w-full"
                  setDate={field.onChange}
                  date={field.value}
                  disabled={(date) => {
                    return date > new Date();
                  }}
                  placeholder="Pilih tanggal SK AD/ART bumdes..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
