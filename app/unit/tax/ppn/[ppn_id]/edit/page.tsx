"use client";

import Layout from "@/components/layout/layout";
import PPNCalculationForm from "@/components/pages/tax/ppn-calculation-form";
import PpnTransactionsForm from "@/components/pages/tax/ppn-transaction-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast, useToast } from "@/components/ui/use-toast";
import { useEditPPN } from "@/hooks/ppn/useEditPPN";
import useGetPPNDetails from "@/hooks/ppn/useGetPPNDetails";
import {
  CreatePPNFormData,
  CreatePPNSchema,
  PpnObjectItemSchema,
  UpdatePPNFormData,
  UpdatePPNSchema,
} from "@/types/ppn/dto";
import { PpnTransactionType } from "@/types/ppn/ppn";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { da } from "date-fns/locale";
import { PlusCircleIcon } from "lucide-react";
import { Update } from "next/dist/build/swc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export default function EditPPN({ params }: { params: { ppn_id: string } }) {
  const [evidence, setEvidence] = useState<File | null>(null);
  const { toast } = useToast();
  const router = useRouter();
  const {
    data: details,
    isLoading: isDetailsLoading,
    refetch: refetchDetails,
  } = useGetPPNDetails({ params });

  const form = useForm<UpdatePPNFormData>({
    resolver: zodResolver(UpdatePPNSchema),
    defaultValues: {
      given_to: "",
      item_type: undefined,
      transaction_date: undefined,
      transaction_type: undefined,
      transaction_number: "",
      tax_object: undefined,
      object_items: [],
    },
  });

  // useEffect(() => {
  //   const transactionTypeWatch = form.watch('transaction_type');
  //   const TransactionType = form.getValues(transactionTypeWatch);
  //   form.setValue('transaction_type', TransactionType);
  // }, [form]);

  const transactionTypeWatch = form.watch("transaction_type");
  useEffect(() => {
    console.log("transactionTypeWatch", transactionTypeWatch);
  }, [transactionTypeWatch]);

  useEffect(() => {
    if (details) {
      // form.setValue('transaction_number', details.transaction_number);
      // form.setValue('transaction_date', new Date(details.transaction_date));
      // form.setValue('transaction_type', details.transaction_type);
      // form.setValue('item_type', details.item_type);
      // form.setValue('given_to', details.given_to);
      // form.setValue('tax_object', details.tax_object);
      // form.setValue(
      //   'object_items',
      //   details.objects.map((item) => ({
      //     name: item.name,
      //     discount: item?.discount,
      //     dpp: item.dpp,
      //     ppn: item.ppn,
      //     price: item.price,
      //     quantity: item.quantity,
      //     total_price: item.total_price,
      //   }))
      // );
      form.reset({
        transaction_number: details.transaction_number,
        transaction_date: new Date(details.transaction_date),
        transaction_type: details.transaction_type,
        item_type: details.item_type,
        given_to: details.given_to,
        tax_object: details.tax_object,
        object_items: details.objects.map((item) => ({
          name: item.name,
          discount: item?.discount,
          dpp: item.dpp,
          ppn: item.ppn,
          price: item.price,
          quantity: item.quantity,
          total_price: item.total_price,
        })),
      });
    }
  }, [form, details]);

  const objectItemArray = useFieldArray({
    control: form.control,
    name: "object_items",
    rules: {
      minLength: 1,
    },
  });

  const handleRemoveItem = (index: number) => {
    objectItemArray.remove(index);
  };

  const handleAddItem = () => {
    objectItemArray.append({
      name: "",
      discount: 0,
      dpp: 0,
      ppn: 0,
      price: 0,
      quantity: 0,
      total_price: 0,
    });
  };

  const { mutateAsync: mutateEditPPN, isPending: isMutateEditPPNPending } =
    useEditPPN({ ppn_id: params.ppn_id });

  const onSubmit = async (data: UpdatePPNFormData) => {
    try {
      const validatedData = UpdatePPNSchema.safeParse(data);

      console.log("data", data);

      if (!validatedData.success) {
        toast({
          title: "Terjadi kesalahan",
          description: "Mohon periksa kembali inputan anda..",
          variant: "destructive",
        });
        return;
      }

      await mutateEditPPN(
        { data, evidence },
        {
          onSettled: () => {
            toast({
              title: "Mengubah data PPN",
              description: `Data Sedang diubah...`,
            });
          },
          onSuccess: () => {
            toast({
              title: "Berhasil mengubah data PPN",
              description: `Data berhasil diubah...`,
            });
          },
          onError: () => {
            toast({
              title: "Gagal mengubah data PPN",
              description: `Data gagal diubah...`,
            });
          },
        }
      );

      router.push(`/unit/tax/ppn/${params.ppn_id}/details`);
    } catch (error) {
      toast({
        title: "Gagal mengubah data PPN",
        description: `Data gagal diubah...`,
        duration: 5000,
      });
    }
  };
  return (
    <Layout>
      <Link href={`/unit/tax/ppn/${params.ppn_id}/details`} className="w-fit">
        <Button variant={"ghost"}>
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
                {form.getValues("object_items")?.map((_, index) => (
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
