import React from "react";

interface TableProps {
  data: any[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const calculateTotal = (prop: string, type: string) => {
    return data.reduce((acc, item) => {
      return acc + item[prop][type];
    }, 0);
  };

  const totalNeracaSaldoDebit = calculateTotal("neracaSaldo", "debit");
  const totalNeracaSaldoKredit = calculateTotal("neracaSaldo", "kredit");
  const totalPenyesuaianDebit = calculateTotal("penyesuaian", "debit");
  const totalPenyesuaianKredit = calculateTotal("penyesuaian", "kredit");
  const totalNeracaSetelahnyaDebit = calculateTotal(
    "neracaSetelahnya",
    "debit"
  );
  const totalNeracaSetelahnyaKredit = calculateTotal(
    "neracaSetelahnya",
    "kredit"
  );
  const totalLabaRugiDebit = calculateTotal("labaRugi", "debit");
  const totalLabaRugiKredit = calculateTotal("labaRugi", "kredit");
  const totalPosisiKeuanganDebit = calculateTotal("posisiKeuangan", "debit");
  const totalPosisiKeuanganKredit = calculateTotal("posisiKeuangan", "kredit");

  const labaRugiBersih = totalLabaRugiDebit - totalLabaRugiKredit;

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
        <tfoot>
          <tr>
            <td className="border border-gray-300 p-2 font-bold">Total</td>
            <td className="border border-gray-300 p-2 font-bold">
              {totalNeracaSaldoDebit}
            </td>
            <td className="border border-gray-300 p-2 font-bold">
              {totalNeracaSaldoKredit}
            </td>

            <td className="border border-gray-300 p-2 font-bold">
              {totalPenyesuaianDebit}
            </td>
            <td className="border border-gray-300 p-2 font-bold">
              {totalPenyesuaianKredit}
            </td>

            <td className="border border-gray-300 p-2 font-bold">
              {totalNeracaSetelahnyaDebit}
            </td>
            <td className="border border-gray-300 p-2 font-bold">
              {totalNeracaSetelahnyaKredit}
            </td>

            <td className="border border-gray-300 p-2 font-bold">
              {totalLabaRugiDebit}
            </td>
            <td className="border border-gray-300 p-2 font-bold">
              {totalLabaRugiKredit}
            </td>

            <td className="border border-gray-300 p-2 font-bold">
              {totalPosisiKeuanganDebit}
            </td>
            <td className="border border-gray-300 p-2 font-bold">
              {totalPosisiKeuanganKredit}
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 p-2 font-bold">
              Laba/Rugi Bersih
            </td>
            <td className="border border-gray-300 p-2 font-bold"></td>
            <td className="border border-gray-300 p-2 font-bold"></td>

            <td className="border border-gray-300 p-2 font-bold"></td>
            <td className="border border-gray-300 p-2 font-bold"></td>

            <td className="border border-gray-300 p-2 font-bold"></td>
            <td className="border border-gray-300 p-2 font-bold"></td>

            {totalLabaRugiDebit < totalLabaRugiKredit ? (
              <>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalLabaRugiKredit - totalLabaRugiDebit}
                </td>
                <td className="border border-gray-300 p-2 font-bold"></td>
              </>
            ) : (
              <>
                <td className="border border-gray-300 p-2 font-bold"></td>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalLabaRugiDebit - totalLabaRugiKredit}
                </td>
              </>
            )}

            {totalPosisiKeuanganDebit < totalPosisiKeuanganKredit ? (
              <>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalPosisiKeuanganKredit - totalPosisiKeuanganDebit}
                </td>
                <td className="border border-gray-300 p-2 font-bold"></td>
              </>
            ) : (
              <>
                <td className="border border-gray-300 p-2 font-bold"></td>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalPosisiKeuanganDebit - totalPosisiKeuanganKredit}
                </td>
              </>
            )}
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 font-bold">Total</td>
            <td className="border border-gray-300 p-2 font-bold">
              {totalNeracaSaldoDebit}
            </td>
            <td className="border border-gray-300 p-2 font-bold">
              {totalNeracaSaldoKredit}
            </td>

            <td className="border border-gray-300 p-2 font-bold">
              {totalPenyesuaianDebit}
            </td>
            <td className="border border-gray-300 p-2 font-bold">
              {totalPenyesuaianKredit}
            </td>

            <td className="border border-gray-300 p-2 font-bold">
              {totalNeracaSetelahnyaDebit}
            </td>
            <td className="border border-gray-300 p-2 font-bold">
              {totalNeracaSetelahnyaKredit}
            </td>

            {totalLabaRugiDebit < totalLabaRugiKredit ? (
              <>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalLabaRugiDebit +
                    (totalLabaRugiKredit - totalLabaRugiDebit)}
                </td>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalLabaRugiKredit}
                </td>
              </>
            ) : (
              <>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalLabaRugiDebit}
                </td>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalLabaRugiKredit +
                    (totalLabaRugiDebit - totalLabaRugiKredit)}
                </td>
              </>
            )}

            {totalPosisiKeuanganDebit < totalPosisiKeuanganKredit ? (
              <>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalPosisiKeuanganDebit +
                    (totalPosisiKeuanganKredit - totalPosisiKeuanganDebit)}
                </td>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalPosisiKeuanganKredit}
                </td>
              </>
            ) : (
              <>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalPosisiKeuanganDebit}
                </td>
                <td className="border border-gray-300 p-2 font-bold">
                  {totalPosisiKeuanganKredit +
                    (totalPosisiKeuanganDebit - totalPosisiKeuanganKredit)}
                </td>
              </>
            )}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
