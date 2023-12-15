'use client';
import React from 'react';
import PreviewBumdesIdentity from '@/components/pages/financial-statement/calk/preview/bumdes-identity';
import PreviewBumdesAdministrator from '@/components/pages/financial-statement/calk/preview/bumdes-administrator';
import PreviewModelingHistory from '@/components/pages/financial-statement/calk/preview/modeling-history';

import BAB2 from '@/components/pages/financial-statement/calk/preview/bab-2/bab-2';

export default function Priview() {
  return (
    <section>
      {/* <PreviewBumdesIdentity />
      <PreviewBumdesAdministrator />
      <PreviewModelingHistory /> */}
      <BAB2 />
    </section>
  );
}
