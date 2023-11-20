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

  // const handleInputChange = (index, field, value) => {
  //   const newList = [...akunList];
  //   newList[index][field] = value;
  //   setAkunList(newList);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let messages: string[] = [];
  //   let valid = true;
  //   let totalDebit = 0;
  //   let totalKredit = 0;
  //   let namaAkunValues: string[] = [];

  //   akunList.forEach((akun, index) => {
  //     const namaAkunValue = akun.nama_akun;
  //     const debitValue = parseFloat(akun.debit);
  //     const kreditValue = parseFloat(akun.kredit);

  //     if (namaAkunValues.includes(namaAkunValue)) {
  //       messages.push('Nama Akun tidak boleh sama');
  //       valid = false;
  //       return;
  //     }

  //     namaAkunValues.push(namaAkunValue);

  //     if (debitValue === 0 && kreditValue === 0) {
  //       messages.push('Masukkan nilai Debit Atau Kredit untuk setiap akun');
  //       valid = false;
  //       return;
  //     }

  //     if (debitValue !== 0 && kreditValue !== 0) {
  //       messages.push(
  //         'Harap mengisikan hanya satu di antara debit atau kredit untuk setiap akun'
  //       );
  //       valid = false;
  //       return;
  //     }

  //     if (debitValue < 0 || kreditValue < 0) {
  //       messages.push('Nilai Debit atau Kredit tidak boleh negatif');
  //       valid = false;
  //       return;
  //     }

  //     totalDebit += debitValue;
  //     totalKredit += kreditValue;
  //   });

  //   if (!valid) {
  //     // Jika terdapat kesalahan, tampilkan pesan kesalahan
  //     console.error(messages);
  //     return;
  //   }

  //   if (totalDebit !== totalKredit) {
  //     // Jika total debit tidak sama dengan total kredit, tampilkan pesan kesalahan
  //     console.error('Total Debit harus sama dengan Total Kredit');
  //     return;
  //   }

  //   // Lakukan aksi selanjutnya (misalnya, kirim data ke server)
  //   console.log('Form submitted successfully!');
  // };

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
      {/* <div className="my-10 space-x-8">
        <Button type="button" onClick={addAkun} className="btn btn-success">
          Tambah
        </Button>
        <Button type="button" onClick={removeAkun} className="btn btn-danger">
          Hapus
        </Button>
        <Button type="submit" className="btn btn-primary">
          Kirim
        </Button>
      </div> */}
    </div>
    // <div className="content-wrapper">
    //   <section className="content">
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-12">
    //           <div className="card flex">
    //             <div className="mx-5 mt-3">
    //               <form onSubmit={handleSubmit}>
    //                 {/* Render akunList */}
    //                 {akunList.map((akun, index) => (
    //                   <div key={index} className="akun mb-4">
    //                     {/* Your input fields go here */}
    //                     <div className="row">
    //                       <div className="col">
    //                         <p>Nama Akun</p>
    //                         <select
    //                           name="nama_akun[]"
    //                           className="form-control"
    //                           value={akun.nama_akun}
    //                           onChange={(e) =>
    //                             handleInputChange(
    //                               index,
    //                               'nama_akun',
    //                               e.target.value
    //                             )
    //                           }
    //                         >
    //                           {nama_akuns.map((nama_akun, i) => (
    //                             <option key={i} value={nama_akun.nama}>
    //                               {nama_akun.nama}
    //                             </option>
    //                           ))}
    //                         </select>
    //                       </div>
    //                       <div className="col">
    //                         <p>Debit</p>
    //                         <input
    //                           type="number"
    //                           className="form-control"
    //                           name="debit[]"
    //                           placeholder="Debit"
    //                           value={akun.debit}
    //                           onChange={(e) =>
    //                             handleInputChange(
    //                               index,
    //                               'debit',
    //                               e.target.value
    //                             )
    //                           }
    //                         />
    //                       </div>
    //                       <div className="col">
    //                         <p>Kredit</p>
    //                         <input
    //                           type="number"
    //                           className="form-control"
    //                           name="kredit[]"
    //                           placeholder="Kredit"
    //                           value={akun.kredit}
    //                           onChange={(e) =>
    //                             handleInputChange(
    //                               index,
    //                               'kredit',
    //                               e.target.value
    //                             )
    //                           }
    //                         />
    //                       </div>
    //                     </div>
    //                   </div>
    //                 ))}

    //                 <div className="my-4 space-x-8">
    //                   <Button
    //                     type="button"
    //                     onClick={addAkun}
    //                     className="btn btn-success"
    //                   >
    //                     Tambah
    //                   </Button>
    //                   <Button
    //                     type="button"
    //                     onClick={removeAkun}
    //                     className="btn btn-danger"
    //                   >
    //                     Hapus
    //                   </Button>
    //                   <Button type="submit" className="btn btn-primary">
    //                     Kirim
    //                   </Button>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default AddEditJournal;
