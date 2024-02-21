import { formatRupiah, reverseFormat } from '@/common/helpers/number-format';
import React from 'react';

interface PPh21PreviewGrossSalaryProps {
  salary?: number;
  thr?: number;
  bonus?: number;
  allowance?: number;
  overtime_salary?: number;
  assurance?: number;
  workingDays?: number;
  dailySalary?: number;
  monthlySalary?: number;
}

export default function PPh21PreviewGrossSalary(
  props: PPh21PreviewGrossSalaryProps
) {
  const items = [
    { type: 'Gaji', value: props.salary, format: true },
    { type: 'Tunjangan Hari Raya (THR)', value: props.thr, format: true },
    { type: 'Bonus', value: props.bonus, format: true },
    { type: 'Tunjangan', value: props.allowance, format: true },
    { type: 'Upah Lembur', value: props.overtime_salary, format: true },
    {
      type: 'Premi Dibayar Pemberi Kerja',
      value: props.assurance,
      format: true,
    },
    // { type: 'Jumlah Hari Kerja', value: props.workingDays, format: false },
    { type: 'Gaji Harian', value: props.dailySalary, format: true },
    { type: 'Gaji Bulanan', value: props.monthlySalary, format: true },
  ];

  return (
    <div>
      <div className="grid grid-cols-9 items-center">
        <span className="col-span-3">Penghasilan Bruto</span>
      </div>
      {items.map(
        (item, index) =>
          item.value !== undefined &&
          item.value !== 0 && (
            <div key={index} className="grid grid-cols-9 items-center">
              <span className="col-span-5 ml-9">{item.type}</span>
              <span className="col-span-1">:</span>
              <span className="text-left col-span-3">
                {formatRupiah(item.value!)}
              </span>
            </div>
          )
      )}
    </div>
  );
}
