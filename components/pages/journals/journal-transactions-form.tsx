"use client";

import {
  formatNumber,
  reverseFormatNumber,
} from "@/common/helpers/number-format";
import FormInput from "@/components/patan-ui/form/form-input";
import { Button } from "@/components/ui/button";
import { ComboBox } from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AccountType } from "@/types/accounts";
import { JournalTransactionFormDataType } from "@/types/journals";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface JournalTransactionsFormProps {
  index: number;
  transaction: JournalTransactionFormDataType;
  isAbleToDelete: boolean;
  setTransactions: React.Dispatch<
    React.SetStateAction<JournalTransactionFormDataType[]>
  >;
  accounts: AccountType[];
}

export default function JournalTransactionsForm({
  transaction,
  setTransactions,
  ...props
}: JournalTransactionsFormProps) {
  const [accountId, setAccountId] = useState<string | undefined>(
    transaction.account_id?.toString()
  );

  const hasAccount =
    accountId === undefined || accountId.trim().length === 0 ? false : true;

  useEffect(() => {
    if (!accountId) {
      setTransactions((prev) =>
        prev.map((transaction) => {
          if (transaction.unique_id === transaction.unique_id) {
            return {
              ...transaction,
              account_id: undefined,
              debit: 0,
              credit: 0,
            };
          }
          return transaction;
        })
      );
      return;
    }

    setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.unique_id === transaction.unique_id) {
          return { ...transaction, account_id: parseInt(accountId) };
        }
        return transaction;
      })
    );
  }, [accountId, setTransactions]);

  const handleChangeDebit = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = reverseFormatNumber(e.target.value);

    if (newValue === "" || transaction.credit > 0) {
      newValue = "0";
    }

    setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.unique_id === transaction.unique_id) {
          return { ...transaction, debit: parseFloat(newValue) }; // Use newValue here
        }
        return transaction;
      })
    );
  };

  const handleChangeCredit = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = reverseFormatNumber(e.target.value);

    if (newValue === "" || transaction.debit > 0) {
      newValue = "0";
    }

    setTransactions((prev) =>
      prev.map((transaction) => {
        if (transaction.unique_id === transaction.unique_id) {
          return { ...transaction, credit: parseFloat(newValue) }; // Use newValue here
        }
        return transaction;
      })
    );
  };

  const handleDeleteTransaction = () => {
    if (!props.isAbleToDelete) return;

    setTransactions((prev) =>
      prev.filter(
        (transaction) => transaction.unique_id !== transaction.unique_id
      )
    );
  };

  return (
    <div className="grid items-end grid-flow-col gap-x-8">
      <div className=" flex flex-col gap-y-2">
        <Label>Akun {props.index}</Label>
        <ComboBox
          items={
            props.accounts.map((account) => ({
              label: `${account.ref} - ${account.name}`,
              value: account.id.toString(),
            })) ?? []
          }
          className="min-w-[32rem]"
          value={accountId}
          setValue={setAccountId}
        />
      </div>

      <div className="col-span-2">
        <FormInput
          label="Debit"
          name="debit"
          onChange={handleChangeDebit}
          value={formatNumber(transaction.debit)}
          type="text"
          disabled={transaction.credit > 0 || !hasAccount}
        />
      </div>

      <div className="col-span-2">
        <FormInput
          label="Kredit"
          name="kredit"
          onChange={handleChangeCredit}
          value={formatNumber(transaction.credit)}
          type="text"
          disabled={transaction.debit > 0 || !hasAccount}
        />
      </div>

      <div className="inline-flex justify-end w-full col-span-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"destructive"}
                size={"icon"}
                onClick={handleDeleteTransaction}
                disabled={!props.isAbleToDelete}
              >
                <TrashIcon size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-destructive text-destructive-foreground">
              {props.isAbleToDelete
                ? "Hapus data transaksi"
                : "Minimal harus ada 2 data transaksi"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Separator className="w-full" />
    </div>
  );
}
