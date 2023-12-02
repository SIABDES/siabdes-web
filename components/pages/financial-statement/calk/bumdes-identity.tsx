'use client';

import React, { useState } from 'react';
import InputField from '@/components/Input/input-field';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BumdesIdentityFormData } from '@/types/financial-statement/calk/bumdes-identity';

interface IdentitasBUMDesProps {
  onUpdateFormData: (data: BumdesIdentityFormData) => void;
}

const BumdesIdentity: React.FC<IdentitasBUMDesProps> = ({
  onUpdateFormData,
}) => {
  const [formData, setFormData] = useState<BumdesIdentityFormData>({
    nama_bumdes: '',
    tanggal_pendirian_bumdes: '',
    nomor_peraturan_desa: '',
    nomor_sk_pengurus_bumdes: '',
    tanggal_sk_pengurus_bumdes: '',
    nomor_sk_ad_art_bumdes: '',
    tanggal_sk_ad_art_bumdes: '',
    nama_bank_buku_rek_bumdes: '',
    nomor_rekening_bumdes: '',
    npwp_bumdes: '',
    alamat_kantor_bumdes: '',
    telepon_kantor_fax_bumdes: '',
    email_bumdes: '',
    website_bumdes: '',
    facebook_bumdes: '',
    instagram_bumdes: '',
    twitter_bumdes: '',
    sosial_media_lainnya: '',
    penyertaan_modal_awal: '',
    penambahan_penyertaan_modal: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName?: keyof BumdesIdentityFormData
  ) => {
    if (!fieldName) {
      fieldName = e.target.name as keyof BumdesIdentityFormData;
    }

    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
    onUpdateFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };
  return (
    <div>
      <h1 className="p-2 font-bold text-lg mt-4">Identitas dan Kedudukan</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputField
          label="Nama BUMDes"
          placeholder="Masukkan Nama BUMDes"
          name="nama_bumdes"
          type="text"
          value={formData.nama_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Tanggal Pendirian BUMDes"
          placeholder="Masukkan Tanggal Pendirian BUMDes"
          name="tanggal_pendirian_bumdes"
          type="date"
          value={formData.tanggal_pendirian_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Nomor Peraturan Desa"
          placeholder="Masukkan Nomor Peraturan Desa"
          name="nomor_peraturan_desa"
          type="number"
          value={formData.nomor_peraturan_desa}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Nomor SK Pengurus BUMDes"
          placeholder="Masukkan Nomor SK Pengurus BUMDes"
          name="nomor_sk_pengurus_bumdes"
          type="number"
          value={formData.nomor_sk_pengurus_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Tanggal SK Pengurus BUMDes "
          placeholder="Masukkan Tanggal SK Pengurus BUMDes"
          name="tanggal_sk_pengurus_bumdes"
          type="date"
          value={formData.tanggal_sk_pengurus_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Nomor SK AD/ART BUMDes"
          placeholder="Masukkan Nomor SK AD/ART BUMDes"
          name="nomor_sk_ad_art_bumdes"
          type="number"
          value={formData.nomor_sk_ad_art_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Tanggal SK AD/ART BUMDes"
          placeholder="Masukkan Tanggal SK AD/ART BUMDes"
          name="tanggal_sk_ad_art_bumdes"
          type="date"
          value={formData.tanggal_sk_ad_art_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Nama Bank Buku Rek. BUMDes"
          placeholder="Masukkan Nama Bank Buku Rek. BUMDes"
          name="nama_bank_buku_rek_bumdes"
          type="text"
          value={formData.nama_bank_buku_rek_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Nomor Rekening BUMDes"
          placeholder="Masukkan Rekening BUMDes"
          name="nomor_rekening_bumdes"
          type="text"
          value={formData.nomor_rekening_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="NPWP BUMDes"
          placeholder="Masukkan NPWP BUMDes"
          name="npwp_bumdes"
          type="text"
          value={formData.npwp_bumdes}
          onChange={(e) => handleChange(e)}
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
            value={formData.alamat_kantor_bumdes}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <InputField
          label="Telepon Kantor/Fax BUMDes"
          placeholder="Masukkan Telepon Kantor/Fax BUMDes"
          name="telepon_kantor_fax_bumdes"
          type="number"
          value={formData.telepon_kantor_fax_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Email BUMDes"
          placeholder="Masukkan Email BUMDes"
          name="email_bumdes"
          type="email"
          value={formData.email_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Website BUMDes"
          placeholder="Masukkan Website BUMDes"
          name="website_bumdes"
          type="text"
          value={formData.website_bumdes}
          onChange={(e) => handleChange(e)}
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
          value={formData.facebook_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="b. Instagram"
          placeholder="Masukkan Nama Instagram BUMDes"
          name="instagram_bumdes"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.instagram_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="c. Twitter"
          placeholder="Masukkan Nama Twitter BUMDes"
          name="twitter_bumdes"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.twitter_bumdes}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="d. Lainnya"
          placeholder="Masukkan Media Sosial Lainnya"
          name="sosial_media_lainnya"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.sosial_media_lainnya}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Penyertaan Modal Awal "
          placeholder="Masukkan Penyertaan Modal Awal "
          name="penyertaan_modal_awal"
          type="text"
          value={formData.penyertaan_modal_awal}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="Penambahan Penyertaan Modal "
          placeholder="Masukkan Penambahan Penyertaan Modal "
          name="penambahan_penyertaan_modal"
          type="text"
          value={formData.penambahan_penyertaan_modal}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default BumdesIdentity;
