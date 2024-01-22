// import React from 'react';
'use client';
import Layout from '@/components/layout/layout';
import PPNCalculationForm from '@/components/pages/tax/ppn-calculation-form';
import PpnTransactionsForm from '@/components/pages/tax/ppn-transaction-form';
import TaxInformation from '@/components/pages/tax/tax-information';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';
import useAddPPN from '@/hooks/ppn/useAddPPN';
import { CreatePPNFormData, CreatePPNSchema } from '@/types/ppn/dto';
import { PpnTaxObjectType } from '@/types/ppn/ppn';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { watch } from 'fs';
import { PlusCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

export default function AddPpn() {
  // const [evidence, setEvidence] = useState<File | null>(null);
  // const [occurred_at, setOccurredAt] = useState<Date | undefined>(new Date());
  // const [taxableEmployers, setTaxableEmployers] = useState<string | null>(null);
  // const [numberEvidence, setNumberEvidence] = useState<string | null>(null);
  // const [taxObjeks, setTaxObjeks] = useState<PpnTaxObjectType | null>(null);

  // const onSubmit = (data: CreatePPNFormData, PpnTransactionFormDataType) => {};
  const { toast } = useToast();
  const router = useRouter();
  const [evidence, setEvidence] = useState<File | null>(null);

  const { mutateAsync: mutateAddPPN, isPending: isPendingAddPPN } = useAddPPN();

  const form = useForm<CreatePPNFormData>({
    resolver: zodResolver(CreatePPNSchema),
    defaultValues: {
      object_items: [
        {
          name: '',
          discount: 0,
          dpp: 0,
          ppn: 0,
          price: 0,
          quantity: 0,
          total_price: 0,
        },
      ],
      given_to: '',
      item_type: undefined,
      tax_object: undefined,
      transaction_date: undefined,
      transaction_number: '',
      transaction_type: undefined,
    },
  });

  const objectItemArray = useFieldArray({
    control: form.control,
    name: 'object_items',
    rules: {
      minLength: 1,
    },
  });

  const handleRemoveItem = (index: number) => {
    objectItemArray.remove(index);
  };

  const handleAddItem = () => {
    objectItemArray.append({
      name: '',
      discount: 0,
      dpp: 0,
      ppn: 0,
      price: 0,
      quantity: 0,
      total_price: 0,
    });
  };

  const onSubmit = async (data: CreatePPNFormData) => {
    const validatedData = CreatePPNSchema.safeParse(data);

    if (!evidence) {
      toast({
        title: 'Terjadi kesalahan',
        description: 'Mohon berikan bukti transaksi anda..',
        variant: 'destructive',
      });
      return;
    }

    if (!validatedData.success) {
      toast({
        title: 'Terjadi kesalahan',
        description: 'Mohon periksa kembali inputan anda..',
        variant: 'destructive',
      });
      return;
    }

    await mutateAddPPN(
      { data, evidence },
      {
        onSettled: () => {
          toast({
            title: 'Menambahkan...',
            description: 'Sedang menambahkan pajak pertambahan nilai (PPN)...',
          });
        },
        onSuccess: () => {
          toast({
            title: 'Berhasil',
            description: 'Berhasil menambahkan pajak pertambahan nilai (PPN)',
          });
          router.push('/unit/tax/ppn');
        },
        onError: (error) => {
          toast({
            title: 'Gagal',
            description:
              (error instanceof AxiosError && error.response?.data.message) ??
              'Terjadi kesalahan internal..',
            variant: 'destructive',
          });
        },
      }
    );
  };

  return (
    <Layout>
      <header className="flex justify-between">
        <h5 className="text-base font-semibold pb-8">
          Tambah Pajak Pertambahan Nilai (PPN)
        </h5>
        <Link href="/unit/tax/ppn">
          <Button>Kembali</Button>
        </Link>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <PpnTransactionsForm form={form} setEvidence={setEvidence} />

          <Card className="mt-8">
            <CardContent>
              <h2 className="p-3">Perhitungan Nilai Objek</h2>

              <ScrollArea className="max-h-96 overflow-y-auto">
                {form.getValues('object_items')?.map((_, index) => (
                  <PPNCalculationForm
                    key={index}
                    form={form}
                    index={index}
                    handleRemove={() => handleRemoveItem(index)}
                  />
                ))}
              </ScrollArea>

              <Button
                className="border w-full py-6 mt-5 group hover:bg-border-primary hover:border-primary  rounded-md bg-white"
                onClick={handleAddItem}
              >
                <p className="text-muted-foreground group-hover:text-primary font-medium">
                  <span className="flex items-center justify-center gap-x-4">
                    <PlusCircleIcon size={18} />
                    Tambah Objek
                  </span>
                </p>
              </Button>
            </CardContent>
          </Card>

          <TaxInformation />

          <div className="pt-8">
            <Button type="submit" onClick={() => console.log('manbt')}>
              Tambah
            </Button>
          </div>
        </form>
      </Form>

      {/* <PpnEssentialsForm
        taxableEmployers={taxableEmployers}
        setTaxableEmployers={setTaxableEmployers}
        occurred_at={occurred_at}
        setOccurredAt={setOccurredAt}
        numberEvidence={numberEvidence}
        setNumberEvidence={setNumberEvidence}
        setEvidence={setEvidence}
        setTaxObjeks={setTaxObjeks}
      />

      <PpnTransactionsContainerForm
        setTransactions={setTransactions}
        transactions={transactions}
        taxObjeks={taxObjeks}
      /> */}
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
