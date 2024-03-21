import React from 'react';

interface TableProps {
  headers: string[];
  data: any[];
  onRowClick: (rowData: any) => void;
}

const ClikableTable: React.FC<TableProps> = ({ headers, data, onRowClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="p-4 text-left bg-gray-200 font-bold border border-gray-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick(row)}
              className="transition-all hover:bg-gray-100 cursor-pointer"
            >
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="p-4 border border-gray-300">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClikableTable;
