import React from 'react';
import TableWithSum from './table/table-sum';

export default function HistoryNetProvitsAndDividends() {
  const headers = ['Tahun', 'Keuntungan Bersih', 'Dividen untuk BUMDes'];
  return (
    <section>
      <TableWithSum headers={headers} showRowNumber={false} showTotal={false} />
    </section>
  );
}
