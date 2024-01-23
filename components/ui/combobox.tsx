"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "./scroll-area";
import { FormMessage } from "./form";

type ComboBoxItem = { label: string; value: string };

interface ComboBoxProps {
  items: ComboBoxItem[];
  placeholder?: string;
  notFoundText?: string;
  className?: string;
  value?: string;
  setValue:
    | React.Dispatch<React.SetStateAction<string | undefined>>
    | ((value: string) => void);
  height?: "short" | "medium" | "tall";
  disabled?: boolean;
  blacklistedValues?: string[];
  isLoading?: boolean;
  search?: string;
  setSearch?:
    | React.Dispatch<React.SetStateAction<string | undefined>>
    | ((value: string) => void);
  loadingText?: string;
  triggerText?: string;
  closeOnSelect?: boolean;
  errorMessage?: string;
}

export function ComboBox({
  height = "medium",
  loadingText = "Memuat...",
  placeholder = "Cari item...",
  triggerText = "Pilih item...",
  closeOnSelect = true,
  ...props
}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);

  const displayTriggerText = props.isLoading ? loadingText : triggerText;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between w-[200px]", props.className)}
          disabled={props.disabled || props.isLoading}
        >
          {props.value
            ? props.items.find((item) => item.value === props.value)?.label
            : displayTriggerText}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("p-0 popover-content-same-width-as-trigger")}
      >
        <Command>
          <CommandInput
            placeholder={placeholder}
            value={props.search ?? undefined}
            onValueChange={
              props.setSearch ? (value) => props.setSearch?.(value) : undefined
            }
          />
          <ScrollArea
            className={cn(
              height === "medium" && "h-48",
              height === "short" && "h-32",
              height === "tall" && "h-64"
            )}
          >
            <CommandEmpty>
              {props.notFoundText ?? "Item tidak ditemukan."}
            </CommandEmpty>
            <CommandGroup>
              {props.items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.label}
                  disabled={
                    props.blacklistedValues?.includes(item.value) ?? false
                  }
                  onSelect={() => {
                    props.setValue(
                      item.value === props.value ? "" : item.value
                    );

                    if (closeOnSelect) setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      props.value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>

      <p
        className={cn(props.errorMessage ? "block text-destructive" : "hidden")}
      >
        {props.errorMessage}
      </p>
    </Popover>
  );
}
