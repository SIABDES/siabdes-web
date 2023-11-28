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

type ComboBoxItem = { label: string; value: string };

interface ComboBoxProps {
  items: ComboBoxItem[];
  placeholder?: string;
  notFoundText?: string;
  className?: string;
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  height?: "short" | "medium" | "tall";
  disabled?: boolean;
  blacklistedValues?: string[];
}

export function ComboBox({ height = "medium", ...props }: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between w-[200px]", props.className)}
          disabled={props.disabled ?? false}
        >
          {props.value
            ? props.items.find((item) => item.value === props.value)?.label
            : props.placeholder ?? "Pilih item"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0 w-[200px]", props.className)}>
        <Command>
          <CommandInput placeholder={props.placeholder ?? "Cari item"} />
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
                    setOpen(false);
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
    </Popover>
  );
}
