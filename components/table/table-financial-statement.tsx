import React from "react";

interface TableProps {
  data: any[];
}

const TableFinancialStatement: React.FC<TableProps> = ({ data }) => {
  return (
    <div>
      <table className="min-w-full border border-gray-300">
        {data.map((item, index) => (
          <thead key={index}>
            <tr>
              <th className="p-4 bg-gray-200 font-bold border border-gray-300">
                Entitas {item.unit}
              </th>
            </tr>
            <tr>
              <th className="p-4 bg-gray-200 font-bold border border-gray-300">
                Laporan {item.title}
              </th>
            </tr>
            <tr>
              <th className="p-4 bg-gray-200 font-bold border border-gray-300">
                {item.range1} - {item.range2}
              </th>
            </tr>
          </thead>
        ))}
        <tbody></tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};
export default TableFinancialStatement;
