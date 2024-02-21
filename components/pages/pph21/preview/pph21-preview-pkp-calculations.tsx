import { formatRupiah, reverseFormat } from '@/common/helpers/number-format';
import { Pph21PkpCalculationsType } from '@/types/pph21/pph21';
import React from 'react';

interface PPh21PreviewPKPCalculationsProps {
  pkp: Pph21PkpCalculationsType;
}

export default function PPh21PreviewPKPCalculations(
  pkp: PPh21PreviewPKPCalculationsProps
) {
  const items = [
    { type: 'Persentase', value: pkp.pkp.percentage, format: false },
    { type: 'Penghasilan Tidak Kena Pajak', value: pkp.pkp.ptkp, format: true },
    { type: 'Jumlah Penghasilan', value: pkp.pkp.amount, format: true },
    { type: 'Hasil Perhitungan', value: pkp.pkp.result, format: true },
  ];

  const allZero = items.every((item) => item.value === undefined);
  return (
    <div>
      {!allZero && (
        <div className="grid grid-cols-9 items-center">
          <span className="col-span-3">Penghasilan Kena Pajak</span>
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
                {item.format ? formatRupiah(item.value!) : item.value}
              </span>
            </div>
          )
      )}
    </div>
  );
}
