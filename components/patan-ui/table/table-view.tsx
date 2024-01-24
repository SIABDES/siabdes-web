import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import React from "react";

interface TableViewProps<T extends object>
  extends React.HTMLAttributes<HTMLTableElement> {
  headers: string[];
  items: T[];
  renderRow: (item: T) => React.ReactNode;
  renderHeader?: (header: string) => React.ReactNode;
  onRowClick?: (item: T) => void;
}

export default function TableView<T extends object>({
  headers,
  items,
  renderRow,
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
        {items.map((item, index) => (
          <TableRow
            key={index}
            onClick={() => onRowClick?.(item)}
            className={cn(onRowClick && "cursor-pointer")}
          >
            {renderRow(item)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
