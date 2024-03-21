import React, { useState } from 'react';
import CapitalHistory from './capital-history';
import AssetAndTurnoverHistory from './asset-turnover-history';
import HistoryNetProvitsAndDividends from './history-of-net-profit-dividends';
import CurrentNumberAndSourcesOfLabor from './number-and-source-labor';
import { Button } from '@/components/ui/button';
import { CapitalHistoryFormData } from '@/types/financial-statement/calk/capital-history';
import { useGetWtb } from '@/hooks/wtb/useGetWtb';

export default function CapitalAssetsNetProfitLabor() {
  const { data, isLoading } = useGetWtb({
    start_occurred_at: new Date(2023, 2, 1),
    end_occurred_at: new Date(2023, 2, 28),
  });

  return (
    <section>
      {!isLoading && data && (
        <>
          <section className="my-10">
            <h1 className="p-2 text-lg font-bold text-black">
              Riwayat pemodalan
            </h1>
            <CapitalHistory data={data} />
          </section>

          <section className="my-10">
            <h1 className="p-2 text-lg font-bold text-black">
              Riwayat Aset dan Omzet
            </h1>
            <AssetAndTurnoverHistory data={data} />
          </section>

          <section className="my-10">
            <h1 className="p-2 text-lg font-bold text-black">
              Riwayat Keuntungan Bersih dan Dividen untuk BUMDes
            </h1>
            <HistoryNetProvitsAndDividends data={data} />
          </section>

          <section className="my-10">
            <h1 className="p-2 text-lg font-bold text-black">
              Jumlah dan Sumber Tenaga Kerja saat ini
            </h1>
            <CurrentNumberAndSourcesOfLabor />
          </section>

          <div className="flex justify-end pt-5 mb-10">
            <Button
              //   onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Simpan
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
