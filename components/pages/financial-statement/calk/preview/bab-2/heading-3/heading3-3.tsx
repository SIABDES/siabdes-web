import React from 'react';

export default function Heading3_3() {
  return (
    <section>
      <h2 className="text-start text-lg font-semibold mt-4 mb-2 indent-7">
        3. Kebijakan Akuntansi Pembiayaan
      </h2>

      <section>
        <h3 className="text-start text-base font-semibold mt-2 mb-2 indent-14">
          a. Definisi
        </h3>
        <p className="text-justify mb-2 indent-7 ml-20">
          Pembiayaan dalam konteks BUMDes mencakup seluruh transaksi keuangan,
          baik penerimaan maupun pengeluaran, yang memerlukan pembayaran atau
          akan diterima kembali. Ini juga mencakup pengeluaran yang diantisipasi
          akan diterima kembali, dengan tujuan utama dalam penganggaran BUMDes
          adalah untuk menutup defisit atau memanfaatkan surplus anggaran.
        </p>
      </section>
      <div className="flex space-x-4 my-2 ml-20">
        <h3 className="text-start">1)</h3>
        <p className="text-justify">Beban dicatat sebesar:</p>
      </div>
      <section>
        <h3 className="text-start text-base font-semibold mt-2 mb-2 indent-14">
          b. Pengakuan
        </h3>
        <div className="flex space-x-4 my-2 ml-20">
          <h3 className="text-start">1)</h3>
          <p className="text-justify">
            Penerimaan pembiayaan diakui pada saat diterima pada Rekening
            Kas/setara kas BUMDes
          </p>
        </div>
        <div className="flex space-x-4 my-2 ml-20">
          <h3 className="text-start">2)</h3>
          <p className="text-justify">
            Pengeluaran pembiayaan diakui pada saat dikeluarkan dari Rekening
            Kas/setara kas BUMDes
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-start text-base font-semibold mt-2 mb-2 indent-14">
          c. Pengukuran
        </h3>
        <div className="flex space-x-4 my-2 ml-20">
          <h3 className="text-start">1)</h3>
          <p className="text-justify">
            Akuntansi penerimaan pembiayaan diterapkan dengan azas bruto, di
            mana entitas mencatat penerimaan bruto tanpa mencatat jumlah neto
            setelah dikompensasi dengan pengeluaran.
          </p>
        </div>
        <div className="flex space-x-4 my-2 ml-20">
          <h3 className="text-start">2)</h3>
          <p className="text-justify">
            Akuntansi pengeluaran pembiayaan dilaksanakan berdasarkan azas bruto
          </p>
        </div>
      </section>
    </section>
  );
}
