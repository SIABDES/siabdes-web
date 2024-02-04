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
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useEffect, useMemo, useState } from "react";

type ComboboxItem = {
  key: string;
  label: string;
  value: string;
};

interface ComboboxFormProps<TData extends Record<string, any>> {
  disabled?: boolean;
  isLoading?: boolean;
  value?: string;
  onSelect: (item: ComboboxItem) => void | Promise<void>;
  className?: string;
  classNameTrigger?: React.HTMLAttributes<HTMLButtonElement>["className"];
  data: TData[];
  itemBuilder: (item: TData) => ComboboxItem;
  placeholder?: string;
  notFoundText?: string;
  loadingText?: string;
  closeOnSelect?: boolean;
  triggerPlaceholderText?: string;
  height?: "short" | "medium" | "tall";
}

export default function PatanCombobox<TData extends Record<string, any>>({
  disabled,
  isLoading,
  value,
  onSelect,
  className,
  classNameTrigger,
  data,
  itemBuilder,
  placeholder = "Pilih item",
  notFoundText = "Tidak ada item",
  loadingText = "Memuat...",
  closeOnSelect = true,
  height = "medium",
  triggerPlaceholderText,
}: ComboboxFormProps<TData>) {
  const [open, setOpen] = useState(false);
  const items = useMemo(() => data.map(itemBuilder), [data, itemBuilder]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          disabled={disabled || isLoading}
          className={cn(
            "justify-between w-full",
            !value && "text-muted-foreground",
            classNameTrigger
          )}
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : (isLoading && loadingText) || triggerPlaceholderText}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
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
              {isLoading && <CommandItem disabled>{loadingText}</CommandItem>}
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
                        item.value === value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
