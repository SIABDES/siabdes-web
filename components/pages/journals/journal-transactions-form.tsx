import { formatNumber, reverseFormat } from "@/common/helpers/number-format";
import { ComboboxForm } from "@/components/patan-ui/form/combobox-form";
import FormNumberInput from "@/components/patan-ui/form/form-number-input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AccountType } from "@/types/accounts";
import { AddJournalRequest } from "@/types/journals";
import { TrashIcon } from "lucide-react";
import {
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
  UseFormReturn,
} from "react-hook-form";

interface JournalTransactionsFormProps {
  form: UseFormReturn<AddJournalRequest>;
  index: number;
  remove: UseFieldArrayRemove;
  update: UseFieldArrayUpdate<AddJournalRequest, "data_transactions">;
  accounts: AccountType[];
  isDeleteAble: boolean;
}

export default function JournalTransactionsForm({
  index,
  remove,
  form,
  accounts,
  isDeleteAble,
  update,
}: JournalTransactionsFormProps) {
  const basePath = `data_transactions.${index}` as const;

  const accountIdWatcher = form.watch(`${basePath}.account_id`);
  const debitWatcher = form.watch(`${basePath}.debit`);
  const creditWatcher = form.watch(`${basePath}.credit`);

  return (
    <div className="grid items-end grid-flow-col gap-x-8">
      <div className=" flex flex-col gap-y-2">
        <ComboboxForm
          form={form}
          data={accounts}
          itemBuilder={(item) => ({
            key: item.id.toString(),
            label: `${item.ref} - ${item.name}`,
            value: item.id.toString(),
          })}
          label={`Akun ${index + 1}`}
          name={`${basePath}.account_id`}
          isLoading={!accounts}
          loadingText="Memuat data akun"
          classNameTrigger="min-w-[32rem]"
          onSelect={(item) =>
            update(index, {
              account_id: parseInt(item.value),
              debit: debitWatcher,
              credit: creditWatcher,
            })
          }
        />
      </div>

      <div className="col-span-2">
        <FormNumberInput
          control={form.control}
          name={`${basePath}.debit`}
          label="Debit"
          disabled={
            (!accountIdWatcher && accountIdWatcher === -1) || creditWatcher > 0
          }
          placeholder="0"
          border={false}
        />
      </div>

      <div className="col-span-2">
        <FormNumberInput
          control={form.control}
          name={`${basePath}.credit`}
          label="Kredit"
          disabled={
            (!accountIdWatcher && accountIdWatcher === -1) || debitWatcher > 0
          }
          placeholder="0"
          border={false}
        />
      </div>

      <div className="inline-flex justify-end w-full col-span-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"destructive"}
                size={"icon"}
                onClick={() => remove(index)}
                disabled={!isDeleteAble}
              >
                <TrashIcon size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-destructive text-destructive-foreground">
              {isDeleteAble
                ? "Hapus data transaksi"
                : "Minimal harus ada 2 data transaksi"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
