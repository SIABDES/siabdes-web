import { formatNumber } from "@/common/helpers/number-format";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PatanTableProps {
  data: Record<string, React.ReactNode>[];
}

export const PatanTable: React.FC<PatanTableProps> = ({ data = [{}] }) => {
  const headers = Object.keys(data[0]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => {
          return (
            <TableRow key={index.toString()}>
              {Object.values(row).map((value, index) => (
                <TableCell key={`${value}-${index}`}>
                  {typeof value === "number" || typeof value === "bigint"
                    ? formatNumber(value)
                    : value}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
