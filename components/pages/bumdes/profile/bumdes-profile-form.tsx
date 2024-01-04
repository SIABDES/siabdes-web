"use client";

import { Form } from "@/components/ui/form";
import {
  BumdesProfile,
  UpdateBumdesProfileFormData,
  UpdateBumdesProfileRequest,
} from "@/types/bumdes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import BumdesProfileFormIdentity from "./bumdes-profile-form-identity";
import BumdesProfileFormRules from "./bumdes-profile-form-rules";
import BumdesProfileFormSocials from "./bumdes-profile-form-socials";
import BumdesProfileFormCapitalParticipation from "./bumdes-profile-form-capital-participation";
import { Button } from "@/components/ui/button";

interface BumdesProfileFormProps {
  profile: BumdesProfile;
}

export default function BumdesProfileForm({ profile }: BumdesProfileFormProps) {
  const form = useForm<UpdateBumdesProfileFormData>({
    resolver: zodResolver(UpdateBumdesProfileRequest),
    defaultValues: {
      name: profile.name,
      complete_address: profile.complete_address,
      phone: profile.phone,
      founded_at: profile.founded_at ? new Date(profile.founded_at) : undefined,
      npwp_number: profile.npwp_number ?? undefined,
      bank: profile.bank && {
        name: profile.bank.name ?? undefined,
        account_number: profile.bank.account_number ?? undefined,
      },
      socials: profile.socials && {
        website: profile.socials.website ?? undefined,
        facebook: profile.socials.facebook ?? undefined,
        twitter: profile.socials.twitter ?? undefined,
        instagram: profile.socials.instagram ?? undefined,
        other_socials: profile.socials.other_socials ?? undefined,
      },
      capital_participation: profile.capital_participation && {
        initial: profile.capital_participation.initial ?? undefined,
        additional: profile.capital_participation.additional ?? undefined,
      },
      village_rule_number: profile.village_rule_number ?? undefined,
      sk_administrator_number: profile.sk_administrator_number ?? undefined,
      sk_administrator_date: profile.sk_administrator_date
        ? new Date(profile.sk_administrator_date)
        : undefined,
      sk_assistant_number: profile.sk_assistant_number ?? undefined,
      sk_assistant_date: profile.sk_assistant_date
        ? new Date(profile.sk_assistant_date)
        : undefined,
    },
  });

  const onSubmit = (data: UpdateBumdesProfileFormData) => {
    if (!form.formState.isDirty) return;
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-12"
      >
        <BumdesProfileFormIdentity form={form} email={profile.email} />

        <BumdesProfileFormRules form={form} />

        <BumdesProfileFormSocials form={form} />

        <BumdesProfileFormCapitalParticipation form={form} />

        <Button
          type="submit"
          className="w-fit"
          disabled={
            !form.formState.isDirty ||
            form.formState.isSubmitting ||
            form.formState.isLoading
          }
        >
          Simpan Perubahan Profil
        </Button>
      </form>
    </Form>
  );
}
