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
import { FacebookIcon } from "lucide-react";
import { useForm } from "react-hook-form";

interface BumdesProfileFormSocialsProps {
  form: ReturnType<typeof useForm<UpdateBumdesProfileFormData>>;
}

export default function BumdesProfileFormSocials({
  form,
}: BumdesProfileFormSocialsProps) {
  return (
    <div id="socials">
      <h4 className="font-medium">Media Sosial</h4>

      <Separator className="mb-4 mt-2" />

      <div className="flex flex-col gap-y-4">
        <FormField
          control={form.control}
          name="socials.facebook"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Facebook</FormLabel>
              <FormControl>
                <Input
                  placeholder="contoh: https://facebook.com/bumdes.sukamaju"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="socials.twitter"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Twitter</FormLabel>
              <FormControl>
                <Input
                  placeholder="contoh: https://twitter.com/bumdes.sukamaju"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="socials.instagram"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Instagram</FormLabel>
              <FormControl>
                <Input
                  placeholder="contoh: https://instagram.com/sukamaju"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="socials.other_socials"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Sosial Media Lainnya</FormLabel>
              <FormControl>
                <Input
                  placeholder="Tulis tautan sosial media lainnya..."
                  {...field}
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
