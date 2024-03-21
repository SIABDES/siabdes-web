import React from 'react';

export default function Heading3_2() {
  return (
    <section>
      <h2 className="text-start text-lg font-semibold mt-4 mb-2 indent-7">
        2. Kebijakan Akuntansi Belanja dan Beban
      </h2>

      <section>
        <h3 className="text-start text-base font-semibold mt-2 mb-2 indent-14">
          a. Definisi
        </h3>
        <div className="flex space-x-4 my-2 ml-20">
          <h3 className="text-start">1)</h3>
          <p className="text-justify">
            Belanja adalah semua pengeluaran dari Rekening Kas/setara kas BUMDes
            yang mengurangi Saldo Anggaran Lebih dalam periode tahun anggaran
            bersangkutan yang tidak akan diperoleh pembayarannya kembali.
          </p>
        </div>
        <div className="flex space-x-4 my-2 ml-20">
          <h3 className="text-start">2)</h3>
          <p className="text-justify">
            Beban adalah penurunan manfaat ekonomi atau potensi jasa dalam
            periode pelaporan yang menurunkan ekuitas, yang dapat berupa
            pengeluaran atau konsumsi aset atau timbulnya kewajiban.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-start text-base font-semibold mt-2 mb-2 indent-14">
          b. Pengakuan
        </h3>
        <div className="flex space-x-4 my-2 ml-20">
          <h3 className="text-start">1)</h3>
          <p className="text-justify">
            Belanja diakui pada saat terjadinya pengeluaran dari rekening
            Kas/setara kas BUMDes daerah. Pengeluaran melalui bendahara
            pengeluaran pada entitas akuntansi pengakuannya terjadi pada saat
            pertanggungjawaban atas pengeluaran tersebut disahkan oleh pengguna
            anggaran.
          </p>
        </div>

        <section>
          <div className="flex space-x-4 my-2 ml-20">
            <h3 className="text-start">2)</h3>
            <p className="text-justify">Beban diakui pada saat:</p>
          </div>
          <section>
            <div className="flex space-x-4 my-2">
              <h3 className="text-start indent-28">a.</h3>
              <p className="text-justify">
                Timbulnya kewajiban, yaitu pada saat terjadinya peralihan hak
                dari pihak lain ke Entitas Akuntansi atau Entitas Pelaporan
                tanpa harus diikuti keluarnya Kas/setara kas BUMDes.
              </p>
            </div>
            <div className="flex space-x-4 my-2">
              <h3 className="text-start indent-28">b.</h3>
              <p className="text-justify">
                Terjadinya konsumsi barang/ jasa, yaitu pengeluaran kas kepada
                pihak lain yang tidak didahului timbulnya kewajiban konsumsi
                barang/ jasa non kas dalam kegiatan operasional.
              </p>
            </div>
            <div className="flex space-x-4 my-2">
              <h3 className="text-start indent-28">c.</h3>
              <p className="text-justify">
                Terjadinya penurunan manfaat ekonomi atau potensi jasa, yaitu
                pada saat penurunan nilai aset sehubungan penggunaan aset
                bersangkutan atau berlalunya waktu.
              </p>
            </div>
          </section>
        </section>
      </section>

      <section>
        <h3 className="text-start text-base font-semibold mt-2 mb-2 indent-14">
          c. Pengukuran
        </h3>
        <p className="text-justify space-x-4 my-2 ml-20 indent-7">
          Pengeluaran belanja dicatat sejumlah jumlah kas yang dikeluarkan dari
          Rekening Kas atau setara kas BUMDes. Dalam hal pengeluaran berupa
          barang atau jasa, pencatatan dilakukan sebesar nilai aktual barang
          atau jasa yang diserahkan. Jika nilai barang atau jasa tidak
          dicantumkan dalam proses serah terima, entitas dapat melakukan
          penaksiran untuk menentukan nilai yang bersangkutan.
        </p>
        <div className="flex space-x-4 my-2 ml-20">
          <h3 className="text-start">1)</h3>
          <p className="text-justify">Beban dicatat sebesar:</p>
        </div>
        <section>
          <div className="flex space-x-4 my-2">
            <h3 className="text-start indent-28">a.</h3>
            <p className="text-justify">
              Jumlah kas yang dibayarkan jika seluruh pengeluaran tersebut
              dibayar pada periode berjalan.
            </p>
          </div>
          <div className="flex space-x-4 my-2">
            <h3 className="text-start indent-28">b.</h3>
            <p className="text-justify">
              Jumlah biaya periode berjalan yang harus dibayar pada masa yang
              akan datang.
            </p>
          </div>
          <div className="flex space-x-4 my-2">
            <h3 className="text-start indent-28">c.</h3>
            <p className="text-justify">
              Alokasi sistematis untuk periode berjalan atas biaya yang telah
              dikeluarkan.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}
