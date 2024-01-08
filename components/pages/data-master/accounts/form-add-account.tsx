"use client";
import InputField from "@/components/Input/input-field";
import FormInput from "@/components/patan-ui/form/form-input";
import SelectItemGroup from "@/components/select/select-item-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Value } from "@radix-ui/react-select";
import React from "react";

export default function FormAddAccount() {
  const [name, setName] = React.useState<string | null>(null);
  const [subGroup, setSubGroup] = React.useState<string | null>(null);
  const [ref, setRef] = React.useState<string | null>(null);
  const [saldoNormal, setSaldoNormal] = React.useState<string | null>(null);

  // const handleChangeSubGroup = (value: Value) => {
  //   setRef(value as string);
  // };
  return (
    <section>
      <div className="px-40">
        <div className="mb-3">
          <FormInput
            name="nama"
            type="text"
            label="Nama Akun"
            placeholder="Masukkan Nama Akun"
            onChange={(e) => setName(e.target.value)}
            value={name ?? ""}
          />
        </div>
        <div className="mb-3">
          <Label className=" block text-sm font-medium text-black">
            Kategori
          </Label>
          {/* <SelectItemGroup  */}
        </div>
        <div className="mb-3">
          <FormInput
            name="ref"
            type="text"
            label="Ref"
            onChange={(e) => setRef(e.target.value)}
            value={ref ?? ""}
            disabled={true}
          />
        </div>
        <div className="mb-3">
          <Label className=" block text-sm font-medium text-black">
            Saldo Normal
          </Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Pilih Saldo Normal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="debit">Debit</SelectItem>
              <SelectItem value="credit">Kredit</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-14 flex justify-end">
          <Button>Simpan</Button>
        </div>
      </div>
    </section>
  );
}
