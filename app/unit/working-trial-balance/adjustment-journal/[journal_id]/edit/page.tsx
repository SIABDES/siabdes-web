"use client";

import { addArrayObjectToFormData } from "@/common/helpers/multipart-form";
import Layout from "@/components/layout/layout";
import AdjustmentJournalEssentialsForm from "@/components/pages/journals/form/adjustment-journal-essentials-form";
import JournalTransactionsContainerForm from "@/components/pages/journals/form/journal-transactions-container-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAccounts } from "@/hooks/account/useGetAccounts";
import { useEditJournal } from "@/hooks/journals/useEditJournal";
import { useGetJournalDetails } from "@/hooks/journals/useGetJournalDetails";
import {
  MutationJournalRequestSchema,
  JournalCategory,
  JournalInputItem,
  JournalInputItemOld,
  MutationJournalRequest,
} from "@/types/journals";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface EditAdjustmentJournalProps {
  params: { journal_id: string };
}

export default function EditAdjustmentJournal({
  params,
}: EditAdjustmentJournalProps) {
  const form = useForm<MutationJournalRequest>({
    resolver: zodResolver(MutationJournalRequestSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      description: "",
      occurred_at: undefined,
      data_transactions: [],
    },
  });
  const { formState, reset } = form;

  const {
    data: details,
    isLoading: isDetailsLoading,
    refetch: refetchDetails,
  } = useGetJournalDetails({
    params,
  });

  const { data: accounts } = useGetAccounts();
  const {
    mutateAsync: mutateGeneralJournal,
    isPending: isMutateGeneralJournalPending,
  } = useEditJournal({
    journal_id: params.journal_id,
    category: JournalCategory.ADJUSTMENT,
  });

  const { data_transactions: data_transactions_errors } = formState.errors;

  useEffect(() => {
    if (details) {
      reset({
        description: details.description,
        occurred_at: new Date(details.occurred_at),
        data_transactions: details.data_transactions.map((transaction) => ({
          account_id: transaction.account_id,
          debit: transaction.is_credit ? 0 : transaction.amount,
          credit: transaction.is_credit ? transaction.amount : 0,
        })),
      });
    }
  }, [details, reset]);

  useEffect(() => {
    if (data_transactions_errors?.root) {
      toast.error("Kesalahan Input!", {
        description: data_transactions_errors.root.message,
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

    await mutateGeneralJournal(formData);
  };

  return (
    <Layout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Button variant={"outline"} asChild>
            <Link
              href={
                "/unit/working-trial-balance/adjustment-journal/{journal_id}/details"
              }
              as={`/unit/working-trial-balance/adjustment-journal/${params.journal_id}/details`}
            >
              Kembali
            </Link>
          </Button>

          <h5 className="text-base font-semibold pb-8 mt-4">
            Edit Jurnal Penyesuaian
          </h5>

          {isDetailsLoading && (
            <>
              <Skeleton className="w-full h-72 pt-8" />
            </>
          )}

          {!isDetailsLoading && !details && (
            <div>
              <h6>Terjadi Kesalahan</h6>
              <p>Terjadi kesalahan saat mengambil data jurnal penyesuaian</p>
            </div>
          )}

          {!isDetailsLoading && details && (
            <>
              <AdjustmentJournalEssentialsForm form={form} />

              <JournalTransactionsContainerForm
                form={form}
                accounts={accounts ?? []}
              />

              <div className="pt-8">
                <Button type="submit" disabled={isMutateGeneralJournalPending}>
                  {isMutateGeneralJournalPending ? (
                    <span>Menambahkan...</span>
                  ) : (
                    <span>Simpan Perubahan Jurnal</span>
                  )}
                </Button>
              </div>
            </>
          )}
        </form>
      </Form>
    </Layout>
  );
}
