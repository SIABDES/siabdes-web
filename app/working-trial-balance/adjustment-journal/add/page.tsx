"use client";

import React, { useEffect, useMemo, useState } from "react";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/hooks/account/useGetAccounts";
import JournalTransactionsForm from "@/components/pages/journals/journal-transactions-form";
import NewTransactionForm from "@/components/pages/journals/new-transaction-form";
import { JournalTransactionFormDataType } from "@/types/journals";
import { nanoid } from "nanoid";
import FormInput from "@/components/patan-ui/form/form-input";
import FormDateInput from "@/components/patan-ui/form/form-date-input";
import { useAddAdjustmentJournal } from "@/hooks/journals/useAddAdjustmentJournal";

export default function AddAdjustmentJournal() {
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

  useEffect(() => {
    console.log({ isTransactionsBalance });
  }, [transactions]);

  const { mutateAsync: addAdjustmentJournal } = useAddAdjustmentJournal();

  return (
    <Layout>
      <div className="grid grid-flow-col gap-x-8">
        <div className="col-span-6">
          <FormInput
            name="deskripsi"
            type="text"
            label="Deskripsi"
            placeholder="contoh: Penyesuaian Bahan Baku"
            onChange={(e) => setDescription(e.target.value)}
            value={description ?? ""}
          />
        </div>

        <div className="col-span-6">
          <FormDateInput
            setValue={setOccurredAt}
            value={occurred_at}
            placeholder="Pilih tanggal transaksi"
            label="Tanggal Transaksi"
          />
        </div>
      </div>

      <div className="pt-8">
        <p>Data Transaksi</p>

        {transactions.map((transaction, index) => (
          <JournalTransactionsForm
            key={transaction.unique_id}
            index={index + 1}
            transaction={transaction}
            accounts={accounts ?? []}
            setTransactions={setTransactions}
            isAbleToDelete={transactions.length > 2}
          />
        ))}
      </div>

      <NewTransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <div className="pt-8">
        <Button disabled={!isTransactionsBalance}>Tambah Jurnal</Button>
      </div>
    </Layout>
  );
}
