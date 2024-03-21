"use client";

import { addArrayObjectToFormData } from "@/common/helpers/multipart-form";
import Layout from "@/components/layout/layout";
import GeneralJournalEssentialsForm from "@/components/pages/journals/form/general-journal-essentials-form";
import JournalTransactionsContainerForm from "@/components/pages/journals/form/journal-transactions-container-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useGetAccounts } from "@/hooks/account/useGetAccounts";
import { useAddGeneralJournal } from "@/hooks/journals/useAddGeneralJournal";
import {
  MutationJournalRequest,
  AddJournalRequestSchema,
  JournalInputItemOld,
} from "@/types/journals";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function AddJournal() {
  const { toast } = useToast();
  const form = useForm<MutationJournalRequest>({
    resolver: zodResolver(AddJournalRequestSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      description: "",
      occurred_at: undefined,
      data_transactions: [
        {
          account_id: -1,
          credit: 0,
          debit: 0,
        },
        {
          account_id: -1,
          credit: 0,
          debit: 0,
        },
      ],
    },
  });
  const { formState } = form;
  const [evidence, setEvidence] = useState<File | null>(null);

  const { data: accounts } = useGetAccounts();
  const {
    mutateAsync: mutateGeneralJournal,
    isPending: isMutateGeneralJournalPending,
  } = useAddGeneralJournal();

  const { data_transactions: data_transactions_errors } = formState.errors;

  useEffect(() => {
    if (data_transactions_errors?.root) {
      toast({
        title: "Kesalahan Input!",
        description: data_transactions_errors.root.message,
        variant: "destructive",
        duration: 3000,
      });
    }
  }, [data_transactions_errors?.root, toast]);

  const onSubmit = async (data: MutationJournalRequest) => {
    if (!evidence) {
      toast({
        title: "Data tidak valid!",
        description: "Bukti transaksi tidak boleh kosong!",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();

    formData.append("description", data.description);
    formData.append("occurred_at", data.occurred_at?.toISOString() ?? "");
    formData.append("evidence", evidence);

    const dataTransactionsTransformed: JournalInputItemOld[] =
      data.data_transactions.map((transaction) => ({
        account_id: transaction.account_id,
        amount: transaction.debit || transaction.credit,
        is_credit: transaction.credit > 0,
      }));

    addArrayObjectToFormData(
      formData,
      dataTransactionsTransformed,
      "data_transactions"
    );

    await mutateGeneralJournal(formData);
  };

  return (
    <Layout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Button variant={"outline"} asChild>
            <Link href="/unit/general-journal">Kembali</Link>
          </Button>

          <h5 className="text-base font-semibold pb-8 mt-4">
            Tambah Jurnal Umum
          </h5>

          <GeneralJournalEssentialsForm form={form} setEvidence={setEvidence} />

          <JournalTransactionsContainerForm
            form={form}
            accounts={accounts ?? []}
          />

          <div className="pt-8">
            <Button type="submit" disabled={isMutateGeneralJournalPending}>
              {isMutateGeneralJournalPending ? (
                <span>Menambahkan...</span>
              ) : (
                <span>Tambah Jurnal</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </Layout>
  );
}
