'use client';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function LoginForm() {
  const [passwordVisible, setpasswordVisible] = useState(false);

  const togglepasswordVisibility = () => {
    setpasswordVisible((prev) => !prev);
  };

  return (
    <div className="inline-flex gap-[28px] rounded-xl justify-center items-center  w-[500px] h-[434px]">
      <div>
        <form className="flex flex-col">
          <h1 className="self-center text-5xl font-bold mb-14">
            Selamat Datang di <br /> SIABDes TAXian
          </h1>
          <label>
            Email atau <span className="italic">Username</span>{' '}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="emailOrUsername"
            name="emailOrUsername"
            placeholder="Masukkan Email atau Username"
            className="py-3 px-2 text-black bg-[#ffffff] border border-[#2a2a2b] rounded-lg w-[420px] text-sm"
          />

          <label className="mr-2 mt-4">Kata Sandi</label>
          <div className="relative flex items-center">
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Masukkan Kata Sandi"
              className="py-3 px-2 text-black bg-[#ffffff] border border-[#2a2a2b] rounded-lg w-[420px] text-sm"
            />
            <button
              type="button"
              className="absolute right-4 top-5 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={togglepasswordVisibility}
            >
              {passwordVisible ? (
                <EyeOpenIcon className="w-6 h-6" />
              ) : (
                <EyeClosedIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          <button className="bg-[#00BFA6] w-[420px] h-[40px] rounded-lg text-[#181819] font-semibold mt-10">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
