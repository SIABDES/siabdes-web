"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/layout";
import AddGeneralJournal from "@/components/add-edit-journal";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useGetAccounts } from "@/hooks/account/useGetAccounts";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import JournalTransactionsForm from "@/components/pages/journals/journal-transactions-form";
import NewTransactionForm from "@/components/pages/journals/new-transaction-form";
import { JournalTransactionFormDataType } from "@/types/journals";
import { useAddGeneralJournal } from "@/hooks/journals/useAddGeneralJournal";

export default function AddJournal() {
  // const namaAkunsData = ['Akun 1', 'Akun 2', 'Akun 3'];

  // const [selectedAccountId, setSelectedAccountId] = useState<number>(1);
  const getAccounts = useGetAccounts();

  const [formData, setFormData] = useState({
    jenis_transaksi: "",
    tanggal: "",
    bukti_transaksi: "",
    jumlah: "",
    nomor_akun: "",
  });

  const [transactions, setTransactions] = useState<
    JournalTransactionFormDataType[]
  >([]);

  const { mutateAsync } = useAddGeneralJournal();

  return (
    <Layout>
      <div className="grid grid-flow-col gap-x-8">
        <div className="col-span-4">
          <Label>Deskripsi</Label>
          <Input name="deskripsi" className="" />
        </div>

        <div className="col-span-4">
          <Label>Tanggal Transaksi</Label>
          <Input name="occured_at" type="date" />
        </div>

        <div className="col-span-4">
          <Label>Bukti Transaksi</Label>
          <Input name="evidence" type="file" className="cursor-pointer" />
        </div>
      </div>

      <div className="pt-8">
        <p>Data Transaksi</p>
        {transactions.map((transaction) => (
          <JournalTransactionsForm
            key={transaction.index}
            index={transaction.index}
            transactions={transactions}
            setTransactions={setTransactions}
          />
        ))}
      </div>

      <NewTransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <div className="pt-8">
        <Button>Tambah Jurnal</Button>
      </div>

      {/* <div className="container ">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Tambah Jurnal Umum
        </h1>
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-4">
              <label
                htmlFor="jenis_transaksi"
                className="block text-sm font-medium text-black"
              >
                Jenis Transaksi
              </label>
              <input
                type="text"
                placeholder="Masukkan Jenis Transaksi"
                name="jenis_transaksi"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="tanggal"
                className="block text-sm font-medium text-black"
              >
                Tanggal Transaksi
              </label>
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                name="tanggal"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bukti_transaksi"
                className="block text-sm font-medium text-black"
              >
                Upload Bukti Transaksi
              </label>
              <input
                type="file"
                placeholder="Masukkan Bukti Transaksi"
                name="Bukti_transaksi"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          </div>
        </div>
        <AddGeneralJournal />
        <form onSubmit={() => {}}>
          <div className="my-10 ml-8 space-x-8">
            <Button type="button" className="btn btn-success">
              Tambah Akun
            </Button>
            <Button type="button" className="btn btn-danger">
              Hapus Akun
            </Button>
            <Button type="submit" className="btn btn-primary">
              Selesai
            </Button>
          </div>
        </form>
      </div> */}
    </Layout>
  );
}
