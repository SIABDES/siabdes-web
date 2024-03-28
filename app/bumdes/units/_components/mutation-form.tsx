"use client";

import { UnitBusinessType } from "@/types/units";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from "@nextui-org/react";
import { Controller, UseFormReturn, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutationBumdesAddUnit } from "../_hooks/useBumdesUnit";
import { AddUnitRequest, AddUnitSchemaRequest } from "../_schemas/mutation";
import { useRouter } from "next/navigation";

interface BumdesUnitMutationFormProps {
  form: UseFormReturn<AddUnitRequest>;
}

function BumdesUnitMutationForm({ form }: BumdesUnitMutationFormProps) {
  const { handleSubmit, control } = form;
  const router = useRouter();

  const { mutateAsync, isPending } = useMutationBumdesAddUnit();

  const onSubmit = async (data: AddUnitRequest) => {
    await mutateAsync(data, {
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Unit berhasil ditambahkan");
        router.push("/bumdes/units");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl space-y-6">
      <div className="flex flex-row gap-x-6">
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Nama Unit"
              isRequired
              placeholder="contoh: Manufaktur Kain"
              errorMessage={fieldState.error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="business_type"
          render={({ field, fieldState }) => (
            <Autocomplete
              {...field}
              isRequired
              isClearable={false}
              errorMessage={fieldState.error?.message}
              label="Jenis Usaha"
              placeholder="Pilih jenis usaha unit"
              onSelectionChange={(value) => {
                field.onChange(value);
              }}
              onKeyDown={(e: any) => e.continuePropagation()}
              defaultItems={
                [
                  {
                    key: UnitBusinessType.COMMERCE,
                    label: "Perdagangan",
                  },
                  {
                    key: UnitBusinessType.SERVICES,
                    label: "Jasa",
                  },
                  {
                    key: UnitBusinessType.INDUSTRY,
                    label: "Industri",
                  },
                ] as const
              }
            >
              {(item) => (
                <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
              )}
            </Autocomplete>
          )}
        />
      </div>

      <div className="flex flex-row gap-x-8">
        <Controller
          control={control}
          name="leader"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Nama Ketua"
              isRequired
              errorMessage={fieldState.error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="phone_number"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Nomor Telepon"
              isRequired
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>

      <Controller
        control={control}
        name="address"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            label="Alamat Lengkap"
            isRequired
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="credentials.identifier"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            label="Username"
            isRequired
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <div className="flex flex-row gap-x-8">
        <Controller
          control={control}
          name="credentials.password"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Password"
              isRequired
              errorMessage={fieldState.error?.message}
              type="password"
            />
          )}
        />

        <Controller
          control={control}
          name="credentials.confirm_password"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Konfirmasi Password"
              isRequired
              errorMessage={fieldState.error?.message}
              type="password"
            />
          )}
        />
      </div>

      <Button color="primary" type="submit" isLoading={isPending}>
        Tambahkan Unit
      </Button>
    </form>
  );
}

export function BumdesAddUnitForm() {
  const form = useForm<AddUnitRequest>({
    resolver: zodResolver(AddUnitSchemaRequest),
    defaultValues: {
      name: "",
      address: "",
      leader: "",
      phone_number: "",
      credentials: {
        identifier: "",
        password: "",
        confirm_password: "",
      },
    },
  });

  return (
    <>
      <BumdesUnitMutationForm form={form} />
    </>
  );
}
