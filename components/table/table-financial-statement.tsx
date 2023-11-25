import React from "react";
import { TableComponent } from "./table";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableProps {
  Header: Record<string, React.ReactNode>[];
  data: Record<string, React.ReactNode>[];
  Foot: Record<string, React.ReactNode>[];
  onRowClick?: () => void;
}

const TableFinancialStatement: React.FC<TableProps> = ({
  data,
  onRowClick,
  Header,
  Foot,
}) => {
  return (
    <div>
      <Table className="min-w-full border border-gray-300">
        {Header.map((item, index) => (
          <TableHeader key={index}>
            <TableRow>
              <TableHead className="p-4 bg-gray-200 font-bold border border-gray-300 text-center">
                Entitas {item.unit}
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="p-4 bg-gray-200 font-bold border border-gray-300 text-center">
                Laporan {item.title}
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="p-4 bg-gray-200 font-bold border border-gray-300 text-center">
                {item.range1} - {item.range2}
              </TableHead>
            </TableRow>
          </TableHeader>
        ))}
        <TableBody>
          <TableRow>
            <TableCell>
              <TableComponent data={data} onRowClick={onRowClick} />
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
        <TableFooter className="font-bold"></TableFooter>
      </Table>
      <TableComponent data={Foot} />
    </div>
  );
};
export default TableFinancialStatement;
