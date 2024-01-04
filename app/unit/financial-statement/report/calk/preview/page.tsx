'use client';
import React from 'react';
import BAB2 from '@/components/pages/financial-statement/calk/preview/bab-2/bab-2';
import BAB3 from '@/components/pages/financial-statement/calk/preview/bab-3/bab-3';
import BAB4 from '@/components/pages/financial-statement/calk/preview/bab-4/bab-4';
import BAB1 from '@/components/pages/financial-statement/calk/preview/bab-1/bab-1';
import { useGetWtb } from '@/hooks/wtb/useGetWtb';

export default function Priview() {
  const { data, isLoading } = useGetWtb({
    start_occurred_at: new Date(2022, 1, 1),
    end_occurred_at: new Date(2023, 12, 31),
  });
  return (
    <section className="max-w-5xl mx-auto">
      <BAB1 />
      <BAB2 />
      <BAB3 />
      <BAB4 />
    </section>
  );
}
