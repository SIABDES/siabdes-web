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
          // value={bumdes?.name}
          value="Bumdes Balamoa"
        />
        <InputField
          label="Tanggal Pendirian BUMDes"
          name="tanggal_pendirian_bumdes"
          type="text"
          // value={bumdes?.founded_at}
          value="17 April 2021"
        />
        <InputField
          label="Nomor Peraturan Desa"
          name="nomor_peraturan_desa"
          type="text"
          value="09863890378980"
        />
        <InputField
          label="Nomor SK Pengurus BUMDes"
          name="nomor_sk_pengurus_bumdes"
          type="number"
          value="09827973903467"
        />
        <InputField
          label="Tanggal SK Pengurus BUMDes "
          name="tanggal_sk_pengurus_bumdes"
          // type="date"
          value="12 Mei 2021"
        />
        <InputField
          label="Nomor SK AD/ART BUMDes"
          name="nomor_sk_ad_art_bumdes"
          type="string"
          // value={bumdes?.sk_administrator_date}
          value="87820978263789"
        />
        <InputField
          label="Tanggal SK AD/ART BUMDes"
          name="tanggal_sk_ad_art_bumdes"
          // type="date"
          value="6 juni 2021"
        />
        <InputField
          label="Nama Bank Buku Rek. BUMDes"
          name="nama_bank_buku_rek_bumdes"
          type="text"
          value="Bank BRI"
        />
        <InputField
          label="Nomor Rekening BUMDes"
          name="nomor_rekening_bumdes"
          type="number"
          value="0982739872398"
        />
        <InputField
          label="NPWP BUMDes"
          name="npwp_bumdes"
          type="text"
          value="232.498.1-678.989"
        />
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
          type="text"
          value="021-1234567"
        />
        <InputField
          label="Email BUMDes"
          name="email_bumdes"
          type="email"
          value={'bumdesbalamoa@gmail.com'}
        />
        <InputField
          label="Website BUMDes"
          name="website_bumdes"
          type="text"
          value={'bumdesbalamoa.com'}
        />
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
          value={'Bumdes Balamoa'}
        />
        <InputField
          label="b. Instagram"
          name="instagram_bumdes"
          type="text"
          labelClassName="ml-10 text-start"
          value={'@bumdesbalamoa'}
        />
        <InputField
          label="c. Twitter"
          name="twitter_bumdes"
          type="text"
          labelClassName="ml-10 text-start"
          value={'@bumdesbalamoa'}
        />
        <InputField
          label="d. Lainnya"
          name="sosial_media_lainnya"
          type="text"
          labelClassName="ml-10 text-start"
          value={'-'}
        />
        <InputField
          label="Penyertaan Modal Awal "
          name="penyertaan_modal_awal"
          type="text"
          value={'Rp. 10.000.000'}
        />
        <InputField
          label="Penambahan Penyertaan Modal "
          name="penambahan_penyertaan_modal"
          type="text"
          value={'Rp. 5.000.000'}
        />
      </div>
    </div>
  );
}
