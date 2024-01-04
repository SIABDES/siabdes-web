'use client';

import InputField from '@/components/Input/input-field';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect } from 'react';
import useGetBumdesProfile from '@/hooks/bumdes/profile/useGetBumdesProfile';

export default function BumdesIdentity() {
  const { data } = useGetBumdesProfile();
  const bumdes = data?.data;
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6">A. Identitas Dan Kedudukan</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputField
          label="Nama BUMDes"
          name="nama_bumdes"
          type="text"
          value={bumdes?.name}
        />
        <InputField
          label="Tanggal Pendirian BUMDes"
          name="tanggal_pendirian_bumdes"
          type="text"
          value={bumdes?.founded_at}
        />
        <InputField
          label="Nomor Peraturan Desa"
          name="nomor_peraturan_desa"
          type="text"
          value="ini dari mana ya?"
        />
        <InputField
          label="Nomor SK Pengurus BUMDes"
          name="nomor_sk_pengurus_bumdes"
          type="number"
          value="ini dari mana ya?"
        />
        <InputField
          label="Tanggal SK Pengurus BUMDes "
          name="tanggal_sk_pengurus_bumdes"
          type="date"
          value="ini dari mana ya?"
        />
        <InputField
          label="Nomor SK AD/ART BUMDes"
          name="nomor_sk_ad_art_bumdes"
          type="string"
          value={bumdes?.sk_administrator_date}
        />
        <InputField
          label="Tanggal SK AD/ART BUMDes"
          name="tanggal_sk_ad_art_bumdes"
          type="date"
        />
        <InputField
          label="Nama Bank Buku Rek. BUMDes"
          name="nama_bank_buku_rek_bumdes"
          type="text"
        />
        <InputField
          label="Nomor Rekening BUMDes"
          name="nomor_rekening_bumdes"
          type="text"
        />
        <InputField label="NPWP BUMDes" name="npwp_bumdes" type="text" />
        <div className="flex">
          <Label className="p-2 block text-base font-medium text-black w-full">
            Alamat Kantor BUMDes
          </Label>
          <h1 className="p-2 text-base font-medium text-black">:</h1>
          <Textarea
            name="alamat_kantor_bumdes"
            className={`p-2 w-full border rounded-md ml h-28`}
            value={bumdes?.complete_address}
          />
        </div>
        <InputField
          label="Telepon Kantor/Fax BUMDes"
          name="telepon_kantor_fax_bumdes"
          type="number"
        />
        <InputField label="Email BUMDes" name="email_bumdes" type="email" />
        <InputField label="Website BUMDes" name="website_bumdes" type="text" />
        <div className="flex">
          <label
            htmlFor="Website BUMDes"
            className="p-2 block text-base font-medium text-black w-full"
          >
            Media Sosial BUMDes
          </label>
        </div>
        <InputField
          label="a. Facebook"
          name="facebook_bumdes"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="b. Instagram"
          name="instagram_bumdes"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="c. Twitter"
          name="twitter_bumdes"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="d. Lainnya"
          name="sosial_media_lainnya"
          type="text"
          labelClassName="ml-10 text-start"
        />
        <InputField
          label="Penyertaan Modal Awal "
          name="penyertaan_modal_awal"
          type="text"
        />
        <InputField
          label="Penambahan Penyertaan Modal "
          name="penambahan_penyertaan_modal"
          type="text"
        />
      </div>
    </div>
  );
}
