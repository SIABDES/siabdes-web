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
import {
  PermanentEmployeeFormData,
  PermanentEmployeeSchema,
} from '@/types/pph21/permanent-employee/permanent-employee';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function OneTime() {
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
            Pesangon - Dibayar Sekaligus
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
                    <FormLabel htmlFor={field.name}>
                      Jumlah Penghasilan
                    </FormLabel>
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
            <Card className=" mt-9 mb-9 pt-6 pb-3 px-3">
              <h1 className="text-center font-bold text-sm mb-3">
                Perhitungan Pajak PPh 21
              </h1>
              <CardContent>
                <p className="my-2">Peraturan Pemerintah No 68 Tahun 2009</p>
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
                </div>
              </CardContent>
            </Card>
            <Results form={form} />
          </Form>
        </Card>
      </section>
      <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
        <Button>Hitung</Button>
        <Button>Simpan</Button>
      </div>
    </Layout>
  );
}
