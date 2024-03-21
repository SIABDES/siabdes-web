import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterFormData } from "@/types/auth";
import { UseFormReturn } from "react-hook-form";

interface RegisterAddressFormProps {
  form: UseFormReturn<RegisterFormData>;
}

export default function RegisterAddressForm({
  form,
}: RegisterAddressFormProps) {
  return (
    <div className="flex flex-row gap-x-4 mt-4">
      <FormField
        control={form.control}
        name="address.completeAddress"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel htmlFor={field.name}>Alamat Lengkap</FormLabel>
            <FormControl>
              <Input placeholder="Tulis alamat lengkap." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address.postalCode"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel htmlFor={field.name}>Kode Pos</FormLabel>
            <FormControl>
              <Input placeholder="Tulis kode pos." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
