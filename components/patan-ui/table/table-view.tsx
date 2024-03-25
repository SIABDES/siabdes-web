import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import React from "react";

interface TableViewProps<T extends object>
  extends React.HTMLAttributes<HTMLTableElement> {
  headers?: string[];
  items: T[];
  renderRow?: (args: {
    item: T;
    index: number;
    children: React.ReactNode;
    onRowClick?: (item: T) => void;
  }) => React.ReactNode;
  renderRowContent: (item: T, index: number) => React.ReactNode;
  renderHeader?: (header: string) => React.ReactNode;
  skipIf?: (item: T) => boolean;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  renderLoading?: () => React.ReactNode;
  loadingPlaceholderAmount?: number;
  classNameRow?: string;
}

export default function TableView<T extends object>({
  headers,
  items,
  renderRow,
  renderRowContent,
  isLoading,
  renderLoading,
  loadingPlaceholderAmount = 10,
  renderHeader = (header) => <TableHead key={header}>{header}</TableHead>,
  onRowClick,
  skipIf,
  classNameRow,
  ...props
}: TableViewProps<T>) {
  return (
    <Table {...props}>
      {headers && (
        <TableHeader>
          <TableRow>{headers.map((header) => renderHeader(header))}</TableRow>
        </TableHeader>
      )}

      <TableBody>
        {isLoading &&
          headers &&
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
          items.map((item, index) => {
            if (skipIf?.(item)) return null;

            if (renderRow) {
              return renderRow({
                item,
                index,
                children: renderRowContent(item, index),
                onRowClick,
              });
            }

            return (
              <TableRow
                key={index}
                onClick={() => onRowClick?.(item)}
                className={cn(
                  onRowClick ? "cursor-pointer" : "cursor-default",
                  classNameRow
                )}
              >
                {renderRowContent(item, index)}
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
}
