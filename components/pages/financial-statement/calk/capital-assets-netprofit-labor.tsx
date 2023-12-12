import React, { useState } from 'react';
import CapitalHistory from './capital-history';
import AssetAndTurnoverHistory from './asset-turnover-history';
import HistoryNetProvitsAndDividends from './history-of-net-profit-dividends';
import CurrentNumberAndSourcesOfLabor from './number-and-source-labor';
import { Button } from '@/components/ui/button';
import { CapitalHistoryFormData } from '@/types/financial-statement/calk/capital-history';

export default function CapitalAssetsNetProfitLabor() {
  //   const [capitalHistoryData, setCapitalHistoryData] = useState<
  //     CapitalHistoryFormData[]
  //   >([]);
  //   const [assetTurnoverData, setAssetTurnoverData] = useState([]);
  //   const [netProfitDividendsData, setNetProfitDividendsData] = useState([]);
  //   const [numberAndSourceLaborData, setNumberAndSourceLaborData] = useState([]);

  //   const handleupdateCapitalHistoryData = (data: CapitalHistoryFormData[]) => {
  //     setCapitalHistoryData(data);
  //   };

  //   const handleSave = () => {
  //     console.log('Data Tabel Capital History:', capitalHistoryData);
  //     console.log('Data Tabel Asset Turnover:', assetTurnoverData);
  //     console.log('Data Tabel Net Profit Dividends:', netProfitDividendsData);
  //     console.log(
  //       'Data Tabel Number and Source Labor:',
  //       numberAndSourceLaborData
  //     );
  //   };

  return (
    <section>
      <section className="my-10">
        <h1 className="p-2 text-lg font-bold text-black">Riwayat pemodalan</h1>
        <CapitalHistory />
      </section>

      <section className="my-10">
        <h1 className="p-2 text-lg font-bold text-black">
          Riwayat Aset dan Omzet
        </h1>
        <AssetAndTurnoverHistory />
      </section>

      <section className="my-10">
        <h1 className="p-2 text-lg font-bold text-black">
          Riwayat Keuntungan Bersih dan Dividen untuk BUMDes
        </h1>
        <HistoryNetProvitsAndDividends />
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
    </section>
  );
}
