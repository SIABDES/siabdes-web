import { Card, CardContent } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NonPermanentEmployeeNotMonthlyFormData } from '@/types/pph21/temporary-employee/temporary-employee';
import React from 'react';
import { useForm } from 'react-hook-form';
import { formatRupiah } from '@/common/helpers/number-format';

interface MoreThan2500Props {
  form: ReturnType<typeof useForm<NonPermanentEmployeeNotMonthlyFormData>>;
}
export default function MoreThan2500({ form }: MoreThan2500Props) {
  return (
    <div>
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
              name="constants.tariff_ter"
              render={({ field }) => (
                <FormItem className="w-full flex items-end">
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      readOnly
                      value={`${50}%`}
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
              name="calculations.salary_more_2500"
              render={({ field }) => (
                <FormItem className="w-full col-span-3">
                  <FormLabel htmlFor={field.name}>Penghasilan Bruto</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(
                        form.getValues('calculations.salary_more_2500')
                      )}
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
              name="calculations.pph21_has_npwp_more_then_2500"
              render={({ field }) => (
                <FormItem className="w-full col-span-3 text-center">
                  <FormLabel htmlFor={field.name}>PKP</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      {...field}
                      value={formatRupiah(
                        form.getValues(
                          'calculations.pph21_has_npwp_more_then_2500'
                        )
                      )}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="my-2 text-red-500">Tarif Pasal 17 ayat (1a) :</p>
          <div className="space-y-3">
            <div className="grid grid-cols-9">
              <FormField
                control={form.control}
                name="constants.tariff_chapter_17_5_percent"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={`${5}%`}
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
                name="calculations.pph21_chapter_17_5_percent"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={formatRupiah(
                          form.getValues(
                            'calculations.pph21_chapter_17_5_percent'
                          )
                        )}
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
                name="calculations.total_pph21_chapter_17_5_percent"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={formatRupiah(
                          form.getValues(
                            'calculations.total_pph21_chapter_17_5_percent'
                          )
                        )}
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
                name="constants.tariff_chapter_17_15_percent"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={`${15}%`}
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
                name="calculations.pph21_chapter_17_15_percent"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={formatRupiah(
                          form.getValues(
                            'calculations.pph21_chapter_17_15_percent'
                          )
                        )}
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
                name="calculations.total_pph21_chapter_17_15_percent"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={formatRupiah(
                          form.getValues(
                            'calculations.total_pph21_chapter_17_15_percent'
                          )
                        )}
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
                name="constants.tariff_chapter_17_25_percent"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={`${25}%`}
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
                name="calculations.pph21_chapter_17_25_percent"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={formatRupiah(
                          form.getValues(
                            'calculations.pph21_chapter_17_25_percent'
                          )
                        )}
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
                name="calculations.total_pph21_chapter_17_25_percent"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={formatRupiah(
                          form.getValues(
                            'calculations.total_pph21_chapter_17_25_percent'
                          )
                        )}
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
                name="constants.tariff_chapter_17_30_percent"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={`${30}%`}
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
                name="calculations.pph21_chapter_17_30_percent"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={formatRupiah(
                          form.getValues(
                            'calculations.pph21_chapter_17_30_percent'
                          )
                        )}
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
                name="calculations.total_pph21_chapter_17_30_percent"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={formatRupiah(
                          form.getValues(
                            'calculations.total_pph21_chapter_17_30_percent'
                          )
                        )}
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
                name="constants.tariff_chapter_17_35_percent"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={`${35}%`}
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
                name="calculations.pph21_chapter_17_35_percent"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={formatRupiah(
                          form.getValues(
                            'calculations.pph21_chapter_17_35_percent'
                          )
                        )}
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
                name="calculations.total_pph21_chapter_17_35_percent"
                render={({ field }) => (
                  <FormItem className="w-full col-span-3">
                    <FormControl>
                      <Input
                        className="border border-gray-400"
                        {...field}
                        value={formatRupiah(
                          form.getValues(
                            'calculations.total_pph21_chapter_17_35_percent'
                          )
                        )}
                        readOnly
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
    </div>
  );
}
