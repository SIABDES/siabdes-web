import { table } from 'console';
import React from 'react';

export default function ReviewModelingHistory() {
  return (
    <div>
      <div className="text-start pl-60 text-lg font-semibold pb-3 mt-5">
        C. Riwayat Pemodelan
      </div>
      <table className="ml-60 border-black">
        <thead className="border-2">
          <tr className="border-2">
            <th className="border-2 w-36" rowSpan={3}>
              Tahun
            </th>
            <th className="border-2 w-52" rowSpan={3}>
              Nomor Perdes Penyertaan Modal BUMDes
            </th>
            <th className="border-2 " colSpan={4}>
              Nilai Penyertaan Modal BUMDes
            </th>
          </tr>
          <tr>
            <th className="border-2" colSpan={2}>
              Pemerintah Desa
            </th>
            <th className="border-2" colSpan={2}>
              Pihak Lain
            </th>
          </tr>
          <tr>
            <th className="border-2 w-64">Rp</th>
            <th className="border-2 w-32">%</th>
            <th className="border-2 w-64">Rp</th>
            <th className="border-2 w-32">%</th>
          </tr>
        </thead>

        <tbody></tbody>

        <tfoot>
          <tr>
            <td className="border-2">Jumlah</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
