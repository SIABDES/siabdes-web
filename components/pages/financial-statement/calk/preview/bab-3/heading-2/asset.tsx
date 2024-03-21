import { WtbType } from '@/types/wtb/account';
import CurrentAsset from '../heading-3/current-asset';
import NonCurrentAsset from '../heading-3/non-current-asset';

interface AssetProps {
  data: WtbType[];
}

export default function Asset({ data }: AssetProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6">A. Aset</h2>
      <>
        <CurrentAsset accounts={data} />
        <NonCurrentAsset accounts={data} />
      </>
    </div>
  );
}
