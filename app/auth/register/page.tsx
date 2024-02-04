"use client";

import RegisterCredentialsForm from "@/components/pages/register/register-credentials-form";
import RegisterOrganizationForm from "@/components/pages/register/register-organization-form";
import RegisterProfileForm from "@/components/pages/register/register-profile-form";
import RegisterWilayahForm from "@/components/pages/register/register-wilayah-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import useRegisterBumdes from "@/hooks/auth/useRegisterBumdes";
import { RegisterFormData, RegisterSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const router = useRouter();
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      profile: {
        name: "",
        phone: "",
      },
      credentials: {
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      organization: {
        leader: "",
        secretary: "",
        treasurer: "",
      },
      address: {
        postalCode: "",
        completeAddress: "",
        province: "",
        regency: "",
        district: "",
        village: "",
      },
    },
  });

  const {
    mutateAsync: mutateRegisterBumdes,
    isPending: isMutateRegisterPending,
  } = useRegisterBumdes();

  const onSubmit = (data: RegisterFormData) => {
    void mutateRegisterBumdes(data, {
      onSuccess: () => {
        toast({
          variant: "default",
          title: "Berhasil mendaftarkan akun.",
          description: `Email '${data.credentials.email}' berhasil di daftarkan.`,
          duration: 5000,
        });

        void router.push("/auth/login");
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Gagal mendaftarkan akun.",
          description: error.message,
          duration: 5000,
        });
      },
    });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-medium text-center mb-8">
          Pendaftaran Akun
        </h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4"
          >
            <RegisterProfileForm form={form} />

            <RegisterOrganizationForm form={form} />

            <RegisterWilayahForm form={form} />

            <RegisterCredentialsForm form={form} />

            <Button
              type="submit"
              className="w-fit mt-4"
              disabled={!form.formState.isValid || isMutateRegisterPending}
            >
              {isMutateRegisterPending
                ? "Mendaftarkan Bumdes..."
                : "Daftarkan Bumdes"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
