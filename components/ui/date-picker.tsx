"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDateToString } from "@/common/helpers/date";

interface DatePickerProps {
  className?: string;
  date?: Date;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  placeholder?: string;
}

export function DatePicker(props: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !props.date && "text-muted-foreground",
            props.className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {props.date ? (
            formatDateToString(props.date)
          ) : (
            <span>{props.placeholder ?? "Pilih tanggal"}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={props.date}
          onSelect={props.setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
