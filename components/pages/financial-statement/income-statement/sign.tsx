'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

export default function Sign() {
  const session = useSession();
  return (
    <section className="flex justify-end my-10">
      <div className="w-fit">
        <h1>Lengkong, 31 Januari 2023</h1>
        <h1 className="text-center">Kepala Unit Usaha</h1>
        <h1 className="text-center my-20">Muhammad Ali</h1>
      </div>
    </section>
  );
}
