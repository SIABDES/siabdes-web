"use client";

import { cn } from "@/lib/utils";
import { MutationJournalRequest } from "@/types/journals";
import { PlusCircleIcon } from "lucide-react";
import { UseFieldArrayAppend } from "react-hook-form";

interface NewTransactionFormProps {
  append: UseFieldArrayAppend<MutationJournalRequest, "data_transactions">;
  className?: string;
}

export default function NewTransactionForm({
  append,
  className,
}: NewTransactionFormProps) {
  return (
    <button
      className={cn(
        "border w-full py-6 mt-8 group hover:border-primary rounded-md",
        className
      )}
      onClick={() =>
        append({
          account_id: -1,
          credit: 0,
          debit: 0,
        })
      }
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
