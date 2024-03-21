"use client";
import React, { useState, useRef } from "react";
import CustomInput from "./custome-input";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { AxiosClientSide } from "@/common/api";

type FormInputs = {
  namaBumdes: string;
  email: string;
  provinsi: string;
  kabupaten: string;
  kecamatan: string;
  desa: string;
  kodePos: string;
  nomorTelepon: string;
  alamatLengkap: string;
  kataSandi: string;
  konfirmasiKataSandi: string;
};

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };

  const data = useRef<FormInputs>({
    namaBumdes: "",
    email: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    desa: "",
    kodePos: "",
    nomorTelepon: "",
    alamatLengkap: "",
    kataSandi: "",
    konfirmasiKataSandi: "",
  });

  const register = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({ data: data.current });
    const res = await AxiosClientSide.post("/auth/register", {
      identifier: data.current.email,
      password: data.current.kataSandi,
      bumdes: {
        name: data.current.namaBumdes,
        phone: data.current.nomorTelepon,
        address: {
          province: data.current.provinsi,
          regency: data.current.kabupaten,
          district: data.current.kecamatan,
          village: data.current.desa,
          postal_code: data.current.kodePos,
        },
      },
    });
    if (res.status !== 200) {
      alert(res.statusText);
      return;
    }

    console.log({ res });
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
              onChange={(e) => (data.current.namaBumdes = e.target.value)}
            />
            <CustomInput
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan Email"
              onChange={(e) => (data.current.email = e.target.value)}
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
              onChange={(e) => (data.current.provinsi = e.target.value)}
            />
            <CustomInput
              label="Kabupaten"
              type="text"
              id="kabupaten"
              name="kabupaten"
              placeholder="Masukkan Kabupaten"
              onChange={(e) => (data.current.kabupaten = e.target.value)}
            />
          </div>
          <div className="flex space-x-8">
            <CustomInput
              label="Kecamatan"
              type="text"
              id="kecamatan"
              name="kecamatan"
              placeholder="Masukkan Kecamatan"
              onChange={(e) => (data.current.kecamatan = e.target.value)}
            />
            <CustomInput
              label="Desa"
              type="text"
              id="desa"
              name="desa"
              placeholder="Masukkan Desa"
              onChange={(e) => (data.current.desa = e.target.value)}
            />
          </div>
          <div className="flex space-x-8">
            <CustomInput
              label="Kode Pos"
              type="text"
              id="kodePos"
              name="kodePos"
              placeholder="Masukkan Kode Pos"
              onChange={(e) => (data.current.kodePos = e.target.value)}
            />
            <CustomInput
              label="Nomor Telepon"
              type="number"
              id="nomorTelepon"
              name="nomorTelepon"
              placeholder="Masukkan Nomor Telepon"
              onChange={(e) => (data.current.nomorTelepon = e.target.value)}
            />
          </div>
          <CustomInput
            label="Alamat Lengkap"
            type="text"
            id="alamatLengkap"
            name="alamatLengkap"
            placeholder="Masukkan Alamat Lengkap"
            onChange={(e) => (data.current.alamatLengkap = e.target.value)}
          />
          <div className="flex space-x-8">
            <div className="w-1/2">
              <div className="relative flex items-center">
                <CustomInput
                  label="Kata Sandi"
                  type={passwordVisible ? "text" : "password"}
                  id="kataSandi"
                  name="kataSandi"
                  placeholder="Masukkan Kata Sandi"
                  onChange={(e) => (data.current.kataSandi = e.target.value)}
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
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="konfirmasiKataSandi"
                  name="konfirmasiKataSandi"
                  placeholder="Masukkan Ulang Kata Sandi"
                  onChange={(e) =>
                    (data.current.konfirmasiKataSandi = e.target.value)
                  }
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
              onClick={register}
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
