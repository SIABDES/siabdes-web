"use client";

import { JournalTransactionFormDataType } from "@/types/journals";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { nanoid } from "nanoid";

interface NewTransactionFormProps {
  transactions: JournalTransactionFormDataType[];
  setTransactions: React.Dispatch<
    React.SetStateAction<JournalTransactionFormDataType[]>
  >;
}

export default function NewTransactionForm(props: NewTransactionFormProps) {
  const handleAddTransaction = () => {
    props.setTransactions([
      ...props.transactions,
      { unique_id: nanoid(3), account_id: undefined, debit: 0, credit: 0 },
    ]);
  };

  return (
    <button
      className="border w-full py-6 mt-8 group hover:border-primary rounded-md"
      onClick={handleAddTransaction}
    >
      <p className="text-muted-foreground group-hover:text-primary font-medium">
        <span className="flex items-center justify-center gap-x-4">
          <PlusCircledIcon className="h-5 w-5" />
          Tambah Data Transaksi
        </span>
      </p>
    </button>
  );
}
