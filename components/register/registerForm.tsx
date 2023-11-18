'use client';
import React, { useState } from 'react';
import CustomInput from '../../components/register/customeInput';
import { ComboboxDemo } from '../ui/combobox';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };

  const [formData, setFormData] = useState({
    namaBumdes: '',
    email: '',
    provinsi: '',
    kabupaten: '',
    kecamatan: '',
    desa: '',
    kodePos: '',
    nomorTelepon: '',
    alamatLengkap: '',
    kataSandi: '',
    konfirmasiKataSandi: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="bg-slate-100 rounded-md w-[700px] h-[560px] p-8 fixed">
        <h2 className="text-2xl font-semibold text-center">Daftar BUMDes</h2>
        <form className="flex flex-col space-y-2">
          <div className="flex space-x-8">
            <CustomInput
              label="Nama BUMDes"
              type="text"
              id="namaBumdes"
              name="namaBumdes"
              placeholder="Masukkan Nama BUMDes"
              value={formData.namaBumdes}
              onChange={handleChange}
            />
            <CustomInput
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <h2 className="text-xl font-semibold text-start pt-2">
            Alamat BUMDes
          </h2>
          <div className="flex space-x-8">
            <CustomInput
              label="Provinsi"
              type="text"
              id="provinsi"
              name="provinsi"
              placeholder="Masukkan Provinsi"
              value={formData.provinsi}
              onChange={handleChange}
            />
            <CustomInput
              label="Kabupaten"
              type="text"
              id="kabupaten"
              name="kabupaten"
              placeholder="Masukkan Kabupaten"
              value={formData.kabupaten}
              onChange={handleChange}
            />
          </div>
          <div className="flex space-x-8">
            <CustomInput
              label="Kecamatan"
              type="text"
              id="kecamatan"
              name="kecamatan"
              placeholder="Masukkan Kecamatan"
              value={formData.kecamatan}
              onChange={handleChange}
            />
            <CustomInput
              label="Desa"
              type="text"
              id="desa"
              name="desa"
              placeholder="Masukkan Desa"
              value={formData.desa}
              onChange={handleChange}
            />
          </div>
          <div className="flex space-x-8">
            <CustomInput
              label="Kode Pos"
              type="text"
              id="kodePos"
              name="kodePos"
              placeholder="Masukkan Kode Pos"
              value={formData.kodePos}
              onChange={handleChange}
            />
            <CustomInput
              label="Nomor Telepon"
              type="number"
              id="nomorTelepon"
              name="nomorTelepon"
              placeholder="Masukkan Nomor Telepon"
              value={formData.nomorTelepon}
              onChange={handleChange}
            />
          </div>
          <CustomInput
            label="Alamat Lengkap"
            type="text"
            id="alamatLengkap"
            name="alamatLengkap"
            placeholder="Masukkan Alamat Lengkap"
            value={formData.alamatLengkap}
            onChange={handleChange}
          />
          <div className="flex space-x-8">
            <div className="w-1/2">
              <div className="relative flex items-center">
                <CustomInput
                  label="Kata Sandi"
                  type={passwordVisible ? 'text' : 'password'}
                  id="kataSandi"
                  name="kataSandi"
                  placeholder="Masukkan Kata Sandi"
                  value={formData.kataSandi}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-4 top-9 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <EyeOpenIcon className="w-6 h-6" />
                  ) : (
                    <EyeClosedIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            <div className="w-1/2">
              <div className="relative flex items-center">
                <CustomInput
                  label="Konfirmasi Kata Sandi"
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  id="konfirmasiKataSandi"
                  name="konfirmasiKataSandi"
                  placeholder="Masukkan Ulang Kata Sandi"
                  value={formData.konfirmasiKataSandi}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-4 top-9 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? (
                    <EyeOpenIcon className="w-6 h-6" />
                  ) : (
                    <EyeClosedIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              size="default"
              variant="outline"
              className="items-center mt-4 px-12 bg-[#00BFA6] "
            >
              Daftar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
