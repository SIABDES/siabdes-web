import { ScrollArea } from "@/components/ui/scroll-area";
import { AccountType } from "@/types/accounts";
import {
  AddGeneralJournalRequest,
  JournalTransactionFormDataType,
} from "@/types/journals";
import JournalTransactionsForm from "../journal-transactions-form";
import NewTransactionForm from "../new-transaction-form";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { useMemo } from "react";

interface JournalTransactionsFormProps {
  form: UseFormReturn<AddGeneralJournalRequest>;
  accounts: AccountType[];
}

export default function JournalTransactionsContainerForm({
  accounts,
  form,
}: JournalTransactionsFormProps) {
  const {
    fields: transactions,
    append,
    remove,
    update,
  } = useFieldArray({
    control: form.control,
    name: "data_transactions",
    rules: {
      minLength: 2,
    },
  });

  return (
    <>
      <p className="pt-8">Data Transaksi</p>
      <ScrollArea className="h-1/2 w-full">
        <div className="flex flex-col gap-y-6">
          {transactions.map((transaction, index) => (
            <JournalTransactionsForm
              key={transaction.id}
              form={form}
              index={index}
              remove={remove}
              accounts={accounts}
              update={update}
              isDeleteAble={transactions.length > 2}
            />
          ))}
        </div>

        <NewTransactionForm append={append} />
      </ScrollArea>
    </>
  );
}
