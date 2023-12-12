import React from 'react';
import TableWithSum from './table/table-sum';

export default function CapitalHistory() {
  const headers = ['Sumber Modal', 'Jumlah Modal', '%'];

  return (
    <section>
      <TableWithSum headers={headers} showRowNumber={true} showTotal={true} />
    </section>
  );
}
