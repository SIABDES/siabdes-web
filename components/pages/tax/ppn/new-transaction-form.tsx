"use client";

import { cn } from "@/lib/utils";
import { JournalTransactionFormDataType } from "@/types/journals";
import { PpnTransactionFormDataType } from "@/types/ppn/ppn";
import { PlusCircleIcon } from "lucide-react";

import { nanoid } from "nanoid";

interface NewTransactionFormProps {
  transactions: PpnTransactionFormDataType[];
  setTransactions: React.Dispatch<
    React.SetStateAction<PpnTransactionFormDataType[]>
  >;
  className?: string;
}

export default function PpnNewTransactionForm(props: NewTransactionFormProps) {
  const handleAddTransaction = () => {
    props.setTransactions([
      ...props.transactions,
      {
        unique_id: nanoid(3),
        name: undefined,
        type: undefined,
        price: 0,
        amount: 0,
        total_price: 0,
        discount: 0,
        dpp: 0,
        tax: 0,
        ppn: 0,
      },
    ]);
  };

  return (
    <button
      className={cn(
        "border w-full py-6 mt-8 group hover:border-primary rounded-md",
        props.className
      )}
      onClick={handleAddTransaction}
    >
      <p className="text-muted-foreground group-hover:text-primary font-medium">
        <span className="flex items-center justify-center gap-x-4">
          <PlusCircleIcon size={18} />
          Tambah Objek
        </span>
      </p>
    </button>
  );
}
