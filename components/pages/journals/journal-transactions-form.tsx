import FormNumberInput from "@/components/patan-ui/form/form-number-input";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AccountType } from "@/types/accounts";
import { MutationJournalRequest } from "@/types/journals";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Label } from "@radix-ui/react-label";
import { TrashIcon } from "lucide-react";
import {
  Controller,
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
  UseFormReturn,
} from "react-hook-form";

interface JournalTransactionsFormProps {
  form: UseFormReturn<MutationJournalRequest>;
  index: number;
  remove: UseFieldArrayRemove;
  update: UseFieldArrayUpdate<MutationJournalRequest, "data_transactions">;
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
        <div>
          <Label className="text-sm font-medium">Akun {index + 1}</Label>

          <FormField
            control={form.control}
            name={`${basePath}.account_id`}
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Autocomplete
                      variant="bordered"
                      placeholder="Pilih Akun"
                      aria-label={`Akun ${index + 1}`}
                      size="md"
                      radius="sm"
                      onSelectionChange={(item) => {
                        if (!item) return;

                        update(index, {
                          account_id: parseInt(item.toString()),
                          debit: debitWatcher,
                          credit: creditWatcher,
                        });
                      }}
                      onKeyDown={(e: any) => e.continuePropagation()}
                      selectedKey={field.value?.toString()}
                      isClearable={false}
                      errorMessage={fieldState.error?.message}
                    >
                      {accounts.map((account) => (
                        <AutocompleteItem
                          key={account.id}
                          className="capitalize"
                          aria-label={`${account.ref} - ${account.name}`}
                        >
                          {account.ref} - {account.name}
                        </AutocompleteItem>
                      ))}
                    </Autocomplete>
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </div>
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
