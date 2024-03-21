import { DatePicker } from "@/components/ui/date-picker";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { UpdateBumdesProfileFormData } from "@/types/bumdes";
import { useForm } from "react-hook-form";

interface BumdesProfileFormIdentityProps {
  form: ReturnType<typeof useForm<UpdateBumdesProfileFormData>>;
  email: string;
}

export default function BumdesProfileFormIdentity({
  form,
  email,
}: BumdesProfileFormIdentityProps) {
  return (
    <div id="identity">
      <h4 className="font-medium">Identitas Bumdes</h4>

      <Separator className="mb-4 mt-2" />

      <div className="flex flex-col gap-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Nama Bumdes</FormLabel>
              <FormControl>
                <Input placeholder="Tulis nama bumdes..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Label htmlFor="email">Email BUMDes</Label>
          <Input id="email" name="email" value={email} readOnly />
        </div>

        <FormField
          control={form.control}
          name="socials.website"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Website</FormLabel>
              <FormControl>
                <Input
                  placeholder="contoh: https://bumdes-sukamaju.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="complete_address"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Alamat Lengkap Bumdes</FormLabel>
              <FormControl>
                <Input placeholder="Alamat Bumdes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Nomor Telepon</FormLabel>
              <FormControl>
                <Input placeholder="Tulis nomor telepon..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="founded_at"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Tanggal Berdiri Bumdes</FormLabel>
              <FormControl>
                <DatePicker
                  className="w-full"
                  setDate={field.onChange}
                  date={field.value}
                  disabled={(date) => {
                    return date > new Date();
                  }}
                  placeholder="Pilih tanggal berdiri bumdes..."
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
