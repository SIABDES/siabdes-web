'use client';

import Layout from '@/components/layout/layout';
import LaborData from '@/components/pages/pph21/general/labor-data';
import Results from '@/components/pages/pph21/general/results';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  PermanentEmployeeFormData,
  PermanentEmployeeSchema,
} from '@/types/pph21/permanent-employee/permanent-employee';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function PermanentEmployee() {
  const form = useForm<PermanentEmployeeFormData>({
    resolver: zodResolver(PermanentEmployeeSchema),
  });

  const onSubmit = (data: PermanentEmployeeFormData) => {
    console.log(data);
  };

  return (
    <Layout>
      <section>
        <div className="flex justify-between mb-6">
          <h1 className="underline font-bold text-lg mt-1">
            Kalkulator Pajak Penghasilan Pasal 21
          </h1>
          <div className="flex space-x-6">
            <Button>Lampiran</Button>
            <Link href="/unit/tax/pph21">
              <Button>Kembali</Button>
            </Link>
          </div>
        </div>
        <Tabs defaultValue="januariNovember">
          <TabsList className="grid w-96 grid-cols-2">
            <TabsTrigger value="januariNovember">
              Januari - November
            </TabsTrigger>
            <TabsTrigger value="desember">Desember</TabsTrigger>
          </TabsList>
          <TabsContent value="januariNovember">
            <Card className="bg-white border border-gray-300 p-3 rounded-xl mt-5 pb-5">
              <h1 className="mt-3 mb-4 text-center font-bold text-lg">
                Pegawai Tetap Bulanan Masa Pajak Januari - November
              </h1>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}></form>
                <LaborData form={form} />
                <div className="grid grid-cols-9 gap-x-12 gap-y-8 mt-9">
                  <Card className="col-span-4 border border-gray-300 shadow-md">
                    <h1 className="text-center font-bold text-sm mb-3 pt-3">
                      Penghasilan Bruto
                    </h1>
                    <CardContent>
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>Gaji</FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>
                              Tunjangan
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>
                              Tunjangan Hari raya (THR)
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>Bonus</FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>Lembur</FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>
                              Premi Dibayar Pemberi Kerja
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>
                              Penghasilan Bruto
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                                readOnly
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  <Card className="col-span-5 border border-gray-300 shadow-md">
                    <h1 className="text-center font-bold text-sm pt-3">
                      Perhitungan PPh 21
                    </h1>
                    <CardContent>
                      <h2 className="text-center font-medium text-sm mt-9 mb-3 py-2 bg-blue-200 rounded-md w-80 mx-auto">
                        Wajib Pajak Memiliki NPWP
                      </h2>
                      <p className="text-red-500">
                        Peraturan Pemerintah No 58 Tahun 2023
                      </p>
                      <div className="grid grid-cols-9">
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel htmlFor={field.name}>
                                Tarif TER
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-center items-end col-span-1">
                          <span className="text-lg mb-2">x</span>
                        </div>
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full col-span-3">
                              <FormLabel htmlFor={field.name}>
                                Penghasilan Bruto
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-center items-end col-span-1">
                          <span className="text-lg mb-2">=</span>
                        </div>
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full col-span-3">
                              <FormLabel htmlFor={field.name}>PPh 21</FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <h2 className="text-center font-medium text-sm mt-9 mb-3 py-2 bg-blue-200 rounded-md w-80 mx-auto">
                        Wajib Pajak Tidak Memiliki NPWP
                      </h2>
                      <p className="text-red-500 mb-3">
                        Peraturan DJP Nomor: PER-16/PJ/2016
                      </p>
                      <div className="grid grid-cols-9">
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  readOnly
                                  value={'20%'}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-center items-end col-span-1">
                          <span className="text-lg mb-2">x</span>
                        </div>
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full col-span-3">
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-center items-end col-span-1">
                          <span className="text-lg mb-2">=</span>
                        </div>
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full col-span-3">
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Results form={form} />
              </Form>
            </Card>
          </TabsContent>
          <TabsContent value="desember">
            <Card className="bg-white border border-gray-300 p-3 rounded-xl mt-5 pb-5">
              <h1 className="mt-3 mb-4 text-center font-bold text-lg">
                Pegawai Tetap Bulanan Masa Desember
              </h1>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}></form>
                <LaborData form={form} />
                <div className="grid grid-cols-2 gap-x-9">
                  <Card className="border border-gray-300 shadow-md">
                    <h1 className="text-center font-bold text-sm mb-3 pt-3">
                      Penghasilan Bruto
                    </h1>
                    <CardContent>
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>
                              Penghasilan Bruto Kumulatif Jan-Nov
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Rp. "
                                className="border border-gray-400"
                                {...field}
                                readOnly
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormLabel>Penghasilan Bruto Desember :</FormLabel>
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>Gaji</FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>
                              Tunjangan
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>
                              Tunjangan Hari raya (THR)
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>Bonus</FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>Lembur</FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>
                              Premi JKK dan JKM Dibayar BUMDes
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full grid grid-cols-2 items-center">
                            <FormLabel htmlFor={field.name}>
                              Total Bruto Disetahunkan
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                placeholder="Rp"
                                readOnly
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  <div className="space-y-9">
                    <Card className="border border-gray-300 shadow-md">
                      <h1 className="text-center font-bold text-sm mb-3 pt-3">
                        Perhitungan Neto
                      </h1>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full grid grid-cols-2 items-center">
                              <FormLabel htmlFor={field.name}>
                                Biaya Jabatan
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Rp. "
                                  className="border border-gray-400"
                                  {...field}
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full grid grid-cols-2 items-center">
                              <FormLabel htmlFor={field.name}>
                                Iuran Setahun Dibayar Pegawai
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  placeholder="Rp"
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full grid grid-cols-2 items-center">
                              <FormLabel htmlFor={field.name}>
                                Premi Setahun Dibayar Pegawai
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  placeholder="Rp"
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full grid grid-cols-2 items-center">
                              <FormLabel htmlFor={field.name}>
                                Penghasilan Neto Setahun
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  placeholder="Rp"
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                    <Card className="border border-gray-300 shadow-md">
                      <h1 className="text-center font-bold text-sm mb-3 pt-3">
                        Perhitungan Pajak Kena Pajak (PKP)
                      </h1>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full grid grid-cols-2 items-center">
                              <FormLabel htmlFor={field.name}>
                                Penghasilan Tidak Kena Pajak
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Rp. "
                                  className="border border-gray-400"
                                  {...field}
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full grid grid-cols-2 items-center">
                              <FormLabel htmlFor={field.name}>
                                Penghasilan Kena Pajak Setahun
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  placeholder="Rp"
                                  readOnly
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <Card className=" mt-9 mb-9 pt-6 pb-3 px-3">
                  <h1 className="text-center font-bold text-sm mb-3">
                    Perhitungan Pajak PPh 21
                  </h1>
                  <div className="grid grid-cols-2 gap-x-9">
                    <Card className="p-3 border border-gray-300 shadow-md">
                      <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
                        Wajib Pajak Memiliki NPWP
                      </h2>
                      <p className="my-2 text-red-500">
                        Tarif Pasal 17 ayat (1a) :
                      </p>
                      <div className="space-y-3">
                        <div className="grid grid-cols-9">
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                    value={'5%'}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">x</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">=</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-9">
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                    value={'15%'}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">x</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">=</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-9">
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                    value={'25%'}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">x</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">=</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-9">
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                    value={'30%'}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">x</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">=</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-9">
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                    value={'35%'}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">x</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">=</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </Card>
                    <Card className="p-3 border border-gray-300 shadow-md">
                      <h2 className="text-center font-medium text-sm py-2 bg-blue-200 rounded-md w-80 mx-auto">
                        Wajib Pajak Tidak Memiliki NPWP
                      </h2>
                      <p className="my-2 text-red-500">
                        Peraturan DJP Nomor: PER-16/PJ/2016 :
                      </p>
                      <div className="space-y-3">
                        <div className="grid grid-cols-9">
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                    value={'20%'}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">x</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-center items-end col-span-1">
                            <span className="text-lg mb-2">=</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="ptkp"
                            render={({ field }) => (
                              <FormItem className="w-full col-span-3">
                                <FormControl>
                                  <Input
                                    className="border border-gray-400"
                                    {...field}
                                    readOnly
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
                <Card className="border border-gray-300 shadow-md">
                  <h1 className="text-center font-bold text-sm mb-3 pt-3">
                    PPh 21 Yang Harus Dipotong Di Bulan Desember
                  </h1>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="ptkp"
                      render={({ field }) => (
                        <FormItem className="w-full grid grid-cols-2 items-center">
                          <FormLabel htmlFor={field.name}>
                            PPh 21 Terutang Setahun
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Rp"
                              className="border border-gray-400"
                              {...field}
                              readOnly
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ptkp"
                      render={({ field }) => (
                        <FormItem className="w-full grid grid-cols-2 items-center">
                          <FormLabel htmlFor={field.name}>
                            PPh 21 Yang Telah Dipotong Sampai Dengan Bulan
                            November
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="border border-gray-400"
                              {...field}
                              placeholder="Rp"
                              readOnly
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ptkp"
                      render={({ field }) => (
                        <FormItem className="w-full grid grid-cols-2 items-center">
                          <FormLabel htmlFor={field.name}>
                            PPh 21 Yang Telah Dipotong Sampai Dengan Bulan
                            Desember
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="border border-gray-400"
                              {...field}
                              placeholder="Rp"
                              readOnly
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
                <Results form={form} />
              </Form>
            </Card>
          </TabsContent>
        </Tabs>

        {/* <section className="grid grid-cols-2 gap-4">
          <div>
            <LaborData data={laborData} />
            <Premi data={premi} />
            <Dues data={dues} />
          </div>
          <div>
            <PPh21Calculation data={pph21Calculation} />
            <PPh21RateAYear />
          </div>
        </section> */}
      </section>
      <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
        <Button>Hitung</Button>
        <Button>Simpan</Button>
      </div>
    </Layout>
  );
}
