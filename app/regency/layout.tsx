import DistrictRegencyLayout from '@/components/layout/district-regency-layout';
import React from 'react';

export default function DistrictRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DistrictRegencyLayout>{children}</DistrictRegencyLayout>;
}
