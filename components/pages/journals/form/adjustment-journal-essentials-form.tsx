import FormDateInput from "@/components/patan-ui/form/form-date-input";
import FormInput from "@/components/patan-ui/form/form-input";
import React from "react";
import JournalEvidenceForm from "./journal-evidence-form";
import { UseFormReturn } from "react-hook-form";
import { AddJournalRequest } from "@/types/journals";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import format from "date-fns/format";
import { formatDateToString } from "@/common/helpers/date";

interface AdjustmentJournalEssentialsFormProps {
  form: UseFormReturn<AddJournalRequest>;
}

export default function AdjustmentJournalEssentialsForm({
  form,
}: AdjustmentJournalEssentialsFormProps) {
  return (
    <div className="grid grid-flow-col gap-x-8">
      <div className="col-span-4">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deskripsi</FormLabel>

              <FormControl>
                <Input placeholder="contoh: Pembelian Bahan Baku" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="col-span-4">
        <FormField
          control={form.control}
          name="occurred_at"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-y-2 w-full">
              <FormLabel>Tanggal Transaksi</FormLabel>

              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        formatDateToString(field.value)
                      ) : (
                        <span>Pilih tanggal transaksi</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
