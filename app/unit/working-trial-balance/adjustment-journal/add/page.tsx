"use client";

import { addArrayObjectToFormData } from "@/common/helpers/multipart-form";
import Layout from "@/components/layout/layout";
import AdjustmentJournalEssentialsForm from "@/components/pages/journals/form/adjustment-journal-essentials-form";
import GeneralJournalEssentialsForm from "@/components/pages/journals/form/general-journal-essentials-form";
import JournalTransactionsContainerForm from "@/components/pages/journals/form/journal-transactions-container-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useGetAccounts } from "@/hooks/account/useGetAccounts";
import { useAddAdjustmentJournal } from "@/hooks/journals/useAddAdjustmentJournal";
import { useAddGeneralJournal } from "@/hooks/journals/useAddGeneralJournal";
import {
  MutationJournalRequest,
  MutationJournalRequestSchema,
  JournalInputItemOld,
} from "@/types/journals";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AddJournal() {
  const form = useForm<MutationJournalRequest>({
    resolver: zodResolver(MutationJournalRequestSchema),
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

  const { data: accounts } = useGetAccounts();
  const { mutateAsync: mutateJournal, isPending: isMutateJournalPending } =
    useAddAdjustmentJournal();

  const { data_transactions: data_transactions_errors } = formState.errors;

  useEffect(() => {
    if (data_transactions_errors?.root) {
      toast.error("Kesalahan Input!", {
        description: data_transactions_errors?.root.message,
        duration: 3000,
      });
    }
  }, [data_transactions_errors?.root]);

  const onSubmit = async (data: MutationJournalRequest) => {
    const formData = new FormData();

    formData.append("description", data.description);
    formData.append("occurred_at", data.occurred_at?.toISOString() ?? "");

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

    await mutateJournal(formData);
  };

  return (
    <Layout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Button variant={"outline"} asChild>
            <Link href="/unit/working-trial-balance/adjustment-journal">
              Kembali
            </Link>
          </Button>

          <h5 className="text-base font-semibold pb-8 mt-4">
            Tambah Jurnal Penyesuaian
          </h5>

          <AdjustmentJournalEssentialsForm form={form} />

          <JournalTransactionsContainerForm
            form={form}
            accounts={accounts ?? []}
          />

          <div className="pt-8">
            <Button type="submit" disabled={isMutateJournalPending}>
              {isMutateJournalPending ? (
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
