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

interface RegisterProfileFormProps {
  form: UseFormReturn<RegisterFormData>;
}

export default function RegisterProfileForm({
  form,
}: RegisterProfileFormProps) {
  return (
    <Card>
      <CardContent>
        <h6 className="text-lg font-medium mt-4 mt">Profil Bumdes</h6>

        <Separator className="my-2" />

        <div className="flex flex-row gap-x-6">
          <FormField
            control={form.control}
            name="profile.name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Nama Bumdes</FormLabel>
                <FormControl>
                  <Input placeholder="Tulis nama bumdes." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="profile.phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Nomor Telepon Bumdes</FormLabel>
                <FormControl>
                  <Input placeholder="Tulis nama bumdes." {...field} />
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
