import React from 'react';
import Heading3_1 from '../heading-3/heading3-1';
import Heading3_2 from '../heading-3/heading3-2';
import Heading3_3 from '../heading-3/heading3-3';
import Heading3_4 from '../heading-3/heading3-4';
import Heading3_5 from '../heading-3/heading3-5';
import Heading3_6 from '../heading-3/heading3-6';

export default function Heading2_3() {
  return (
    <section>
      <section className="">
        <h2 className="text-start text-lg font-semibold mb-2 mt-4">
          C. Penerapan Kebijakan Akuntansi
        </h2>
        <p className="text-justify indent-16">
          Kebijakan Akuntansi mencerminkan prinsip kehati-hatian dan mencakup
          semua hal yang material dan sesuai dengan ketentuan dalam Pernyataan
          Standar Akuntansi Keuangan (PSAK).
        </p>
      </section>

      <section className="">
        <Heading3_1 />
        <Heading3_2 />
        <Heading3_3 />
        <Heading3_4 />
        <Heading3_5 />
        <Heading3_6 />
      </section>
    </section>
  );
}
