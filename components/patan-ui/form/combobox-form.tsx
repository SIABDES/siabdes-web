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
import React, { useEffect, useMemo } from "react";

type ComboboxItem = { key: string; label: string; value: string };

interface ComboboxFormProps<
  TForm extends Record<string, any>,
  TData extends Record<string, any>
> {
  form: ReturnType<typeof useForm<TForm>>;
  name: Path<TForm>;
  disabled?: boolean;
  placeholder?: string;
  notFoundText?: string;
  data: TData[];
  itemBuilder: (item: TData) => ComboboxItem;
  className?: string;
  classNameTrigger?: React.HTMLAttributes<HTMLButtonElement>["className"];
  label: string;
  triggerPlaceholder?: string;
  isLoading?: boolean;
  loadingText?: string;
  height?: "short" | "medium" | "tall";
  closeOnSelect?: boolean;
  onSelect?: (item: ComboboxItem) => void | Promise<void>;
  onValueChange?: (
    newValue: PathValue<TForm, Path<TForm>>
  ) => void | Promise<void>;
}

export function ComboboxForm<
  TForm extends Record<string, any>,
  TData extends Record<string, any>
>({
  form,
  name,
  disabled,
  notFoundText = "Item tidak ditemukan.",
  placeholder = "Cari item",
  data,
  itemBuilder,
  className = "w-full",
  classNameTrigger = "w-full",
  label,
  triggerPlaceholder = "Pilih item",
  isLoading,
  loadingText = "Memuat...",
  height = "medium",
  closeOnSelect = true,
  onSelect = (item) =>
    form.setValue(name, item.value as PathValue<TForm, Path<TForm>>),
  onValueChange,
}: ComboboxFormProps<TForm, TData>) {
  const items = useMemo(() => data.map(itemBuilder), [data, itemBuilder]);
  const triggerPlaceholderText = isLoading ? loadingText : triggerPlaceholder;

  const [open, setOpen] = React.useState(false);

  const valueWatcher = form.watch(name);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(valueWatcher);
    }
  }, [onValueChange, valueWatcher]);

  return (
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <FormItem id="combobox-form" className={cn("flex flex-col", className)}>
          {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}

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
                  classNameViewport={cn(
                    height === "short" && "max-h-32",
                    height === "medium" && "max-h-48",
                    height === "tall" && "max-h-64"
                  )}
                >
                  <CommandEmpty>{notFoundText}</CommandEmpty>
                  <CommandGroup>
                    {isLoading && (
                      <CommandItem disabled>{loadingText}</CommandItem>
                    )}
                    {!isLoading &&
                      items.map((item) => (
                        <CommandItem
                          key={item.key}
                          value={item.value}
                          onSelect={() => {
                            onSelect(item);
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
