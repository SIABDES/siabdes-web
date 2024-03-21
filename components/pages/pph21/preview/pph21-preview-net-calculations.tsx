import { formatRupiah, reverseFormat } from '@/common/helpers/number-format';
import { Pph21NetCalculationsType } from '@/types/pph21/pph21';
import React from 'react';

interface PPh21PreviewNetCalculationsProps {
  calculation: Pph21NetCalculationsType;
}
export default function PPh21PreviewNetCalculations(
  calculation: PPh21PreviewNetCalculationsProps
) {
  const items = [
    {
      type: 'Biaya Jabatan',
      value: calculation.calculation.position_deduction,
    },
    {
      type: 'Iuran Pensiun/JT',
      value: calculation.calculation.annual_contribution,
    },
    {
      type: 'Jumlah Pengurang',
      value: calculation.calculation.result,
    },
    // {
    //   type: 'Premi Setahun Dibayar Pegawai',
    //   value: calculation.annual_assurance,
    // },
    // { type: 'Penghasilan Neto Setahun', value: calculation.result },
  ];

  const allZero = items.every((item) => item.value === undefined);

  return (
    <div>
      {!allZero && (
        <div className="grid grid-cols-9 items-center">
          <span className="col-span-3">Pengurang</span>
        </div>
      )}
      {items.map(
        (item, index) =>
          item.value !== undefined &&
          item.value !== 0 && (
            <div key={index} className="grid grid-cols-9 items-center">
              <span className="col-span-5 ml-9">{item.type}</span>
              <span className="col-span-1">:</span>
              <span className="text-left col-span-3">
                {formatRupiah(item.value)}
              </span>
            </div>
          )
      )}
    </div>
  );
}
