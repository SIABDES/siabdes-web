'use client';

import { CalendarIcon } from '@radix-ui/react-icons';
import * as React from 'react';

import { formatDateToString } from '@/common/helpers/date';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Matcher } from 'react-day-picker';

interface DatePickerProps {
  className?: string;
  date?: Date;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  placeholder?: string;
  disabled?: Matcher | Matcher[] | undefined;
  disablePreviousYears?: boolean;
}

export function DatePicker(props: DatePickerProps) {
  const currentYear = new Date().getFullYear();

  // Function to disable dates from previous years
  const disablePreviousYearsMatcher: Matcher = (date) => {
    // If disablePreviousYears is true and the year is less than the current year, return true to disable
    if (props.disablePreviousYears && date.getFullYear() < currentYear) {
      return true;
    }
    // Otherwise, return false to not disable
    return false;
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !props.date && 'text-muted-foreground',
            props.className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {props.date ? (
            formatDateToString(props.date)
          ) : (
            <span>{props.placeholder ?? 'Pilih tanggal'}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode={'single'}
          selected={props.date}
          onSelect={props.setDate}
          disabled={[disablePreviousYearsMatcher]}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
