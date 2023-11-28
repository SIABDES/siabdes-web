"use client";

import { JournalTransactionFormDataType } from "@/types/journals";
import { PlusCircleIcon } from "lucide-react";

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
          <PlusCircleIcon size={18} />
          Tambah Data Transaksi
        </span>
      </p>
    </button>
  );
}
