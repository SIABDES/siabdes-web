import React, { useState } from 'react';
import InputField from '@/components/Input/input-field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusIcon, TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GetUnitProfileResponse } from '@/types/units/profile/response';
import useGetUnitProfile from '@/hooks/units/profile/useGetUnitProfile';

export default function IdentityPosition() {
  const { data } = useGetUnitProfile();
  const unit = data;

  console.log('data', data);
  console.log('unit', unit);

  const [members, setMembers] = useState<string[]>([]);
  const [collabs, setCollabs] = useState<string[]>([]);
  const [formValues, setFormValues] = useState({
    bidang_usaha: data?.business_type,
    nama_usaha: unit?.name,
    alamat_usaha: unit?.address,
    nomor_telepon: unit?.phone,
    kerjasama_pihak_ketiga: unit?.third_party_partners,
    deskripsi_kegiatan_usaha: unit?.description,
    kepala_unit_usaha: unit?.organization.leader,
    // anggota: [],
    anggota: unit?.organization.members,
    tahun_berdiri: unit?.founded_at,
  });
  const [formSaved, setFormSaved] = useState(false);

  const addMember = () => {
    setMembers([...members, '']);
  };

  const handleMemberChange = (index: number, value: string) => {
    const updatedMembers = [...members];
    updatedMembers[index] = value;
    setMembers(updatedMembers);
  };

  const handleRemoveMember = (index: number) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  const addCollab = () => {
    setCollabs([...collabs, '']);
  };
  const handleCollabChange = (index: number, value: string) => {
    const updatedCollabs = [...collabs];
    updatedCollabs[index] = value;
    setCollabs(updatedCollabs);
  };
  const handleRemoveCollab = (index: number) => {
    const updatedCollabs = [...collabs];
    updatedCollabs.splice(index, 1);
    setCollabs(updatedCollabs);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Perform save logic here (e.g., send data to backend, update database)
    setFormSaved(true);
    // You may want to perform additional actions here based on your application's requirements.
  };

  return (
    <section>
      <header>
        <h1 className="p-2 text-lg font-bold text-black">
          Identitas dan Kedudukan unit
        </h1>
      </header>
      <section className="space-y-2 mb-10">
        <InputField
          label="Bidang Usaha"
          placeholder="Masukkan bidang usaha"
          name="bidang_usaha"
          type="text"
          value={formValues.bidang_usaha}
          onChange={(e) => handleInputChange('bidang_usaha', e.target.value)}
          disabled={true}
        />
        <InputField
          label="Nama Usaha"
          placeholder="Masukkan nama usaha"
          name="nama_usaha"
          type="text"
          value={formValues.nama_usaha}
          onChange={(e) => handleInputChange('nama_usaha', e.target.value)}
        />
        <InputField
          label="Alamat Usaha"
          placeholder="Masukkan alamat usaha"
          name="alamat_usaha"
          type="text"
          value={formValues.alamat_usaha}
          onChange={(e) => handleInputChange('alamat_usaha', e.target.value)}
        />
        <InputField
          label="Nomor Telepon"
          placeholder="Masukkan nomor telepon"
          name="nomor_telepon"
          type="number"
          value={formValues.nomor_telepon}
          onChange={(e) => handleInputChange('nomor_telepon', e.target.value)}
        />
        <div className="flex">
          <label
            htmlFor="Susunan Pengurus"
            className="p-2 block text-sm font-medium text-black w-full"
          >
            Kerjasama Denga Pihak Ketiga
          </label>
        </div>
        {collabs.map((collab, index) => (
          <div key={index} className="flex">
            <Label
              htmlFor="Kerjasama"
              className="p-2 block text-sm font-medium text-black w-full pl-10 pr-14"
            >
              • Kerjasama {index + 1}
            </Label>

            <h1 className="p-2 text-sm font-medium text-black">:</h1>
            <Input
              type="text"
              placeholder={`Masukkan Nama Pihak Ketiga`}
              name={`collab_${index + 1}`}
              value={collab}
              onChange={(e) => handleCollabChange(index, e.target.value)}
              disabled={formSaved}
            />
            <TrashIcon
              className="ml-4 w-16 h-9 text-red-500 cursor-pointer"
              onClick={() => handleRemoveCollab(index)}
            />
          </div>
        ))}

        <Button
          type="button"
          className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md ml-10"
          onClick={addCollab}
        >
          Tambah Kerjasama
        </Button>
        <div className="flex">
          <Label className="p-2 block text-sm font-medium text-black w-full">
            Deskripsi Kegiatan Usaha
          </Label>
          <h1 className="p-2 text-sm font-medium text-black">:</h1>
          <Textarea
            placeholder="Masukkan deskripsi kegiatan usaha"
            name="deskripsi_kegiatan_usaha"
            className={`p-2 w-full border rounded-md ml h-28`}
            value={formValues.deskripsi_kegiatan_usaha}
            onChange={(e) =>
              handleInputChange('deskripsi_kegiatan_usaha', e.target.value)
            }
          />
        </div>
        <div className="flex">
          <label
            htmlFor="Susunan Pengurus"
            className="p-2 block text-sm font-medium text-black w-full"
          >
            Susunan Pengurus
          </label>
        </div>
        <InputField
          label="Kepala Unit usaha"
          placeholder="Masukkan Nama Kepala Unit Usaha"
          name="kepala_unit_usaha"
          type="text"
          labelClassName="pl-10 text-start"
          value={formValues.kepala_unit_usaha}
          onChange={(e) =>
            handleInputChange('kepala_unit_usaha', e.target.value)
          }
        />
        {members.map((member, index) => (
          <div key={index} className="flex">
            <Label
              htmlFor="Anggota"
              className="p-2 block text-sm font-medium text-black w-full pl-10 pr-24"
            >
              Anggota {index + 1}
            </Label>

            <h1 className="p-2 text-sm font-medium text-black">:</h1>
            <Input
              type="text"
              placeholder={`Masukkan Nama Anggota ${index + 1}`}
              name={`anggota_${index + 1}`}
              value={member}
              onChange={(e) => handleMemberChange(index, e.target.value)}
              disabled={formSaved}
            />
            <TrashIcon
              className="ml-4 w-16 h-9 text-red-500 cursor-pointer"
              onClick={() => handleRemoveMember(index)}
            />
          </div>
        ))}

        <Button
          type="button"
          className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md ml-10"
          onClick={addMember}
        >
          Tambah Anggota
        </Button>

        <InputField
          label="Tahun Berdiri"
          placeholder="Masukkan Tahun Berdiri"
          name="tahun_berdiri"
          type="number"
          value={formValues.tahun_berdiri}
          onChange={(e) => handleInputChange('tahun_berdiri', e.target.value)}
        />
        <div className="flex justify-end pt-10 mb-10">
          <Button
            onClick={handleSave}
            disabled={formSaved}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Simpan
          </Button>
        </div>
        {/*  Display saved values after saving */}
        {formSaved && (
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-black">
              Identitas dan Kedudukan unit
            </h1>
            <div className="flex">
              <Label className="p-2 block text-sm font-medium text-black w-full">
                Bidang Usaha
              </Label>
              <h1 className="p-2 text-sm font-medium text-black">:</h1>
              <p className="p-2 text-sm font-medium text-black">
                {formValues.bidang_usaha}
              </p>
            </div>
            <div className="flex">
              <Label className="p-2 block text-sm font-medium text-black w-full">
                Nama Usaha
              </Label>
              <h1 className="p-2 text-sm font-medium text-black">:</h1>
              <p className="p-2 text-sm font-medium text-black">
                {formValues.nama_usaha}
              </p>
            </div>
            <div className="flex">
              <Label className="p-2 block text-sm font-medium text-black w-full">
                Alamat Usaha
              </Label>
              <h1 className="p-2 text-sm font-medium text-black">:</h1>
              <p className="p-2 text-sm font-medium text-black">
                {formValues.alamat_usaha}
              </p>
            </div>
            <div className="flex">
              <Label className="p-2 block text-sm font-medium text-black w-full">
                Nomor Telepon
              </Label>
              <h1 className="p-2 text-sm font-medium text-black">:</h1>
              <p className="p-2 text-sm font-medium text-black">
                {formValues.nomor_telepon}
              </p>
            </div>
            <div className="flex">
              <Label className="p-2 block text-sm font-medium text-black w-full">
                Kerjasama dengan Pihak Ketiga
              </Label>
              <h1 className="p-2 text-sm font-medium text-black">:</h1>
              <p className="p-2 text-sm font-medium text-black">
                {formValues.kerjasama_pihak_ketiga}
              </p>
            </div>
            <div className="flex">
              <Label className="p-2 block text-sm font-medium text-black w-full">
                Deskripsi Kegiatan Usaha
              </Label>
              <h1 className="p-2 text-sm font-medium text-black">:</h1>
              <p className="p-2 text-sm font-medium text-black">
                {formValues.deskripsi_kegiatan_usaha}
              </p>
            </div>

            <div className="flex">
              <Label className="p-2 block text-sm font-medium text-black w-full">
                Susunan Pengurus
              </Label>
            </div>
            <div className="flex">
              <Label className="p-2 block text-sm font-medium text-black w-full">
                Kepala Unit usaha
              </Label>
              <h1 className="p-2 text-sm font-medium text-black">:</h1>
              <p className="p-2 text-sm font-medium text-black">
                {formValues.kepala_unit_usaha}
              </p>
            </div>
            {members.map((member, index) => (
              <div key={index} className="flex">
                <Label
                  htmlFor="Anggota"
                  className="p-2 block text-sm font-medium text-black w-full"
                >
                  Anggota {index + 1}
                </Label>

                <h1 className="p-2 text-sm font-medium text-black">:</h1>
                <p className="p-2 text-sm font-medium text-black">{member}</p>
              </div>
            ))}
            <div className="flex">
              <Label className="p-2 block text-sm font-medium text-black w-full">
                Tahun Berdiri
              </Label>
              <h1 className="p-2 text-sm font-medium text-black">:</h1>
              <p className="p-2 text-sm font-medium text-black">
                {formValues.tahun_berdiri}
              </p>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}