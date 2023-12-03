// import React from 'react';
"use client";
import Layout from "@/components/layout/layout";
import InputField from "@/components/Input/input-field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import { ComboBox } from "@/components/ui/combobox";
import { useState } from "react";
import FormInput from "@/components/patan-ui/form/form-input";

export default function PPN() {
  return (
    <Layout>
      <section>
        <header className="bg-[#B8E2F4] p-4 mb-5">
          <h1 className="text-center font-bold text-xl">
            Pajak Pertambahan Nilai
          </h1>
        </header>
        <section className="flex gap-6">
          <div className="w-full space-y-2">
            <InputField
              label="Penyerahan Kepada"
              placeholder="Masukkan Penyerahan Kepada"
              name="penyerahan_kepada"
              type="text"
            />
            <InputField
              label="Nama Barang/Jasa"
              placeholder="Masukkan Nama Barang/Jasa"
              name="nama_barang"
              type="text"
            />
            <RadioGroup defaultValue="barang">
              <div className="flex gap-6 justify-center ml-44 p-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="barang" id="barang" />
                  <Label htmlFor="barang">Barang</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="jasa" id="jasa" />
                  <Label htmlFor="jasa">Jasa</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="w-full space-y-2">
            <InputField
              label="Tanggal Transaksi"
              placeholder="Masukkan Tanggal Transaksi"
              name="tanggal_transaksi"
              type="date"
            />
            <InputField
              label="Nomor Faktur Pajak"
              placeholder="Masukkan Nomor Faktur Pajak"
              name="nomor_faktur_pajak"
              type="text"
            />
            <div className="flex">
              <Label className="p-2 text-sm font-medium text-black w-full space-y-2">
                Objek Pajak
              </Label>
              <h1 className="p-2 text-sm font-medium text-black">:</h1>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Pilih Objek Pajak" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kena_pajak_dalam_negeri">
                    Kena Pajak - Dalam Negeri
                  </SelectItem>
                  <SelectItem value="kena_pajak_luar_negeri">
                    Kena Pajak - Luar Negeri
                  </SelectItem>
                  <SelectItem value="tidak_kena_pajak">
                    Tidak Kena Pajak
                  </SelectItem>
                </SelectContent>
              </Select>
              {/* <RadioGroup defaultValue="barang flex">
                <div className="flex gap-6 justify-center p-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="barang" id="barang" />
                    <Label htmlFor="barang">Barang</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="jasa" id="jasa" />
                    <Label htmlFor="jasa">Jasa</Label>
                  </div>
                </div>
              </RadioGroup> */}
            </div>
          </div>
        </section>
        <section className="border-black border-2 p-6 my-10 space-y-6">
          <header className="bg-[#B8E2F4] p-2 mb-5">
            <h1 className="text-center font-semibold text-lg">
              Perhitungan Nilai
            </h1>
          </header>
          <div className="flex gap-5 text-center w-full">
            <div className="w-full">
              {/* <Label>Harga Saham</Label> */}
              <FormInput
                label="Harga Saham"
                name="harga_saham"
                type="text"
                // value={1000}
                disabled={false}
                onChange={() => {}}
              />
            </div>
            <p className="mt-7 text-xl">×</p>
            <div className="w-full">
              {/* <Label>Kuantitas</Label> */}
              <FormInput
                label="Kuantitas"
                name="kuantitas"
                type="text"
                // value={1000}
                disabled={false}
                onChange={() => {}}
              />
            </div>
            <p className="mt-7 text-xl">=</p>
            <div className="w-full">
              <Label>Harga Total</Label>
              <Input
                className="bg-[#D4D4D4]"
                disabled={true}
                placeholder="sss"
                // value={}
              ></Input>
            </div>
            <div className="w-full">
              <Label>Potongan Harga</Label>
              <Input name="harga_saham" type="number"></Input>
            </div>
          </div>
          <div className="flex gap-5 text-center">
            <div className="">
              <Label>DPP</Label>
              <Input className="bg-[#D4D4D4]" disabled={true}></Input>
            </div>
            <div className="">
              <Label>Tarif PPN</Label>
              <Input className="bg-[#D4D4D4]" disabled={true}></Input>
            </div>
            <p className="mt-7 text-xl">%</p>
            <div className="flex w-full mt-4 bg-[#B8E2F4] p-3 rounded-lg">
              <Label className="w-28 p-2">Harga Total</Label>
              <Input className="bg-[#d8ecf5]"></Input>
            </div>
          </div>
          <div className="flex justify-end mt-10 mb-10 mr-8 gap-10">
            <Button className="bg-blue-500 hover:bg-blue-700 text-black font-normal py-2 px-4 rounded">
              Reset
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-700 text-black font-normal py-2 px-4 rounded">
              Hitung
            </Button>
          </div>
        </section>
      </section>
    </Layout>
  );
}
