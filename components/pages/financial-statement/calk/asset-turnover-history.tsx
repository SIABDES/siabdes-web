import React from 'react';
import TableWithSum from './table/table-sum';

export default function AssetAndTurnoverHistory() {
  const headers = ['Tahun', 'Asset', 'Omzet'];
  return (
    <section>
      <TableWithSum headers={headers} showRowNumber={false} showTotal={false} />
    </section>
  );
}
