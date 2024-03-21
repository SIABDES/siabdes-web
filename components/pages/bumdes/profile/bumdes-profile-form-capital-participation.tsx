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

interface BumdesProfileFormIdentityProps {
  form: ReturnType<typeof useForm<UpdateBumdesProfileFormData>>;
}

export default function BumdesProfileFormCapitalParticipation({
  form,
}: BumdesProfileFormIdentityProps) {
  return (
    <div id="capital-participation">
      <h4 className="font-medium">Penyertaan Modal</h4>

      <Separator className="mb-4 mt-2" />

      <div className="flex flex-col gap-y-4">
        <FormField
          control={form.control}
          name="capital_participation.initial"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Penyertaan Modal Awal</FormLabel>
              <FormControl>
                <Input
                  placeholder="Jumlah penyertaan modal awal..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="capital_participation.additional"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>
                Penambahan Penyertaan Modal
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Jumlah penambahan penyertaan modal..."
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
