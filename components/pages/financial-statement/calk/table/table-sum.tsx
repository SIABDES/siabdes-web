import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { TrashIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TableProps {
  headers: string[];
  showRowNumber?: boolean;
  showTotal?: boolean;
}

const TableSum: React.FC<TableProps> = ({
  headers,
  showRowNumber = true,
  showTotal = true,
}) => {
  const [rows, setRows] = useState<string[][]>([
    new Array(headers.length).fill(""),
  ]);
  const [totals, setTotals] = useState<number[]>(
    new Array(headers.length).fill(0)
  );

  const handleAddRow = () => {
    setRows([...rows, new Array(headers.length).fill("")]);
  };

  const handleDeleteRow = (index: number) => {
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
      updateTotals(newRows);
    }
  };

  const handleCellChange = (
    rowIndex: number,
    columnIndex: number,
    value: string
  ) => {
    const newRows = [...rows];
    newRows[rowIndex][columnIndex] = value;
    setRows(newRows);
    updateTotals(newRows);
  };

  const updateTotals = (newRows: string[][]) => {
    const newTotals = new Array(headers.length).fill(0);

    newRows.forEach((row) => {
      row.forEach((cell, columnIndex) => {
        newTotals[columnIndex] += cell !== "" ? parseFloat(cell) || 0 : 0;
      });
    });

    setTotals(newTotals);
  };

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            {showRowNumber && (
              <TableHead className="text-center font-semibold">No</TableHead>
            )}
            {headers.map((header, index) => (
              <TableHead key={index} className="text-center font-semibold">
                {header}
              </TableHead>
            ))}
            <TableHead className="text-center font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {showRowNumber && (
                <TableCell className="text-center">{rowIndex + 1}</TableCell>
              )}
              {row.map((cell, columnIndex) => (
                <TableCell key={columnIndex}>
                  <Input
                    type="text"
                    value={cell}
                    placeholder="Silahkan di isi"
                    className="text-center"
                    onChange={(e) =>
                      handleCellChange(rowIndex, columnIndex, e.target.value)
                    }
                  />
                </TableCell>
              ))}
              <TableCell className="text-red-500 flex justify-center cursor-pointer">
                <TrashIcon onClick={() => handleDeleteRow(rowIndex)}>
                  Delete
                </TrashIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        {showTotal && (
          <TableFooter>
            <TableRow>
              {showRowNumber && <TableCell></TableCell>}
              {totals.map((total, index) => (
                <TableCell key={index} className="text-center">
                  {total}
                </TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
      <div className="flex w-full justify-center">
        <Button onClick={handleAddRow}>Add Row</Button>
      </div>
    </section>
  );
};

export default TableSum;
