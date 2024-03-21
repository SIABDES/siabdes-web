import React from 'react';
import InputField from '@/components/Input/input-field';
import { BumdesAdministratorFormData } from '@/types/financial-statement/calk/bumdes-administrator';

interface PreviewBumdesAdministratorProps {
  onUpdateFormData: (data: BumdesAdministratorFormData) => void;
}
const BumdesAdministrator: React.FC<PreviewBumdesAdministratorProps> = ({
  onUpdateFormData,
}) => {
  const [formData, setFormData] = React.useState<BumdesAdministratorFormData>({
    nama_penasihat: '',
    nama_ketua_operasional: '',
    nama_sekretaris_operasional: '',
    nama_bendahara_operasional: '',
    nama_unit_operasional: '',
    nama_kepala_unit_operasional: '',
    nama_anggota_operasional: '',
    nama_kepala_anggota_operasional: '',
    nama_ketua_pengurus: '',
    nama_sekretaris_pengurus: '',
    nama_bendahara_pengurus: '',
    nama_unit_pengurus: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName?: keyof BumdesAdministratorFormData
  ) => {
    if (!fieldName) {
      fieldName = e.target.name as keyof BumdesAdministratorFormData;
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
      <h1 className="p-2 font-bold text-lg mt-4">
        Sususan Pengurus dan BUMDes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <InputField
          label="Penasihat"
          placeholder="Masukkan Nama Penasihat"
          name="nama_penasihat"
          type="text"
          value={formData.nama_penasihat}
          onChange={(e) => handleChange(e)}
        />
        <div className="flex">
          <label
            htmlFor="Website BUMDes"
            className="p-2 block text-sm font-medium text-black w-full"
          >
            Pengurus Operasional
          </label>
        </div>
        <InputField
          label="a. Ketua"
          placeholder="Masukkan Nama Ketua"
          name="nama_ketua_operasional"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.nama_ketua_operasional}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="b. Sekretaris"
          placeholder="Masukkan Nama Sekretaris"
          name="nama_sekretaris_operasional"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.nama_sekretaris_operasional}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="c. Bendahara"
          placeholder="Masukkan Nama Bendahara"
          name="nama_bendahara_operasional"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.nama_bendahara_operasional}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="d. Nama Unit"
          placeholder="Masukkan Nama Unit"
          name="nama_unit_operasional"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.nama_unit_operasional}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="৹ Kepala Unit"
          placeholder="Masukkan Nama Kepala Unit"
          name="nama_kepala_unit_operasional"
          type="text"
          labelClassName="ml-20 text-start"
          value={formData.nama_kepala_unit_operasional}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="• Anggota"
          placeholder="Masukkan Nama Anggota"
          name="nama_anggota_operasional"
          type="text"
          labelClassName="ml-32 text-start"
          value={formData.nama_anggota_operasional}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="• Anggota"
          placeholder="Masukkan Nama Anggota"
          name="nama_kepala_anggota_operasional"
          type="text"
          labelClassName="ml-32 text-start"
          value={formData.nama_kepala_anggota_operasional}
          onChange={(e) => handleChange(e)}
        />
        <div className="flex">
          <label
            htmlFor="Website BUMDes"
            className="p-2 block text-sm font-medium text-black w-full"
          >
            Pengurus
          </label>
        </div>
        <InputField
          label="a. Ketua"
          placeholder="Masukkan Nama Ketua"
          name="nama_ketua_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.nama_ketua_pengurus}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="b. Sekretaris"
          placeholder="Masukkan Nama Sekretaris"
          name="nama_sekretaris_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.nama_sekretaris_pengurus}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="c. Bendahara"
          placeholder="Masukkan Nama Bendahara"
          name="nama_bendahara_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.nama_bendahara_pengurus}
          onChange={(e) => handleChange(e)}
        />
        <InputField
          label="d. Nama Unit"
          placeholder="Masukkan Nama Unit"
          name="nama_unit_pengurus"
          type="text"
          labelClassName="ml-10 text-start"
          value={formData.nama_unit_pengurus}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default BumdesAdministrator;
