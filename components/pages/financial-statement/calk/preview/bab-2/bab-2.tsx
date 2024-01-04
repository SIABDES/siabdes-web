import React from 'react';
import Heading2_1 from './heading-2/heading2-1';
import Heading2_2 from './heading-2/heading2-2';
import Heading2_3 from './heading-2/heading2-3';

export default function BAB2() {
  return (
    <section>
      <header className="text-center text-xl font-bold mt-10 mb-4">
        <h1>BAB II</h1>
        <h1>ENTITAS PELAPORAN DAN ENTITAS AKUNTANSI</h1>
      </header>
      <div className="max-w-4xl mx-auto">
        <Heading2_1 />
        <Heading2_2 />
        <Heading2_3 />
      </div>
    </section>
  );
}
