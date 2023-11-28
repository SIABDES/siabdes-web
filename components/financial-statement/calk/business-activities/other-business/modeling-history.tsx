'use client';

import React from 'react';
import { TableWithSum } from '../../table/table-with-sum';

const ModelingHistoryBusiness = () => {
  const [tableData, setTableData] = React.useState<
    Record<string, React.ReactNode>[]
  >([{ No: '', 'Sumber Modal': '', 'Jumlah Modal': '', '%': '' }]);

  const addRow = () => {
    setTableData([...tableData, { Name: '', Age: '', City: '' }]);
  };

  const updateRow = (index: number, column: string, value: string) => {
    const updatedData = [...tableData];
    updatedData[index][column] = value;
    setTableData(updatedData);
  };

  const removeRow = (index: number) => {
    if (tableData.length > 1) {
      const updatedData = tableData.filter((_, rowIndex) => rowIndex !== index);
      setTableData(updatedData);
    }
  };
  return (
    <div>
      <h1 className="p-2 font-medium text-sm mt-4 text-black">
        Riwayat Pemodelan
      </h1>
      <TableWithSum
        data={tableData}
        updateRow={updateRow}
        addRow={addRow}
        removeRow={removeRow}
      />
    </div>
  );
};
export default ModelingHistoryBusiness;
