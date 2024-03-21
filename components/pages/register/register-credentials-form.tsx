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

interface RegisterCredentialsFormProps {
  form: UseFormReturn<RegisterFormData>;
}

export default function RegisterCredentialsForm({
  form,
}: RegisterCredentialsFormProps) {
  return (
    <Card>
      <CardContent>
        <h6 className="text-lg font-medium mt-4">Kredensial Akun</h6>

        <Separator className="my-2" />

        <FormField
          control={form.control}
          name="credentials.email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Email Bumdes</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Tulis email bumdes."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row gap-x-6 mt-4">
          <FormField
            control={form.control}
            name="credentials.password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Tulis password."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="credentials.passwordConfirmation"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={field.name}>Konfirmasi Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Tulis konfirmasi password."
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
