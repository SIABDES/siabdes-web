'use client';

import useGetPPNDetails from '@/hooks/ppn/useGetPPNDetails';
import React from 'react';

export default function Details({ params }: { params: { ppn_id: string } }) {
  console.log(`params`, params);

  const { data: details, isFetched } = useGetPPNDetails({ params });
  console.log(details);
  return <div>Details</div>;
}
