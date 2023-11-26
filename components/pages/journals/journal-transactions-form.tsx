"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { JournalTransactionFormDataType } from "@/types/journals";
import { TrashIcon } from "@radix-ui/react-icons";

interface JournalTransactionsFormProps {
  index: number;
  transactions: JournalTransactionFormDataType[];
  setTransactions: React.Dispatch<
    React.SetStateAction<JournalTransactionFormDataType[]>
  >;
}

export default function JournalTransactionsForm(
  props: JournalTransactionsFormProps
) {
  const currentTransaction = props.transactions[props.index];
  const isAbleToDelete = props.transactions.length > 2;

  if (!currentTransaction) {
    return null;
  }

  const handleChangeDebit = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const debit = parseInt(e.target.value);
    props.setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.index === props.index) {
          return { ...transaction, debit };
        } else {
          return transaction;
        }
      })
    );
  };

  const handleChangeCredit = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const credit = parseInt(e.target.value ?? 0);
    props.setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.index === props.index) {
          return { ...transaction, credit };
        } else {
          return transaction;
        }
      })
    );
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    props.setTransactions((prev) =>
      prev.filter((transaction) => transaction.index !== props.index)
    );
  };

  return (
    <div className="grid items-end grid-flow-col gap-x-8 pt-8">
      <div className="col-span-7">
        <Label>Akun</Label>
        <Input type="text" name="debit" />
      </div>

      <div className="col-span-2">
        <Label>Debit</Label>
        <Input
          type="number"
          name="debit"
          value={currentTransaction.debit}
          onChange={(e) => handleChangeDebit(e)}
        />
      </div>

      <div className="col-span-2">
        <Label>Kredit</Label>
        <Input
          type="number"
          name="debit"
          value={currentTransaction.credit}
          onChange={(e) => handleChangeCredit(e)}
        />
      </div>

      <div className="inline-flex justify-end w-full col-span-1">
        <Button
          variant={"destructive"}
          size={"icon"}
          disabled={!isAbleToDelete}
          onClick={(e) => handleDelete(e)}
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
