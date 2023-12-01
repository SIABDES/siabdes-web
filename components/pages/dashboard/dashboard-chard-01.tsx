import React from 'react';
import SelectMoon from './select-bulan';

export default function DashboardChard01() {
  return (
    <div className="flex flex-col pb-11 col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-end items-start mb-2">
          {/* Icon */}
          {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
          <SelectMoon />
          {/* Menu button */}

          {/* <EditMenu align="right" className="relative inline-flex">
          <li>
            <Link
              className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
              to="#0"
            >
              Option 1
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
              to="#0"
            >
              Option 2
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
              to="#0"
            >
              Remove
            </Link>
          </li>
        </EditMenu> */}
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
          Total Pemasukan
        </h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">
          31 Desember 2023
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">
            Rp. 30.000.000
          </div>
          <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">
            +50%
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        {/* <LineChart data={chartData} width={389} height={128} /> */}
      </div>
    </div>
  );
}
