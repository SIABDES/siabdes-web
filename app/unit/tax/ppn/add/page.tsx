// import React from 'react';
'use client';
import Layout from '@/components/layout/layout';
import PpnEssentialsForm from '@/components/pages/tax/ppn/form/ppn-essentials-form';
import PpnTransactionsContainerForm from '@/components/pages/tax/ppn/form/ppn-transactions-container-form';
import TaxInformation from '@/components/pages/tax/tax-information';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import {
  CreatePPNFormData,
  CreatePPNSchema,
  PpnObjectItemSchema,
  PPNTransactionFormDataType,
} from '@/types/ppn/dto';
import {
  PpnTaxObjectType,
  PpnTransactionFormDataType,
  PpnTransactionType,
} from '@/types/ppn/ppn';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PlusCircleIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TrashIcon } from '@radix-ui/react-icons';

export default function AddPpn() {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<CreatePPNFormData>({
    resolver: zodResolver(CreatePPNSchema),
  });

  const formCalculation = useForm<PPNTransactionFormDataType>({
    resolver: zodResolver(PpnObjectItemSchema),
  });

  const handleAdd = () => {
    // Add a new transaction object to the transactions state array
    setTransactions([
      ...transactions,
      {
        unique_id: String(transactions.length + 1), // Just a simple unique ID generation logic
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
  };

  const handleRemove = (index: number) => {
    // Remove the transaction object at the given index
    if (transactions.length > 1) {
      const updatedTransactions = [...transactions];
      updatedTransactions.splice(index, 1);
      setTransactions(updatedTransactions);
    } else {
      // Optionally, you can display a toast message or alert to inform the user
      toast({
        title: 'Action Denied',
        description: 'You must have at least one transaction object.',
        duration: 3000,
      });
    }
  };
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
  const [taxObjeks, setTaxObjeks] = useState<PpnTaxObjectType | null>(null);

  // const onSubmit = (data: CreatePPNFormData, PpnTransactionFormDataType) => {};

  const onSubmit = (data: CreatePPNFormData) => {};
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
          <Card>
            <CardContent className="grid grid-cols-3 p-3 gap-x-12 gap-y-8">
              <FormField
                control={form.control}
                name="transaction_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Transaksi</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Transaksi" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value={PpnTransactionType.PEMBELIAN}>
                            Pembelian
                          </SelectItem>
                          <SelectItem value={PpnTransactionType.PENJUALAN}>
                            Penjualan
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="transaction_date"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor={field.name}>
                      Tanggal Transaksi
                    </FormLabel>
                    <FormControl>
                      <DatePicker
                        className="w-full"
                        setDate={field.onChange}
                        date={field.value}
                        disabled={(date) => {
                          return date > new Date();
                        }}
                        placeholder="Pilih tanggal transaksi"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="item_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Jenis Objek</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Jenis Objek" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="barang">Barang</SelectItem>
                          <SelectItem value="jasa">Jasa</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="given_to"
                render={({ field }) => (
                  <FormItem className="w-full col-span-2">
                    <FormLabel htmlFor={field.name}>
                      Pengusaha Kena Pajak
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nama pengusaha kena pajak"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tax_object"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Objek Pajak</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Objek Pajak" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem
                            value={PpnTaxObjectType.KENA_PAJAK_DALAM_NEGERI}
                          >
                            Kena Pajak - Dalam Negeri
                          </SelectItem>
                          <SelectItem
                            value={PpnTaxObjectType.KENA_PAJAK_LUAR_NEGERI}
                          >
                            Kena Pajak - Luar Negeri
                          </SelectItem>
                          <SelectItem value={PpnTaxObjectType.TIDAK_KENA_PAJAK}>
                            Tidak Kena Pajak
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="transaction_evidence"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor={field.name}>Bukti Transaksi</FormLabel>
                    <FormControl>
                      <Input type="file" accept="image/*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="transaction_number"
                render={({ field }) => (
                  <FormItem className="w-full col-span-2">
                    <FormLabel htmlFor={field.name}>
                      Nomor Bukti Transaksi
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Contoh bukti transaksi: faktur pajak, invoice dll"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card>
            <h2 className="p-3 mt-6">Perhitungan Nilai Objek</h2>
            <ScrollArea className="max-h-96 overflow-y-auto">
              {transactions.map((transaction, index) => (
                <CardContent key={transaction.unique_id}>
                  <h2 className="ml-3">Objek {index + 1}</h2>
                  <FormField
                    control={formCalculation.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-1/3 ml-3">
                        <FormLabel htmlFor={field.name}>
                          Nama Barang/Jasa
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Masukkan nama barang/jasa"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <CardContent className="grid grid-cols-4 p-3 gap-x-12 gap-y-8">
                    <FormField
                      control={formCalculation.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel htmlFor={field.name}>
                            Harga Satuan
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formCalculation.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel htmlFor={field.name}>Kuantitas</FormLabel>
                          <FormControl>
                            <Input placeholder="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formCalculation.control}
                      name="total_price"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel htmlFor={field.name}>
                            Harga Total
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formCalculation.control}
                      name="discount"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel htmlFor={field.name}>
                            Potongan Harga
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardContent className="grid grid-cols-3 p-3 gap-x-12 gap-y-8">
                    <FormField
                      control={formCalculation.control}
                      name="dpp"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel htmlFor={field.name}>
                            Dasar Pengenaan Pajak (DPP)
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formCalculation.control}
                      name="taxRate"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel htmlFor={field.name}>
                            Tarif PPN (%)
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formCalculation.control}
                      name="ppn"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel htmlFor={field.name}>
                            Pajak Pertambah Nilai (PPN)
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <div>
                    {transactions.length > 1 && (
                      // <Button onClick={() => handleRemove(index)}>Hapus</Button>
                      <div className="inline-flex justify-center w-full col-span-12 mt-5">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant={'destructive'}
                                size={'icon'}
                                onClick={() => handleRemove(index)}
                                // disabled={!props.isAbleToDelete}
                              >
                                <TrashIcon />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-destructive text-destructive-foreground">
                              {transactions.length > 1
                                ? 'Hapus'
                                : 'Tidak dapat menghapus objek pajak'}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    )}
                    {index === transactions.length - 1 && (
                      // <Button onClick={handleAdd}>Tambah</Button>
                      <Button
                        className="border w-full py-6 mt-8 group hover:bg-border-primary hover:border-primary  rounded-md bg-white"
                        onClick={handleAdd}
                      >
                        <p className="text-muted-foreground group-hover:text-primary font-medium">
                          <span className="flex items-center justify-center gap-x-4">
                            <PlusCircleIcon size={18} />
                            Tambah Objek
                          </span>
                        </p>
                      </Button>
                    )}
                  </div>
                </CardContent>
              ))}
            </ScrollArea>
          </Card>
        </form>
      </Form>

      <PpnEssentialsForm
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
