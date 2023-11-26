"use client";

import { JournalTransactionFormDataType } from "@/types/journals";
import { PlusCircledIcon } from "@radix-ui/react-icons";

interface NewTransactionFormProps {
  transactions: JournalTransactionFormDataType[];
  setTransactions: React.Dispatch<
    React.SetStateAction<JournalTransactionFormDataType[]>
  >;
}

export default function NewTransactionForm(props: NewTransactionFormProps) {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newTransaction: JournalTransactionFormDataType = {
      index: props.transactions.length + 1,
      account_id: -1,
      credit: 0,
      debit: 0,
    };

    props.setTransactions((prev) => prev.concat(newTransaction));
  };

  return (
    <button
      className="border w-full py-6 mt-8 group hover:border-primary rounded-md"
      onClick={handleOnClick}
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
