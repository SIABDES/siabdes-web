import React from 'react';

export default function TaxInformation() {
  return (
    <div className="border-2 border-black p-3 my-10 space-y-6 mt-20">
      <header className="bg-[#B8E2F4] p-2 mb-5">
        <h1 className="text-center font-semibold text-base">
          Keterangan Objek Pajak Pertambahan Nilai
        </h1>
      </header>
      <h1 className="underline underline-offset-8 font-semibold text-base">
        OBJEK PAJAK PPN
      </h1>
      <div className="flex space-x-4">
        <div className="border-2 border-black p-3 rounded-lg">
          <h2 className="text-center font-semibold text-base mb-3">
            Barang Kena Pajak (BKP)
          </h2>
          <ol className="list-decimal ml-8 text-sm">
            <li>
              Penyerahan barang Kena Pajak di dalam Daerah Pabean yang dilakukan
              oleh Pengusaha Kena Pajak
            </li>
            <li>Impor Barang Kena Pajak</li>
            <li>
              Pemanfaatan Barang Kena Pajak Tidak Berwujud dari luar Daerah
              Pabean di dalam Daerah Pabean
            </li>
            <li>Ekspor Barang Kena Pajak Berwujud oleh Pengusaha Kena Pajak</li>
            <li>
              Ekspor Barang Kena Pajak Tidak Berwujud oleh Pengusaha Kena Pajak
            </li>
          </ol>
        </div>
        <div className="border-2 border-black p-3 rounded-lg">
          <h2 className="text-center font-semibold text-base mb-3">
            Jasa Kena Pajak (JKP)
          </h2>
          <ol className="list-decimal ml-8 text-sm">
            <li>
              Penyerahan Jasa Kena Pajak di dalam Daerah Pabean yang dilakukan
              oleh Pengusaha Kena Pajak
            </li>
            <li>
              Pemanfaatan Jasa Kena Pajak dari luar Daerah Pabean di dalam
              Daerah Pabean
            </li>
            <li>Ekspor Jasa Kena Pajak oleh Pengusaha Kena Pajak</li>
          </ol>
        </div>
      </div>

      <h1 className="underline underline-offset-8 font-semibold text-base">
        BUKAN OBJEK PAJAK PPN
      </h1>
      <div className="border-2 border-black p-3 rounded-lg">
        <h2 className="text-center font-semibold text-base mb-3">
          Bukan Barang Kena Pajak (BKP)
        </h2>
        <ol className="list-decimal ml-8 text-sm">
          <li>
            Barang kebutuhan pokok yang sangat dibutuhkan oleh rakyat banyak,
            seperti beras, garam, daging, telur, susu, buah dan sayur
          </li>
          <li>
            Makanan dan minuman yang disajikan di hotel, restoran, rumah makan,
            warung, dan sejenisnya, meliputi makanan dan minuman baik yang
            dikonsumsi di tempat maupun tidak, termasuk makanan dan minuman yang
            diserahkan oleh usaha jasa boga atau katering
          </li>
          <li>Uang, emas batangan, dan surat berharga</li>
          <li>
            Barang hasil pertambangan atau hasil pengeboran yang diambil
            langsung dari sumbernya, tidak termasuk hasil pertambangan batu
            bara.
          </li>
        </ol>
      </div>

      <div className="border-2 border-black p-3 rounded-lg">
        <h2 className="text-center font-semibold text-base mb-3">
          Bukan Jasa Kena Pajak (JKP)
        </h2>
        <ol className="list-decimal ml-8 text-sm">
          <li>
            Jasa pelayanan kesahatan medik
            <ol className="list-[lower-alpha] ml-5 mb-2">
              <li>
                Jasa kesehatan tertentu
                <ol className="list-disc ml-6">
                  <li>Jasa dokter umum, dokter spesialis, dan dokter gigi</li>
                  <li>Jasa dokter hewan</li>
                  <li>
                    Jasa ahli kesehatan seperti ahli akupunktur, ahli gigi, ahli
                    gizi, dan ahli fisioterapi
                  </li>
                  <li>Jasa kebidanan dan dukun bayi</li>
                  <li>Jasa paramedis dan perawat</li>
                  <li>
                    Jasa rumah sakit, rumah bersalin, klinik kesehatan,
                    laboratorium kesehatan, dan sanatorium
                  </li>
                  <li>Jasa psikolog dan psikiater</li>
                  <li>
                    Jasa pengobatan alternatif, termasuk yang dilakukan oleh
                    paranormal
                  </li>
                </ol>
              </li>
              <li>
                Jasa kesehatan yang ditanggung oleh jaminan kesehatan nasional
              </li>
            </ol>
          </li>
          <li>
            Jasa pelayanan sosial yang tidak mencari keuntungan{' '}
            <ol className="list-[lower-alpha] ml-5 mb-2">
              <li>Jasa pelayanan panti asuhan dan panti jompo</li>
              <li>Jasa pemadam kebakaran</li>
              <li>Jasa pemberian pertolongan pada kecelakaan</li>
              <li>Jasa lembaga rehabilitasi</li>
              <li>
                Jasa penyediaan rumah duka atau jasa pemakaman, termasuk
                krematorium
              </li>
              <li>Jasa di bidang olahraga</li>
            </ol>
          </li>
          <li>
            Jasa keuangan
            <ol className="list-[lower-alpha] ml-5 mb-2">
              <li>
                Jasa menghimpun dana dari masyarakat berupa giro, deposito
                berjangka, sertifikat deposito, tabungan, dan/atau bentuk lain
                yang dipersamakan dengan itu
              </li>
              <li>
                Jasa menempatkan dana, meminjam dana, atau meminjamkan dana
                kepada pihak lain dengan menggunakan surat, sarana
                telekomunikasi maupun dengan wesel unjuk, cek, atau sarana
                lainnya
              </li>
              <li>
                Jasa pembiayaan, termasuk pembiayaan berdasarkan prinsip
                syariah, berupa: sewa guna usaha dengan hak opsi; anjak piutang;
                usaha kartu kredit; dan/atau pembiayaan konsumen
              </li>
              <li>
                Jasa penyaluran pinjaman atas dasar hukum gadai, termasuk gadai
                syariah dan fidusia
              </li>
              <li>Jasa penjaminan</li>
            </ol>
          </li>
          <li>
            Jasa asuransi, kecuali jasa penunjang asuransi termasuk agen
            asuransi, penilai kerugian asuransi, dan konsultan asuransi
          </li>
          <li>Jasa keagamaan</li>
          <li>
            Jasa pendidikan
            <ol className="list-[lower-alpha] ml-5 mb-2">
              <li>
                Jasa penyelenggaraan pendidikan sekolah, seperti jasa
                penyelenggaraan pendidikan umum, pendidikan kejuruan, pendidikan
                luar biasa, pendidikan kedinasan, pendidikan keagamaan,
                pendidikan akademik, dan pendidikan profesional; dan
              </li>
              <li>Jasa penyelenggaraan pendidikan luar sekolah</li>
            </ol>
          </li>
          <li>Jasa kesenian dan hiburan</li>
          <li>
            Jasa angkutan umum di darat dan di air serta jasa angkutan udara
            dalam negeri yang menjadi bagian yang tidak terpisahkan dari jasa
            angkutan udara luar negeri
          </li>
          <li>
            Jasa tenaga kerja
            <ol className="list-[lower-alpha] ml-5 mb-2">
              <li>
                Jasa penyediaan tenaga kerja sepanjang pengusaha penyedia tenaga
                kerja tidak bertanggung jawab atas hasil kerja dari tenaga kerja
                tersebut; dan
              </li>
              <li>Jasa penyelenggaraan pelatihan bagi tenaga kerja</li>
            </ol>
          </li>
          <li>
            Jasa yang disediakan oleh pemerintah dalam rangka menjalankan
            pemerintahan secara umum
          </li>
          <li>Jasa penyediaan tempat parkir</li>
          <li>Jasa penyiaran yang tidak bersifat iklan</li>
          <li>Jasa pengiriman surat dengan perangko</li>
          <li>Jasa perhotelan</li>
          <li>Jasa telepon umum dengan menggunakan uang logam</li>
          <li>Jasa pengiriman uang dengan wesel pos</li>
          <li>Jasa penyediaan tempat parkir</li>
        </ol>
      </div>
    </div>
  );
}
