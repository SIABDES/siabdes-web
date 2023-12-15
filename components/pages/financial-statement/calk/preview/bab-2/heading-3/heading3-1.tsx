import React from 'react';

export default function Heading3_1() {
  return (
    <section>
      <h2 className="text-start text-lg font-semibold mt-4 mb-2 indent-7">
        1. Kebijakan Akuntansi Pendapatan
      </h2>

      <section>
        <h3 className="text-start text-base font-semibold mt-2 mb-2 indent-14">
          a. Definisi
        </h3>
        <p className="text-justify mb-2 indent-7 ml-20">
          Pendapatan adalah jumlah uang yang diterima oleh perusahaan atau
          organisasi dari kegiatan aktivitasnya seperti penjualan produk
          dan/atau jasa kepada pelanggan. Diakui sebagai penambah ekuitas dalam
          periode tahun anggaran yang bersangkutan dan tidak perlu dibayar
          kembali.
        </p>
      </section>

      <section>
        <h3 className="text-start text-base font-semibold mt-2 mb-2 indent-14">
          b. Pengakuan
        </h3>
        <h3 className="text-start indent-20">1) Pendapatan diakui :</h3>
        <div className="flex space-x-4 my-2">
          <h3 className="text-start indent-28">a.</h3>
          <p className="text-justify">
            Pada saat diterima oleh Bendahara Penerimaan dan telah disetorkan ke
            Kas pada hari kerja yang ditentukan.
          </p>
        </div>
        <div className="flex space-x-4 my-2">
          <h3 className="text-start indent-28">b.</h3>
          <p className="text-justify">
            Pendapatan yang diterima oleh Bendahara Penerimaan Entitas Akuntansi
            dan sudah disetorkan ke Kas/setara kas BUMDes pada akhir tahun buku
            diakui sebagai Pendapatan tahun berjalan, sedangkan pendapatan yang
            belum disetor ke Kas/setara kas BUMDes pada akhir tahun buku diakui
            sebagai pendapatan tahun berikutnya.
          </p>
        </div>
      </section>
    </section>
  );
}
