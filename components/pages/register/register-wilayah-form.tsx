"use client";

import { ComboboxForm } from "@/components/patan-ui/form/combobox-form";
import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useMutateGetManyKota from "@/hooks/wilayah/useGetManyKota";
import {
  useGetManyProvinsi,
  useMutateGetManyProvinsi,
} from "@/hooks/wilayah/useGetManyProvinsi";
import { RegisterFormData } from "@/types/auth";
import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import RegisterAddressForm from "./register-address-form";
import RegisterLocationForm from "./register-location-form";

interface RegisterWilayahFormProps {
  form: UseFormReturn<RegisterFormData>;
}

export default function RegisterWilayahForm({
  form,
}: RegisterWilayahFormProps) {
  return (
    <Card>
      <CardContent>
        <h6 className="text-lg font-medium mt-4">Alamat Bumdes</h6>

        <Separator className="my-2" />

        <RegisterLocationForm form={form} />

        <RegisterAddressForm form={form} />
      </CardContent>
    </Card>
  );
}
