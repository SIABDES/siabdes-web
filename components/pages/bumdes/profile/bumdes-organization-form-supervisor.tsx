import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { UpdateBumdesOrganizationFormData } from "@/types/bumdes";
import { useForm } from "react-hook-form";

interface BumdesOrganizationFormSupervisorProps {
  form: ReturnType<typeof useForm<UpdateBumdesOrganizationFormData>>;
}

export default function BumdesOrganizationFormSupervisor({
  form,
}: BumdesOrganizationFormSupervisorProps) {
  return (
    <div id="organization-supervisor" className="mt-4">
      <h4 className="font-medium">Pengawas</h4>

      <Separator className="mb-4 mt-2" />

      <div className="flex flex-col gap-y-4">
        <FormField
          control={form.control}
          name="supervisor.leader"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Ketua</FormLabel>
              <FormControl>
                <Input placeholder="contoh: Adi Sumarmo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="supervisor.secretary"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Sekretaris</FormLabel>
              <FormControl>
                <Input placeholder="contoh: Adi Sumarmo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="supervisor.treasurer"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor={field.name}>Bendahara</FormLabel>
              <FormControl>
                <Input placeholder="contoh: Adi Sumarmo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
