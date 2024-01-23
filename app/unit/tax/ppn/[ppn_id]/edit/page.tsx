'use client';

import Layout from '@/components/layout/layout';
import PPNCalculationForm from '@/components/pages/tax/ppn-calculation-form';
import PpnTransactionsForm from '@/components/pages/tax/ppn-transaction-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast, useToast } from '@/components/ui/use-toast';
import { useEditPPN } from '@/hooks/ppn/useEditPPN';
import useGetPPNDetails from '@/hooks/ppn/useGetPPNDetails';
import {
  CreatePPNFormData,
  CreatePPNSchema,
  PpnObjectItemSchema,
  UpdatePPNFormData,
  UpdatePPNRequest,
} from '@/types/ppn/dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { PlusCircleIcon } from 'lucide-react';
import { Update } from 'next/dist/build/swc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

export default function EditPPN({ params }: { params: { ppn_id: string } }) {
  const [evidence, setEvidence] = useState<File | null>(null);
  const { toast } = useToast();
  const router = useRouter();
  const {
    data: details,
    isLoading: isDetailsLoading,
    refetch: refetchDetails,
  } = useGetPPNDetails({ params });

  const { mutateAsync: mutateEditPPN, isPending: isMutateEditPPNPending } =
    useEditPPN({ ppn_id: params.ppn_id });

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
  //   const handleMutation = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     const form = document.querySelector('form');
  //     const formData = new FormData(form);
  //     mutateEditPPN(formData, {
  //       onSuccess: (data) => {
  //         toast.success('Berhasil mengubah data PPN');
  //         router.push(`/unit/tax/ppn/${params.ppn_id}/details`);
  //       },
  //       onError: (error) => {
  //         toast.error('Gagal mengubah data PPN');
  //       },
  //     });
  //   };

  const onSubmit = async (data: CreatePPNFormData) => {};
  return (
    <Layout>
      <Link href={`/unit/tax/ppn/${params.ppn_id}/details`} className="w-fit">
        <Button variant={'ghost'}>
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Kembali
        </Button>
      </Link>

      <h5 className="font-semibold mt-4 mb-4 ml-1">
        Edit Pajak Pertambahan Nilai (PPN)
      </h5>

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

          {/* <TaxInformation /> */}

          <div className="pt-8">
            <Button type="submit">Simpan</Button>
          </div>
        </form>
      </Form>
    </Layout>
  );
}
