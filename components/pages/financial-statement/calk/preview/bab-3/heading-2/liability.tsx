import { WtbType } from '@/types/wtb/account';
import React from 'react';
import ShortTermLiability from '../heading-3/short-term-liability';
import LongTermLiability from '../heading-3/long-term-liability';

interface LiabilityProps {
  data: WtbType[];
}

export default function Liability({ data }: LiabilityProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6">B. Libialitas</h2>
      <>
        <ShortTermLiability accounts={data} />
        <LongTermLiability accounts={data} />
      </>
    </div>
  );
}
