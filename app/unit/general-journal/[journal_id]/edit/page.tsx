"use client";

import { addArrayObjectToFormData } from "@/common/helpers/multipart-form";
import Layout from "@/components/layout/layout";
import GeneralJournalEssentialsForm from "@/components/pages/journals/form/general-journal-essentials-form";
import JournalTransactionsContainerForm from "@/components/pages/journals/form/journal-transactions-container-form";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { useGetAccounts } from "@/hooks/account/useGetAccounts";
import { useEditJournal } from "@/hooks/journals/useEditJournal";
import { useGetJournalDetails } from "@/hooks/journals/useGetJournalDetails";
import {
  JournalInputItem,
  JournalInputItemSchema,
  JournalTransactionFormDataType,
} from "@/types/journals";
import { ChevronDownIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function EditGeneralJournalPage({
  params,
}: {
  params: { journal_id: string };
}) {
  const { toast } = useToast();
  const router = useRouter();

  const {
    data: details,
    isLoading: isDetailsLoading,
    refetch: refetchDetails,
  } = useGetJournalDetails({
    params,
  });

  const [transactions, setTransactions] = useState<
    JournalTransactionFormDataType[]
  >([]);
  const [evidence, setEvidence] = useState<File | null>(null);
  const [occurred_at, setOccurredAt] = useState<Date | undefined>(new Date());
  const [description, setDescription] = useState<string | null>(null);

  const { data: accounts } = useGetAccounts();

  const initializeTransactions = useCallback(() => {
    if (!details?.data_transactions) {
      return;
    }

    const transactions: JournalTransactionFormDataType[] =
      details.data_transactions.map((transaction) => {
        return {
          unique_id: nanoid(),
          account_id: transaction.account_id,
          debit: transaction.is_credit ? 0 : transaction.amount,
          credit: transaction.is_credit ? transaction.amount : 0,
        };
      });

    setTransactions(transactions);
    setOccurredAt(new Date(details.occured_at));
    setDescription(details.description);
  }, [details?.data_transactions, details?.description, details?.occured_at]);

  useEffect(() => {
    if (details?.data_transactions && !isDetailsLoading) {
      initializeTransactions();
    }
  }, [details?.data_transactions, initializeTransactions, isDetailsLoading]);

  const isTransactionsBalance = useMemo(() => {
    const totalDebit = transactions.reduce((acc, curr) => {
      return acc + curr.debit;
    }, 0);

    const totalCredit = transactions.reduce((acc, curr) => {
      return acc + curr.credit;
    }, 0);

    return totalDebit === totalCredit && (totalDebit > 0 || totalCredit > 0);
  }, [transactions]);

  const {
    mutateAsync: mutateEditJournal,
    isPending: isMutateEditJournalPending,
  } = useEditJournal({ journal_id: params.journal_id });

  const handleMutation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isTransactionsBalance) {
      return;
    }

    const formData = new FormData();

    const data_transactions: JournalInputItem[] = transactions.map(
      (transaction) =>
        JournalInputItemSchema.parse({
          account_id: transaction.account_id,
          amount: transaction.debit || transaction.credit,
          is_credit: transaction.credit > 0,
        })
    );

    formData.append("description", description ?? "");
    formData.append("occurred_at", occurred_at?.toISOString() ?? "");
    if (evidence) {
      formData.append("evidence", evidence);
    }
    addArrayObjectToFormData(formData, data_transactions, "data_transactions");

    void mutateEditJournal(formData, {
      onSuccess: () => {
        toast({
          title: "Status Edit Jurnal Umum",
          description: "Jurnal umum berhasil ditambahkan",
          duration: 5000,
        });

        router.push(`/unit/general-journal/${params.journal_id}/details`);
      },
      onError: (err) => {
        toast({
          title: "Gagal mengedit data jurnal umum",
          description: err.message,
          variant: "destructive",
          duration: 5000,
        });
      },
    });
  };

  return (
    <Layout>
      <Link
        href={`/unit/general-journal/${params.journal_id}/details`}
        className="w-fit"
      >
        <Button variant={"ghost"}>
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Kembali
        </Button>
      </Link>

      <h5 className="font-semibold mt-4">Edit General Journal Page</h5>

      <GeneralJournalEssentialsForm
        description={description}
        setDescription={setDescription}
        occurred_at={occurred_at}
        setOccurredAt={setOccurredAt}
        setEvidence={setEvidence}
      />

      {isDetailsLoading ? (
        <Skeleton className="w-full h-72 pt-8" />
      ) : (
        <JournalTransactionsContainerForm
          accounts={accounts ?? []}
          setTransactions={setTransactions}
          transactions={transactions}
        />
      )}

      <div className="pt-8 inline-flex flex-row gap-x-6">
        <Button
          disabled={!isTransactionsBalance || isMutateEditJournalPending}
          onClick={handleMutation}
        >
          {isMutateEditJournalPending ? (
            <span>Memperbarui Jurnal...</span>
          ) : (
            <span>Simpan Perubahan</span>
          )}
        </Button>

        <Button
          variant={"outline"}
          onClick={() => {
            initializeTransactions();
          }}
        >
          Kembalikan Semula
        </Button>
      </div>
    </Layout>
  );
}
