import { Card, CardContent } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RegisterFormData } from "@/types/auth";
import { UseFormReturn } from "react-hook-form";

interface RegisterOrganizationFormProps {
  form: UseFormReturn<RegisterFormData>;
}

export default function RegisterOrganizationForm({
  form,
}: RegisterOrganizationFormProps) {
  return (
    <Card>
      <CardContent>
        <h6 className="text-lg font-medium mt-4">Struktur Organisasi</h6>

        <Separator className="my-2" />

        <div>
          <FormField
            control={form.control}
            name="organization.leader"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Nama Ketua</FormLabel>
                <FormControl>
                  <Input placeholder="Tulis nama ketua bumdes." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-row gap-x-6 mt-4">
          <FormField
            control={form.control}
            name="organization.treasurer"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Nama Bendahara</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tulis nama bendahara bumdes."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="organization.secretary"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Nama Sekeretaris</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tulis nama sekertaris bumdes."
                    {...field}
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
