import React from 'react';
import InputField from '@/components/Input/input-field';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const IdentitasBUMDes = () => {
  return (
    <div>
      <h1 className="p-2 font-bold text-lg mt-4">Identitas dan Kedudukan</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputField
          label="Nama BUMDes"
          placeholder="Masukkan Nama BUMDes"
          name="nama_bumdes"
          type="text"
        />
        <InputField
          label="Tanggal Pendirian BUMDes"
          placeholder="Masukkan Tanggal Pendirian BUMDes"
          name="tanggal_pendirian_bumdes"
          type="date"
        />
        <InputField
          label="Nomor Peraturan Desa"
          placeholder="Masukkan Nomor Peraturan Desa"
          name="nomor_peraturan_desa"
          type="number"
        />
        <InputField
          label="Nomor SK Pengurus BUMDes"
          placeholder="Masukkan Nomor SK Pengurus BUMDes"
          name="nomor_sk_pengurus_bumdes"
          type="number"
        />
        <InputField
          label="Tanggal SK Pengurus BUMDes "
          placeholder="Masukkan Tanggal SK Pengurus BUMDes"
          name="tanggal_sk_pengurus_bumdes"
          type="date"
        />
        <InputField
          label="Nomor SK AD/ART BUMDes"
          placeholder="Masukkan Nomor SK AD/ART BUMDes"
          name="nomor_sk_ad_art_bumdes"
          type="number"
        />
        <InputField
          label="Tanggal SK AD/ART BUMDes"
          placeholder="Masukkan Tanggal SK AD/ART BUMDes"
          name="tanggal_sk_ad_art_bumdes"
          type="date"
        />
        <InputField
          label="Nama Bank Buku Rek. BUMDes"
          placeholder="Masukkan Nama Bank Buku Rek. BUMDes"
          name="nama_bank_buku_rek_bumdes"
          type="text"
        />
        <InputField
          label="Nomor Rekening BUMDes"
          placeholder="Masukkan Rekening BUMDes"
          name="nomor_rekening_bumdes"
          type="text"
        />
        <InputField
          label="NPWP BUMDes"
          placeholder="Masukkan NPWP BUMDes"
          name="npwp_bumdes"
          type="text"
        />
        <div className="flex">
          <Label className="p-2 block text-sm font-medium text-black w-full">
            Alamat Kantor BUMDes
          </Label>
          <h1 className="p-2 text-sm font-medium text-black">:</h1>
          <Textarea
            placeholder="Masukkan Alamat Kantor BUMDes"
            name="alamat_kantor_bumdes"
            className={`p-2 w-full border rounded-md ml h-28`}
          />
        </div>
        <InputField
          label="Telepon Kantor/Fax BUMDes"
          placeholder="Masukkan Telepon Kantor/Fax BUMDes"
          name="telepon_kantor_fax_bumdes"
          type="number"
        />
        <InputField
          label="Email BUMDes"
          placeholder="Masukkan Email BUMDes"
          name="email_bumdes"
          type="email"
        />
        <InputField
          label="Website BUMDes"
          placeholder="Masukkan Website BUMDes"
          name="website_bumdes"
          type="text"
        />
        <div className="flex">
          <label
            htmlFor="Website BUMDes"
            className="p-2 block text-sm font-medium text-black w-full"
          >
            Media Sosial BUMDes
          </label>
        </div>
        <InputField
          label="a. Facebook"
          placeholder="Masukkan Nama Facebook BUMDes"
          name="facebook_bumdes"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="b. Instagram"
          placeholder="Masukkan Nama Instagram BUMDes"
          name="instagram_bumdes"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="c. Twitter"
          placeholder="Masukkan Nama Twitter BUMDes"
          name="twitter_bumdes"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="d. Lainnya"
          placeholder="Masukkan Media Sosial Lainnya"
          name="sosial_media_lainnya"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="Penyertaan Modal Awal "
          placeholder="Masukkan Penyertaan Modal Awal "
          name="penyertaan_modal_awal"
          type="text"
        />
        <InputField
          label="Penambahan Penyertaan Modal "
          placeholder="Masukkan Penambahan Penyertaan Modal "
          name="penambahan_penyertaan_modal"
          type="text"
        />
      </div>
    </div>
  );
};

export default IdentitasBUMDes;
