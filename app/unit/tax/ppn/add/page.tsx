// import React from 'react';
'use client';
import Layout from '@/components/layout/layout';
import InputField from '@/components/Input/input-field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Calendar } from '@/components/ui/calendar';
import { ComboBox } from '@/components/ui/combobox';
import FormInput from '@/components/patan-ui/form/form-input';
import PpnEssentialsForm from '@/components/pages/tax/ppn/form/ppn-essentials-form';
import { set } from 'date-fns';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import PpnTransactionsContainerForm from '@/components/pages/tax/ppn/form/ppn-transactions-container-form';
import { PpnTransactionFormDataType } from '@/types/ppn/ppn';
import Tax from '../../page';
import TaxInformation from '@/components/pages/tax/tax-information';
import Link from 'next/link';

export default function AddPpn() {
  const { toast } = useToast();
  const router = useRouter();

  const [transactions, setTransactions] = useState<
    PpnTransactionFormDataType[]
  >([
    {
      unique_id: '1',
      name: undefined,
      type: undefined,
      price: 0,
      amount: 0,
      total_price: 0,
      discount: 0,
      dpp: 0,
      tax: 0,
      ppn: 0,
    },
  ]);
  const [evidence, setEvidence] = useState<File | null>(null);
  const [occurred_at, setOccurredAt] = useState<Date | undefined>(new Date());
  const [taxableEmployers, setTaxableEmployers] = useState<string | null>(null);
  const [numberEvidence, setNumberEvidence] = useState<string | null>(null);
  return (
    <Layout>
      <header className="flex justify-between">
        <h5 className="text-base font-semibold pb-8">Tambah PPN</h5>
        <Link href="/unit/tax/ppn">
          <Button>Kembali</Button>
        </Link>
      </header>

      <PpnEssentialsForm
        taxableEmployers={taxableEmployers}
        setTaxableEmployers={setTaxableEmployers}
        occurred_at={occurred_at}
        setOccurredAt={setOccurredAt}
        numberEvidence={numberEvidence}
        setNumberEvidence={setNumberEvidence}
        setEvidence={setEvidence}
      />

      <PpnTransactionsContainerForm
        setTransactions={setTransactions}
        transactions={transactions}
      />

      <TaxInformation />
      {/* <div className="pt-8">
        <Button
          disabled={!isTransactionsBalance || isMutatePpnPending}
          onClick={handleMutation}
        >
          {isMutatePpnPending ? (
            <span>Menambahkan...</span>
          ) : (
            <span>Tambah Jurnal</span>
          )}
        </Button>
      </div> */}
    </Layout>
    // <Layout>
    //   <section>
    //     <header className="bg-[#B8E2F4] p-4 mb-5">
    //       <h1 className="text-center font-bold text-xl">
    //         Pajak Pertambahan Nilai
    //       </h1>
    //     </header>
    //     <section className="flex gap-6">
    //       <div className="w-full space-y-2">
    //         <InputField
    //           label="Penyerahan Kepada"
    //           placeholder="Masukkan Penyerahan Kepada"
    //           name="penyerahan_kepada"
    //           type="text"
    //         />
    //         <InputField
    //           label="Tanggal Transaksi"
    //           placeholder="Masukkan Tanggal Transaksi"
    //           name="tanggal_transaksi"
    //           type="date"
    //         />
    //       </div>
    //       <div className="w-full space-y-2">
    //         <InputField
    //           label="No Bukti Transaksi"
    //           placeholder="Contoh bukti transaksi : faktur pajak, invoice, dll."
    //           name="nomor_bukti_transaksi"
    //           type="text"
    //         />
    //         <div className="flex">
    //           <Label className="p-2 text-sm font-medium text-black w-full space-y-2">
    //             Objek Pajak
    //           </Label>
    //           <h1 className="p-2 text-sm font-medium text-black">:</h1>
    //           <Select>
    //             <SelectTrigger className="">
    //               <SelectValue placeholder="Pilih Objek Pajak" />
    //             </SelectTrigger>
    //             <SelectContent>
    //               <SelectItem value="kena_pajak_dalam_negeri">
    //                 Kena Pajak - Dalam Negeri
    //               </SelectItem>
    //               <SelectItem value="kena_pajak_luar_negeri">
    //                 Kena Pajak - Luar Negeri
    //               </SelectItem>
    //               <SelectItem value="tidak_kena_pajak">
    //                 Tidak Kena Pajak
    //               </SelectItem>
    //             </SelectContent>
    //           </Select>
    //         </div>
    //       </div>
    //     </section>
    //   </section>
    //   <section className="border-black border-2 p-6 my-10 space-y-6">
    //     <header className="bg-[#B8E2F4] p-2 mb-5">
    //       <h1 className="text-center font-semibold text-lg">
    //         Perhitungan Nilai Objek
    //       </h1>
    //     </header>
    //     <section className="flex gap-6">
    //       <div className="w-full space-y-2">
    //         <InputField
    //           label="Nama Barang/Jasa"
    //           placeholder="Masukkan Nama Barang/Jasa"
    //           name="nama_barang"
    //           type="text"
    //         />
    //       </div>
    //       <div className="w-full space-y-2">
    //         <div className="flex">
    //           <div className="align-baseline my-auto ml-2">
    //             <Label htmlFor="jenis_objek">Jenis Objek</Label>
    //           </div>
    //           <RadioGroup defaultValue="barang">
    //             <div className="flex gap-6 justify-center ml-72 p-2">
    //               <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="barang" id="barang" />
    //                 <Label htmlFor="barang">Barang</Label>
    //               </div>
    //               <div className="flex items-center space-x-2">
    //                 <RadioGroupItem value="jasa" id="jasa" />
    //                 <Label htmlFor="jasa">Jasa</Label>
    //               </div>
    //             </div>
    //           </RadioGroup>
    //         </div>
    //       </div>
    //     </section>
    //     <div className="flex gap-5 text-center w-full">
    //       <div className="w-full">
    //         {/* <Label>Harga Satuan</Label> */}
    //         <FormInput
    //           label="Harga Satuan"
    //           name="harga_saham"
    //           type="text"
    //           // value={1000}
    //           disabled={false}
    //           onChange={() => {}}
    //         />
    //       </div>
    //       <p className="mt-7 text-xl">×</p>
    //       <div className="w-full">
    //         {/* <Label>Kuantitas</Label> */}
    //         <FormInput
    //           label="Kuantitas"
    //           name="kuantitas"
    //           type="text"
    //           // value={1000}
    //           disabled={false}
    //           onChange={() => {}}
    //         />
    //       </div>
    //       <p className="mt-7 text-xl">=</p>
    //       <div className="w-full">
    //         <Label>Harga Total</Label>
    //         <Input
    //           className="bg-[#D4D4D4]"
    //           disabled={true}
    //           placeholder="sss"
    //           // value={}
    //         ></Input>
    //       </div>
    //       <div className="w-full">
    //         <Label>Potongan Harga</Label>
    //         <Input name="harga_saham" type="number"></Input>
    //       </div>
    //     </div>
    //     <div className="flex gap-5 text-center">
    //       <div className="">
    //         <Label>DPP</Label>
    //         <Input className="bg-[#D4D4D4]" disabled={true}></Input>
    //       </div>
    //       <div className="">
    //         <Label>Tarif PPN</Label>
    //         <Input className="bg-[#D4D4D4]" disabled={true}></Input>
    //       </div>
    //       <p className="mt-7 text-xl">%</p>
    //       <div className="flex w-full mt-4 bg-[#B8E2F4] p-3 rounded-lg">
    //         <Label className="w-28 p-2">Harga Total</Label>
    //         <Input className="bg-[#d8ecf5]"></Input>
    //       </div>
    //     </div>
    //   </section>
    //   <div className="flex justify-end mt-10 mb-10 mr-8 gap-10">
    //     {/* <Button className="bg-red-500 hover:bg-red-700 text-white font-normal py-2 px-4 rounded">
    //         Reset
    //       </Button> */}
    //     <Button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded">
    //       Simpan
    //     </Button>
    //   </div>
    // </Layout>
  );
}
