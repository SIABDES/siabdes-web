// 'use client';

// import { addArrayObjectToFormData } from '@/common/helpers/multipart-form';
// import Layout from '@/components/layout/layout';
// import JournalTransactionsForm from '@/components/pages/journals/journal-transactions-form';
// import NewTransactionForm from '@/components/pages/journals/new-transaction-form';
// import FormDateInput from '@/components/patan-ui/form/form-date-input';
// import FormInput from '@/components/patan-ui/form/form-input';
// import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { useToast } from '@/components/ui/use-toast';
// import { useGetAccounts } from '@/hooks/account/useGetAccounts';
// import { useAddAdjustmentJournal } from '@/hooks/journals/useAddAdjustmentJournal';
// import {
//   JournalInputItem,
//   JournalInputItemSchema,
//   JournalTransactionFormDataType,
// } from '@/types/journals';
// import { nanoid } from 'nanoid';
// import { useRouter } from 'next/navigation';
// import React, { useMemo, useState } from 'react';

// export default function AddJournal() {
//   const { toast } = useToast();
//   const router = useRouter();

//   const [transactions, setTransactions] = useState<
//     JournalTransactionFormDataType[]
//   >([
//     { unique_id: nanoid(3), account_id: undefined, debit: 0, credit: 0 },
//     { unique_id: nanoid(3), account_id: undefined, debit: 0, credit: 0 },
//   ]);
//   const [evidence, setEvidence] = useState<File | null>(null);
//   const [occurred_at, setOccurredAt] = useState<Date | undefined>(new Date());
//   const [description, setDescription] = useState<string | null>(null);

//   const { data: accounts } = useGetAccounts();

//   const isTransactionsBalance = useMemo(() => {
//     const totalDebit = transactions.reduce((acc, curr) => {
//       return acc + curr.debit;
//     }, 0);

//     const totalCredit = transactions.reduce((acc, curr) => {
//       return acc + curr.credit;
//     }, 0);

//     return totalDebit === totalCredit && (totalDebit > 0 || totalCredit > 0);
//   }, [transactions]);

//   const {
//     mutateAsync: mutateAdjustmentJournal,
//     isPending: isMutateAdjustmentJournalPending,
//   } = useAddAdjustmentJournal();

//   const handleMutation = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();

//     if (!isTransactionsBalance) {
//       return;
//     }

//     const formData = new FormData();

//     const data_transactions: JournalInputItem[] = transactions.map(
//       (transaction) =>
//         JournalInputItemSchema.parse({
//           account_id: transaction.account_id,
//           amount: transaction.debit || transaction.credit,
//           is_credit: transaction.credit > 0,
//         })
//     );

//     formData.append('description', description ?? '');
//     formData.append('occurred_at', occurred_at?.toISOString() ?? '');
//     addArrayObjectToFormData(formData, data_transactions, 'data_transactions');

//     void mutateAdjustmentJournal(formData, {
//       onSuccess: () => {
//         toast({
//           title: 'Status Tambah Jurnal Penyesuaian',
//           description: 'Jurnal penyesuaian berhasil ditambahkan',
//           duration: 5000,
//         });

//         router.push('/unit/working-trial-balance/adjustment-journal');
//       },
//       onError: (err) => {
//         toast({
//           title: 'Gagal menambahkan jurnal penyesuaian',
//           description: err.message,
//           variant: 'destructive',
//           duration: 5000,
//         });
//       },
//     });
//   };

//   return (
//     <Layout>
//       <div className="grid grid-flow-col gap-x-8">
//         <div className="col-span-6">
//           <FormInput
//             name="deskripsi"
//             type="text"
//             label="Deskripsi"
//             placeholder="contoh: Penyesuaian Bahan Baku"
//             onChange={(e) => setDescription(e.target.value)}
//             value={description ?? ''}
//           />
//         </div>

//         <div className="col-span-6">
//           <FormDateInput
//             setValue={setOccurredAt}
//             value={occurred_at}
//             placeholder="Pilih tanggal transaksi"
//             label="Tanggal Transaksi"
//           />
//         </div>
//       </div>

//       <p className="pt-8">Data Transaksi</p>
//       <ScrollArea className="h-1/2 w-full">
//         {transactions.map((transaction, index) => (
//           <JournalTransactionsForm
//             key={transaction.unique_id}
//             index={index + 1}
//             transaction={transaction}
//             accounts={accounts ?? []}
//             setTransactions={setTransactions}
//             isAbleToDelete={transactions.length > 2}
//           />
//         ))}

//         <NewTransactionForm
//           transactions={transactions}
//           setTransactions={setTransactions}
//         />
//       </ScrollArea>

//       <div className="pt-8">
//         <Button
//           disabled={!isTransactionsBalance || isMutateAdjustmentJournalPending}
//           onClick={handleMutation}
//         >
//           {isMutateAdjustmentJournalPending ? (
//             <span>Menambahkan...</span>
//           ) : (
//             <span>Tambah Jurnal</span>
//           )}
//         </Button>
//       </div>
//     </Layout>
//   );
// }

"use client";

import { addArrayObjectToFormData } from "@/common/helpers/multipart-form";
import Layout from "@/components/layout/layout";
import AdjustmentJournalEssentialsForm from "@/components/pages/journals/form/adjustment-journal-essentials-form";
import GeneralJournalEssentialsForm from "@/components/pages/journals/form/general-journal-essentials-form";
import JournalTransactionsContainerForm from "@/components/pages/journals/form/journal-transactions-container-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useGetAccounts } from "@/hooks/account/useGetAccounts";
import { useAddAdjustmentJournal } from "@/hooks/journals/useAddAdjustmentJournal";
import { useAddGeneralJournal } from "@/hooks/journals/useAddGeneralJournal";
import {
  MutationJournalRequest,
  AddJournalRequestSchema,
  JournalInputItemOld,
} from "@/types/journals";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function AddJournal() {
  const { toast } = useToast();
  const form = useForm<MutationJournalRequest>({
    resolver: zodResolver(AddJournalRequestSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      description: "",
      occurred_at: undefined,
      data_transactions: [
        {
          account_id: -1,
          credit: 0,
          debit: 0,
        },
        {
          account_id: -1,
          credit: 0,
          debit: 0,
        },
      ],
    },
  });
  const { formState } = form;

  const { data: accounts } = useGetAccounts();
  const { mutateAsync: mutateJournal, isPending: isMutateJournalPending } =
    useAddAdjustmentJournal();

  const { data_transactions: data_transactions_errors } = formState.errors;

  useEffect(() => {
    if (data_transactions_errors?.root) {
      toast({
        title: "Kesalahan Input!",
        description: data_transactions_errors.root.message,
        variant: "destructive",
        duration: 3000,
      });
    }
  }, [data_transactions_errors?.root, toast]);

  const onSubmit = async (data: MutationJournalRequest) => {
    const formData = new FormData();

    formData.append("description", data.description);
    formData.append("occurred_at", data.occurred_at?.toISOString() ?? "");

    const dataTransactionsTransformed: JournalInputItemOld[] =
      data.data_transactions.map((transaction) => ({
        account_id: transaction.account_id,
        amount: transaction.debit || transaction.credit,
        is_credit: transaction.credit > 0,
      }));

    addArrayObjectToFormData(
      formData,
      dataTransactionsTransformed,
      "data_transactions"
    );

    await mutateJournal(formData);
  };

  return (
    <Layout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Button variant={"outline"} asChild>
            <Link href="/unit/working-trial-balance/adjustment-journal">
              Kembali
            </Link>
          </Button>

          <h5 className="text-base font-semibold pb-8 mt-4">
            Tambah Jurnal Penyesuaian
          </h5>

          <AdjustmentJournalEssentialsForm form={form} />

          <JournalTransactionsContainerForm
            form={form}
            accounts={accounts ?? []}
          />

          <div className="pt-8">
            <Button type="submit" disabled={isMutateJournalPending}>
              {isMutateJournalPending ? (
                <span>Menambahkan...</span>
              ) : (
                <span>Tambah Jurnal</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </Layout>
  );
}
