'use client';

import Layout from '@/components/layout/layout';
import LaborData from '@/components/pages/pph21/general/labor-data';
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
import {
  PermanentEmployeeFormData,
  PermanentEmployeeSchema,
} from '@/types/pph21/permanent-employee/permanent-employee';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function NotPaidMonthly() {
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
            <Link href={'/unit/tax/pph21'}>
              <Button>Kembali</Button>
            </Link>
          </div>
        </div>
        <Card className="bg-white border border-gray-300 p-3 rounded-xl mt-5 pb-5">
          <h1 className="mt-3 mb-4 text-center font-bold text-lg">
            Pegawai Tidak Tetap - Tidak Dibayar Bulanan / Upah Harian
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}></form>
            <LaborData form={form} />
            <Card className="w-1/3 mb-9">
              <FormField
                control={form.control}
                name="ptkp"
                render={({ field }) => (
                  <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
                    <FormLabel htmlFor={field.name}>Upah harian</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-400 bg-[#E5F5FC]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Card>
            <Card>
              <h1 className="text-center font-bold text-sm pt-3">
                Perhitungan PPh 21
              </h1>
              <div className="grid grid-cols-2 gap-x-9 mt-6 p-3">
                <div className="grid gap-y-6">
                  <Card>
                    <h1 className="text-center font-bold text-sm mb-3 pt-3">
                      Upah Harian ≤ 450.000
                    </h1>
                    <CardContent>
                      <div className="grid grid-cols-10">
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full col-span-2">
                              <FormLabel htmlFor={field.name}>
                                Tarif TER
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  disabled
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
                                Upah Harian
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  disabled
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
                                  disabled
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <h1 className="text-center font-bold text-sm mb-3 pt-3">
                      Upah Harian {`>`} 450.000 - 2.500.000
                    </h1>
                    <CardContent>
                      <div className="grid grid-cols-10">
                        <FormField
                          control={form.control}
                          name="ptkp"
                          render={({ field }) => (
                            <FormItem className="w-full col-span-2">
                              <FormLabel htmlFor={field.name}>
                                Tarif TER
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  disabled
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
                                Upah Harian
                              </FormLabel>
                              <FormControl>
                                <Input
                                  className="border border-gray-400"
                                  {...field}
                                  disabled
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
                                  disabled
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
                <Card>
                  <h1 className="text-center font-bold text-sm mb-3 pt-3">
                    Upah Harian ≥ 2.500.000
                  </h1>
                  <CardContent>
                    <h2 className="text-center font-medium text-sm mt-3 mb-3 py-2 bg-blue-200 rounded-md w-80 mx-auto">
                      Penghasilan Kena Pajak
                    </h2>
                    <div className="grid grid-cols-9">
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full flex items-end">
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                disabled
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
                                disabled
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
                                disabled
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <p className="my-2">Tarif Pasal 17 ayat (1a) :</p>
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
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
                                  disabled
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-2 mt-6">
                  <CardContent>
                    <h2 className="text-center font-medium text-sm mt-3 mb-3 py-2 bg-blue-200 rounded-md w-80 mx-auto">
                      Wajib Pajak Tidak Memiliki NPWP
                    </h2>
                    <div className="grid grid-cols-12">
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full col-span-2 items-center">
                            <FormLabel htmlFor={field.name}>
                              Peraturan DJB Nomor
                            </FormLabel>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ptkp"
                        render={({ field }) => (
                          <FormItem className="w-full col-span-2">
                            <FormControl>
                              <Input
                                className="border border-gray-400"
                                {...field}
                                disabled
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
                                disabled
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
                                disabled
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
            </Card>
            <div className="grid grid-cols-3 gap-x-9 mt-9">
              <Card>
                <FormField
                  control={form.control}
                  name="ptkp"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
                      <FormLabel htmlFor={field.name}>
                        Jumlah Penghasilan
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border border-gray-400 bg-[#E5F5FC]"
                          {...field}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>
              <Card>
                <FormField
                  control={form.control}
                  name="ptkp"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
                      <FormLabel htmlFor={field.name}>Jumlah PPh 21</FormLabel>
                      <FormControl>
                        <Input
                          className="border border-gray-400 bg-[#E5F5FC]"
                          {...field}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>
              <Card>
                <FormField
                  control={form.control}
                  name="ptkp"
                  render={({ field }) => (
                    <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
                      <FormLabel htmlFor={field.name}>
                        Penerimaan Bersih
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border border-gray-400 bg-[#E5F5FC]"
                          {...field}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>
            </div>
          </Form>
        </Card>
        <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
          <Button>Hitung</Button>
          <Button>Simpan</Button>
        </div>
      </section>
    </Layout>
  );
}
