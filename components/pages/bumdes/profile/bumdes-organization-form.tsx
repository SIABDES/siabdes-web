import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  BumdesOrganization,
  UpdateBumdesOrganizationFormData,
  UpdateBumdesOrganizationRequest,
} from "@/types/bumdes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import BumdesOrganizationFormCore from "./bumdes-organization-form-core";
import BumdesOrganizationFormSupervisor from "./bumdes-organization-form-supervisor";
import { Button } from "@/components/ui/button";

interface BumdesOrganizationFormProps {
  organization: BumdesOrganization;
}

export default function BumdesOrganizationForm({
  organization,
}: BumdesOrganizationFormProps) {
  const form = useForm<UpdateBumdesOrganizationFormData>({
    resolver: zodResolver(UpdateBumdesOrganizationRequest),
    defaultValues: {
      consultant: organization.consultant ?? undefined,
      core: {
        leader: organization.core.leader ?? undefined,
        secretary: organization.core.secretary ?? undefined,
        treasurer: organization.core.treasurer ?? undefined,
      },
      supervisor: organization.supervisor ?? undefined,
    },
  });

  const onSubmit = (data: UpdateBumdesOrganizationFormData) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Separator className="mb-4 mt-2" />

        <FormField
          control={form.control}
          name="consultant"
          render={({ field }) => (
            <FormItem className="w-full mb-8">
              <FormLabel htmlFor={field.name}>Penasihat</FormLabel>
              <FormControl>
                <Input placeholder="contoh: Adi Sumarmo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <BumdesOrganizationFormCore form={form} organization={organization} />

        <BumdesOrganizationFormSupervisor form={form} />

        <Button
          className="mt-8 "
          type="submit"
          disabled={
            !form.formState.isDirty ||
            form.formState.isLoading ||
            form.formState.isSubmitting
          }
        >
          Simpan Perubahan Organisasi
        </Button>
      </form>
    </Form>
  );
}
