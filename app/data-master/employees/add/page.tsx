'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout/layout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ComboBox } from '@/components/ui/combobox';
import InputField from '@/components/Input/input-field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

export default function Add() {
  const statusKaryawan = [
    { label: 'Karyawan Lama', value: 'karyawan_lama' },
    { label: 'Karyawan Baru', value: 'karyawan_baru' },
  ];

  const jenisKelamin = [
    { label: 'Laki-laki', value: 'laki-laki' },
    { label: 'Perempuan', value: 'perempuan' },
  ];

  const statusPerkawinan = [
    { label: 'Belum Kawin', value: 'belum_kawin' },
    { label: 'Kawin', value: 'kawin' },
    { label: 'Cerai', value: 'cerai' },
  ];

  const statusNPWP = [
    { label: 'Digabung Dengan Suami', value: 'digabung_dengan_suami' },
    { label: 'Dipisah Dari Suami', value: 'dipisah_dari_suami' },
  ];

  const jumlahTanggungan = [
    { label: 'Tidak Ada', value: 'tidak_ada' },
    { label: '1 (Satu)', value: '1' },
    { label: '2 (Dua)', value: '2' },
    { label: '3 (Tiga)', value: '3' },
  ];

  const JenisTenagaKerja = [
    { label: 'Pegawai Tetap Bulanan', value: 'pegawai_tetap_bulanan' },
    { label: 'Pegawai Tidak Tetap', value: 'pegawai_tidak_tetap' },
    { label: 'Pesangon', value: 'pesangon' },
    { label: 'Lainnya', value: 'lainnya' },
  ];

  const JenisPegawaiTidakTetap = [
    { label: 'Mingguan', value: 'mingguan' },
    { label: 'Borongan', value: 'borongan' },
    { label: 'Satuan', value: 'satuan' },
  ];

  const JenisPesangon = [
    { label: 'Sekaligus', value: 'sekaligus' },
    { label: 'Berkala', value: 'berkala' },
  ];

  const JenisLainnya = [
    { label: 'Peserta Kegiatan', value: 'peserta_kegiatan' },
    { label: 'Pengawas Non Pegawai', value: 'pengawas_non_pegawai' },
  ];

  const [selectedStatusKaryawan, setSelectedStatusKaryawan] = useState<
    string | undefined
  >(undefined);
  const [selectedJenisKelamin, setSelectedJenisKelamin] = useState<
    string | undefined
  >(undefined);
  const [selectedStatusPerkawinan, setSelectedStatusPerkawinan] = useState<
    string | undefined
  >(undefined);
  const [selectedStatusNPWP, setSelectedStatusNPWP] = useState<
    string | undefined
  >(undefined);
  const [selectedJumlahTanggungan, setSelectedJumlahTanggungan] = useState<
    string | undefined
  >(undefined);
  const [selectedJenisTenagaKerja, setSelectedJenisTenagaKerja] = useState<
    string | undefined
  >(undefined);
  const [selectedJenisPegawaiTidakTetap, setSelectedJenisPegawaiTidakTetap] =
    useState<string | undefined>(undefined);
  const [selectedJenisPesangon, setSelectedJenisPesangon] = useState<
    string | undefined
  >(undefined);
  const [selectedJenisLainnya, setSelectedJenisLainnya] = useState<
    string | undefined
  >(undefined);

  return (
    <Layout>
      <section>
        <header>
          <h1 className="text-2xl font-bold mb-4 text-left underline underline-offset-8 ">
            Tambah Data Tenaga Kerja Unit
          </h1>
        </header>
        <section className="border p-6 grid grid-cols-1 md:grid-cols-1 gap-2">
          <InputField
            label="Nama Lengkap"
            placeholder="Masukkan Nama Lengkap"
            name="nama_lengkap"
            type="text"
          />
          <InputField
            label="NIK"
            placeholder="Masukkan NIK"
            name="nik"
            type="number"
          />
          <div>
            <InputField
              label="NPWP"
              placeholder="Masukkan NPWP"
              name="npwp"
              type="number"
            />
            <RadioGroup defaultValue="ada_npwp">
              <div className="flex gap-6 justify-center ml-72 p-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ada_npwp" id="ada_npwp" />
                  <Label htmlFor="ada_npwp">Ada NPWP</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tidak_ada_npwp" id="tidak_ada_npwp" />
                  <Label htmlFor="tidak_ada_npwp">Tidak Ada NPWP</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="flex">
            <Label className="p-2 block text-sm font-medium text-black w-full">
              Status Tenaga Kerja
            </Label>
            <h1 className="p-2 text-sm font-medium text-black">:</h1>
            <ComboBox
              className="w-full"
              items={statusKaryawan}
              value={selectedStatusKaryawan}
              setValue={(value) => setSelectedStatusKaryawan(value)}
            />
          </div>
          <InputField
            label="Bulan Mulai Bekerja"
            placeholder="Masukkan Bulan Mulai Bekerja"
            name="bulan_mulai_bekerja"
            type="date"
          />
          <div className="flex">
            <Label className="p-2 block text-sm font-medium text-black w-full">
              Jenis Kelamin
            </Label>
            <h1 className="p-2 text-sm font-medium text-black">:</h1>
            <ComboBox
              className="w-full"
              items={jenisKelamin}
              value={selectedJenisKelamin}
              setValue={(value) => setSelectedJenisKelamin(value)}
            />
          </div>
          <h1 className="text-sm font-semibold p-2 text-left text-black">
            Status Penghasilan Tidak Kena Pajak
          </h1>
          <div className="flex">
            <Label className="p-2 block text-sm font-medium text-black w-full">
              Status Perkawinan
            </Label>
            <h1 className="p-2 text-sm font-medium text-black">:</h1>
            <ComboBox
              className="w-full"
              items={statusPerkawinan}
              value={selectedStatusPerkawinan}
              setValue={(value) => setSelectedStatusPerkawinan(value)}
            />
          </div>
          <div className="flex">
            <Label className="p-2 block text-sm font-medium text-black w-full">
              Status NPWP
            </Label>
            <h1 className="p-2 text-sm font-medium text-black">:</h1>
            <ComboBox
              className="w-full"
              items={statusNPWP}
              value={selectedStatusNPWP}
              setValue={(value) => setSelectedStatusNPWP(value)}
            />
          </div>
          <div className="flex">
            <Label className="p-2 block text-sm font-medium text-black w-full">
              Jumlah Tanggungan
            </Label>
            <h1 className="p-2 text-sm font-medium text-black">:</h1>
            <ComboBox
              className="w-full"
              items={jumlahTanggungan}
              value={selectedJumlahTanggungan}
              setValue={(value) => setSelectedJumlahTanggungan(value)}
            />
          </div>
          <div className="flex">
            <Label className="p-2 block text-sm font-medium text-black w-full">
              Jenis Tenaga Kerja
            </Label>
            <h1 className="p-2 text-sm font-medium text-black">:</h1>
            <ComboBox
              className="w-full"
              items={JenisTenagaKerja}
              value={selectedJenisTenagaKerja}
              setValue={(value) => setSelectedJenisTenagaKerja(value)}
            />
          </div>
        </section>
        <div className="flex justify-end mt-10 mb-10">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Simpan
          </Button>
        </div>
      </section>
    </Layout>
  );
}
