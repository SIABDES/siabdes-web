'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const AddEditJournal = ({ nama_akuns }) => {
  const [akunList, setAkunList] = useState([
    { nama_akun: '', debit: 0, kredit: 0 },
  ]);

  const addAkun = () => {
    setAkunList([...akunList, { nama_akun: '', debit: 0, kredit: 0 }]);
  };

  const removeAkun = () => {
    if (akunList.length > 1) {
      const newList = [...akunList];
      newList.pop();
      setAkunList(newList);
    }
  };

  return (
    <div className="mb-4">
      <h1 className="mb-2 font-semibold">Tambahkan Akun</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-black">
        <div>
          <label className="block text-sm font-medium text-black">
            Nama Akun
          </label>
          <Select>
            <SelectTrigger className="mt-1 p-5 w-full border rounded-md">
              <SelectValue placeholder="Cari Nama Akun." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Toleweda</SelectItem>
              <SelectItem value="dark">Darimaso</SelectItem>
              <SelectItem value="system">Kikoko</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Debit</label>
          <input
            type="number"
            className="form-control mt-1 p-2 w-full border rounded-md"
            name="debit"
            placeholder="Debit"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Kredit</label>
          <input
            type="number"
            className="form-control mt-1 p-2 w-full border rounded-md"
            name="kredit"
            placeholder="Kredit"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-black">
            Nama Akun
          </label>
          <Select>
            <SelectTrigger className="mt-1 p-5 w-full border rounded-md">
              <SelectValue placeholder="Cari Nama Akun." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Toleweda</SelectItem>
              <SelectItem value="dark">Darimaso</SelectItem>
              <SelectItem value="system">Kikoko</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Debit</label>
          <input
            type="number"
            className="form-control mt-1 p-2 w-full border rounded-md"
            name="debit"
            placeholder="Debit"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Kredit</label>
          <input
            type="number"
            className="form-control mt-1 p-2 w-full border rounded-md"
            name="kredit"
            placeholder="Kredit"
          />
        </div>
      </div>
    </div>
  );
};

export default AddEditJournal;
