import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import React from 'react';

interface TableViewProps<T extends object>
  extends React.HTMLAttributes<HTMLTableElement> {
  headers: string[];
  items: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
  renderHeader?: (header: string) => React.ReactNode;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  renderLoading?: () => React.ReactNode;
  loadingPlaceholderAmount?: number;
}

export default function TableView<T extends object>({
  headers,
  items,
  renderRow,
  isLoading,
  renderLoading,
  loadingPlaceholderAmount = 10,
  renderHeader = (header) => <TableHead key={header}>{header}</TableHead>,
  onRowClick,
  ...props
}: TableViewProps<T>) {
  return (
    <Table {...props}>
      <TableHeader>
        <TableRow>{headers.map((header) => renderHeader(header))}</TableRow>
      </TableHeader>

      <TableBody>
        {isLoading &&
          Array.from({ length: loadingPlaceholderAmount }).map(
            (_, plcIndex) =>
              renderLoading?.() ?? (
                <TableRow key={plcIndex}>
                  {headers.map((_, index) => (
                    <TableCell key={`${plcIndex}-${index}`}>
                      <Skeleton className="w-full h-6" />
                    </TableCell>
                  ))}
                </TableRow>
              )
          )}
        {!isLoading &&
          items.map((item, index) => (
            <TableRow
              key={index}
              onClick={() => onRowClick?.(item)}
              className={cn(onRowClick && 'cursor-pointer')}
            >
              {renderRow(item, index)}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
