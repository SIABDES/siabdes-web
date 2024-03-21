import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableProps {
  data: Record<string, React.ReactNode>[];
  onRowClick?: () => void;
}

export const TableComponent: React.FC<TableProps> = ({
  onRowClick,
  data = [{}],
}) => {
  const headers = Object.keys(data[0]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead className="font-black " key={header}>
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => {
          return (
            <TableRow key={index.toString()} onClick={onRowClick}>
              {Object.values(row).map((value, index) => (
                <TableCell key={`${value}-${index}`}>{value}</TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

// import React from 'react';

// interface TableProps {
//   headers: string[];
//   data: any[];
// }

// const Table: React.FC<TableProps> = ({ headers, data }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="table-auto min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             {headers.map((header, index) => (
//               <th
//                 key={index}
//                 className="p-4 text-left bg-gray-200 font-bold border border-gray-300"
//               >
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {headers.map((header, colIndex) => (
//                 <td key={colIndex} className="p-4 border border-gray-300">
//                   {row[header]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
