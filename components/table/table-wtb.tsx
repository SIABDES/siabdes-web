import React from 'react';

interface TableProps {
  data: any[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const calculateTotal = (prop: string, type: string) => {
    return data.reduce((acc, item) => {
      return acc + item[prop][type];
    }, 0);
  };

  const totalNeracaSaldoDebit = calculateTotal('neracaSaldo', 'debit');
  const totalNeracaSaldoKredit = calculateTotal('neracaSaldo', 'kredit');
  const totalPenyesuaianDebit = calculateTotal('penyesuaian', 'debit');
  const totalPenyesuaianKredit = calculateTotal('penyesuaian', 'kredit');
  const totalNeracaSetelahnyaDebit = calculateTotal(
    'neracaSetelahnya',
    'debit'
  );
  const totalNeracaSetelahnyaKredit = calculateTotal(
    'neracaSetelahnya',
    'kredit'
  );
  const totalLabaRugiDebit = calculateTotal('labaRugi', 'debit');
  const totalLabaRugiKredit = calculateTotal('labaRugi', 'kredit');
  const totalPosisiKeuanganDebit = calculateTotal('posisiKeuangan', 'debit');
  const totalPosisiKeuanganKredit = calculateTotal('posisiKeuangan', 'kredit');

  const labaRugiBersih = totalLabaRugiDebit - totalLabaRugiKredit;

  const totalDebit =
    totalNeracaSaldoDebit +
    totalPenyesuaianDebit +
    totalNeracaSetelahnyaDebit +
    totalLabaRugiDebit +
    totalPosisiKeuanganDebit;
  const totalKredit =
    totalNeracaSaldoKredit +
    totalPenyesuaianKredit +
    totalNeracaSetelahnyaKredit +
    totalLabaRugiKredit +
    totalPosisiKeuanganKredit;

  return (
    <div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th rowSpan={2} className="border border-gray-300 p-2">
              Nama Akun
            </th>
            <th colSpan={2} className="border border-gray-300 p-2">
              Neraca Saldo
            </th>
            <th colSpan={2} className="border border-gray-300 p-2">
              Penyesuaian
            </th>
            <th colSpan={2} className="border border-gray-300 p-2">
              Neraca Setelahnya
            </th>
            <th colSpan={2} className="border border-gray-300 p-2">
              Laba Rugi
            </th>
            <th colSpan={2} className="border border-gray-300 p-2">
              Posisi Keuangan
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 p-2">Debit</th>
            <th className="border border-gray-300 p-2">Kredit</th>
            <th className="border border-gray-300 p-2">Debit</th>
            <th className="border border-gray-300 p-2">Kredit</th>
            <th className="border border-gray-300 p-2">Debit</th>
            <th className="border border-gray-300 p-2">Kredit</th>
            <th className="border border-gray-300 p-2">Debit</th>
            <th className="border border-gray-300 p-2">Kredit</th>
            <th className="border border-gray-300 p-2">Debit</th>
            <th className="border border-gray-300 p-2">Kredit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{item.namaAkun}</td>

              <td className="border border-gray-300 p-2">
                {item.neracaSaldo.debit}
              </td>
              <td className="border border-gray-300 p-2">
                {item.neracaSaldo.kredit}
              </td>

              <td className="border border-gray-300 p-2">
                {item.penyesuaian.debit}
              </td>
              <td className="border border-gray-300 p-2">
                {item.penyesuaian.kredit}
              </td>

              <td className="border border-gray-300 p-2">
                {item.neracaSetelahnya.debit}
              </td>
              <td className="border border-gray-300 p-2">
                {item.neracaSetelahnya.kredit}
              </td>

              <td className="border border-gray-300 p-2">
                {item.labaRugi.debit}
              </td>
              <td className="border border-gray-300 p-2">
                {item.labaRugi.kredit}
              </td>

              <td className="border border-gray-300 p-2">
                {item.posisiKeuangan.debit}
              </td>
              <td className="border border-gray-300 p-2">
                {item.posisiKeuangan.kredit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="font-bold">Total:</p>
        <table className="min-w-full border border-gray-300">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Total Debit</td>
              <td className="border border-gray-300 p-2">{totalDebit}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Total Kredit</td>
              <td className="border border-gray-300 p-2">{totalKredit}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Laba/Rugi Bersih</td>
              <td className="border border-gray-300 p-2">{labaRugiBersih}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Total Keseluruhan</td>
              <td className="border border-gray-300 p-2">
                {totalDebit - totalKredit}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
