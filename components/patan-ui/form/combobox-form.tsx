"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Path, PathValue, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../../ui/scroll-area";
import React from "react";

type ComboboxItem = { label: string; value: string };

interface ComboboxFormProps<T extends object> {
  form: ReturnType<typeof useForm<T>>;
  name: Path<T>;
  disabled?: boolean;
  placeholder?: string;
  notFoundText?: string;
  items: ComboboxItem[];
  className?: string;
  classNameTrigger?: React.HTMLAttributes<HTMLButtonElement>["className"];
  label: string;
  triggerPlaceholder?: string;
  isLoading?: boolean;
  loadingText?: string;
  height?: "short" | "medium" | "tall";
  onSelectCallback?: () => void;
  closeOnSelect?: boolean;
}

export function ComboboxForm<T extends object>({
  form,
  name,
  disabled,
  notFoundText = "Item tidak ditemukan.",
  placeholder = "Cari item",
  items,
  className,
  classNameTrigger = "w-[200px]",
  label,
  triggerPlaceholder = "Pilih item",
  isLoading,
  loadingText = "Memuat...",
  height = "medium",
  closeOnSelect = true,
}: ComboboxFormProps<T>) {
  const triggerPlaceholderText = isLoading ? loadingText : triggerPlaceholder;

  const [open, setOpen] = React.useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <FormItem id="combobox-form" className={cn(className)}>
          <FormLabel>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  disabled={disabled || isLoading}
                  className={cn(
                    "justify-between",
                    !field.value && "text-muted-foreground",
                    classNameTrigger
                  )}
                >
                  {field.value
                    ? items.find((item) => item.value === field.value)?.label
                    : triggerPlaceholderText}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 popover-content-same-width-as-trigger">
              <Command>
                <CommandInput placeholder={placeholder} className="h-9" />
                <ScrollArea
                  className={cn(
                    height === "short" && "h-32",
                    height === "medium" && "h-48",
                    height === "tall" && "h-64"
                  )}
                >
                  <CommandEmpty>{notFoundText}</CommandEmpty>
                  <CommandGroup>
                    {items.map((item) => (
                      <CommandItem
                        key={item.label}
                        value={item.value}
                        onSelect={() => {
                          form.setValue(
                            name,
                            item.value as PathValue<T, Path<T>>
                          );
                          if (closeOnSelect) setOpen(false);
                        }}
                      >
                        {item.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            item.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
