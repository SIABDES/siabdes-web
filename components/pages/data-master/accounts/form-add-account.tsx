"use client";

import FormInput from "@/components/patan-ui/form/form-input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function FormAddAccount() {
  const [name, setName] = useState<string | null>(null);
  const [subGroup, setSubGroup] = useState<string | null>(null);
  const [ref, setRef] = useState<string | null>(null);
  const [saldoNormal, setSaldoNormal] = useState<string | null>(null);

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
