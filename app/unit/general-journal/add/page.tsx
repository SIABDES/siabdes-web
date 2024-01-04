'use client';

import { addArrayObjectToFormData } from '@/common/helpers/multipart-form';
import Layout from '@/components/layout/layout';
import GeneralJournalEssentialsForm from '@/components/pages/journals/form/general-journal-essentials-form';
import JournalTransactionsContainerForm from '@/components/pages/journals/form/journal-transactions-container-form';
import JournalTransactionsForm from '@/components/pages/journals/journal-transactions-form';
import NewTransactionForm from '@/components/pages/journals/new-transaction-form';
import FormDateInput from '@/components/patan-ui/form/form-date-input';
import FormInput from '@/components/patan-ui/form/form-input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';
import { useGetAccounts } from '@/hooks/account/useGetAccounts';
import { useAddGeneralJournal } from '@/hooks/journals/useAddGeneralJournal';
import {
  JournalInputItem,
  JournalInputItemSchema,
  JournalTransactionFormDataType,
} from '@/types/journals';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';

export default function AddJournal() {
  const { toast } = useToast();
  const router = useRouter();

  const [transactions, setTransactions] = useState<
    JournalTransactionFormDataType[]
  >([
    { unique_id: nanoid(3), account_id: undefined, debit: 0, credit: 0 },
    { unique_id: nanoid(3), account_id: undefined, debit: 0, credit: 0 },
  ]);
  const [evidence, setEvidence] = useState<File | null>(null);
  const [occurred_at, setOccurredAt] = useState<Date | undefined>(new Date());
  const [description, setDescription] = useState<string | null>(null);

  const { data: accounts } = useGetAccounts();

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
    mutateAsync: mutateGeneralJournal,
    isPending: isMutateGeneralJournalPending,
  } = useAddGeneralJournal();

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

    formData.append('description', description ?? '');
    formData.append('occurred_at', occurred_at?.toISOString() ?? '');
    formData.append('evidence', evidence ?? '');
    addArrayObjectToFormData(formData, data_transactions, 'data_transactions');

    void mutateGeneralJournal(formData, {
      onSuccess: () => {
        toast({
          title: 'Status Tambah Jurnal Umum',
          description: 'Jurnal umum berhasil ditambahkan',
          duration: 5000,
        });

        router.push('/unit/general-journal');
      },
      onError: (err) => {
        toast({
          title: 'Gagal menambahkan jurnal umum',
          description: err.message,
          variant: 'destructive',
          duration: 5000,
        });
      },
    });
  };

  return (
    <Layout>
      <h5 className="text-base font-semibold pb-8">Tambah Jurnal Umum</h5>

      <GeneralJournalEssentialsForm
        description={description}
        setDescription={setDescription}
        occurred_at={occurred_at}
        setOccurredAt={setOccurredAt}
        setEvidence={setEvidence}
      />

      <JournalTransactionsContainerForm
        accounts={accounts ?? []}
        setTransactions={setTransactions}
        transactions={transactions}
      />

      <div className="pt-8">
        <Button
          disabled={!isTransactionsBalance || isMutateGeneralJournalPending}
          onClick={handleMutation}
        >
          {isMutateGeneralJournalPending ? (
            <span>Menambahkan...</span>
          ) : (
            <span>Tambah Jurnal</span>
          )}
        </Button>
      </div>
    </Layout>
  );
}