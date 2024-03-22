// "use client";

// import { addArrayObjectToFormData } from "@/common/helpers/multipart-form";
// import Layout from "@/components/layout/layout";
// import AdjustmentJournalEssentialsForm from "@/components/pages/journals/form/adjustment-journal-essentials-form";
// import JournalTransactionsContainerForm from "@/components/pages/journals/form/journal-transactions-container-form";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useToast } from "@/components/ui/use-toast";
// import { useGetAccounts } from "@/hooks/account/useGetAccounts";
// import { useEditJournal } from "@/hooks/journals/useEditJournal";
// import { useGetJournalDetails } from "@/hooks/journals/useGetJournalDetails";
// import {
//   JournalInputItem,
//   JournalInputItemSchema,
//   JournalTransactionFormDataType,
// } from "@/types/journals";
// import { ChevronLeftIcon } from "@radix-ui/react-icons";
// import { nanoid } from "nanoid";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useCallback, useEffect, useMemo, useState } from "react";

// export default function EditAdjustmentJournalPage({
//   params,
// }: {
//   params: { journal_id: string };
// }) {
//   const { toast } = useToast();
//   const router = useRouter();

//   const {
//     data: details,
//     isLoading: isDetailsLoading,
//     refetch: refetchDetails,
//   } = useGetJournalDetails({
//     params,
//   });

//   const [transactions, setTransactions] = useState<
//     JournalTransactionFormDataType[]
//   >([]);
//   const [evidence, setEvidence] = useState<File | null>(null);
//   const [occurred_at, setOccurredAt] = useState<Date | undefined>(new Date());
//   const [description, setDescription] = useState<string | null>(null);

//   const { data: accounts } = useGetAccounts();

//   const initializeTransactions = useCallback(() => {
//     if (!details?.data_transactions) return;

//     const transactions: JournalTransactionFormDataType[] =
//       details.data_transactions.map((transaction) => {
//         return {
//           unique_id: nanoid(),
//           account_id: transaction.account_id,
//           debit: transaction.is_credit ? 0 : transaction.amount,
//           credit: transaction.is_credit ? transaction.amount : 0,
//         };
//       });

//     setTransactions(transactions);
//     setOccurredAt(new Date(details.occured_at));
//     setDescription(details.description);
//   }, [details?.data_transactions, details?.description, details?.occured_at]);

//   useEffect(() => {
//     if (details?.data_transactions && !isDetailsLoading) {
//       initializeTransactions();
//     }
//   }, [details?.data_transactions, initializeTransactions, isDetailsLoading]);

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
//     mutateAsync: mutateEditJournal,
//     isPending: isMutateEditJournalPending,
//   } = useEditJournal({ journal_id: params.journal_id });

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

//     formData.append("description", description ?? "");
//     formData.append("occurred_at", occurred_at?.toISOString() ?? "");
//     if (evidence) {
//       formData.append("evidence", evidence);
//     }
//     addArrayObjectToFormData(formData, data_transactions, "data_transactions");

//     void mutateEditJournal(formData, {
//       onSuccess: () => {
//         toast({
//           title: "Status Edit Jurnal Penyesuaian",
//           description: "Jurnal penyesuaian berhasil ditambahkan",
//           duration: 5000,
//         });

//         router.push(
//           `/unit/working-trial-balance/adjustment-journal/${params.journal_id}/details`
//         );
//       },
//       onError: (err) => {
//         toast({
//           title: "Gagal mengedit data jurnal penyesuaian",
//           description: err.message,
//           variant: "destructive",
//           duration: 5000,
//         });
//       },
//     });
//   };

//   return (
//     <Layout>
//       <Link
//         href={`/unit/working-trial-balance/adjustment-journal/${params.journal_id}/details`}
//         className="w-fit"
//       >
//         <Button variant={"ghost"}>
//           <ChevronLeftIcon className="w-4 h-4 mr-2" />
//           Kembali
//         </Button>
//       </Link>

//       <h5 className="font-semibold mt-4">Edit Adjustment Journal Page</h5>

//       <AdjustmentJournalEssentialsForm
//         description={description}
//         setDescription={setDescription}
//         occurred_at={occurred_at}
//         setOccurredAt={setOccurredAt}
//       />

//       {isDetailsLoading ? (
//         <Skeleton className="w-full h-72 pt-8" />
//       ) : (
//         <JournalTransactionsContainerForm
//           accounts={accounts ?? []}
//           setTransactions={setTransactions}
//           transactions={transactions}
//         />
//       )}

//       <div className="pt-8 inline-flex flex-row gap-x-6">
//         <Button
//           disabled={!isTransactionsBalance || isMutateEditJournalPending}
//           onClick={handleMutation}
//         >
//           {isMutateEditJournalPending ? (
//             <span>Memperbarui Jurnal...</span>
//           ) : (
//             <span>Simpan Perubahan</span>
//           )}
//         </Button>

//         <Button
//           variant={"outline"}
//           onClick={() => {
//             initializeTransactions();
//           }}
//         >
//           Kembalikan Semula
//         </Button>
//       </div>
//     </Layout>
//   );
// }
'use client';

import { addArrayObjectToFormData } from '@/common/helpers/multipart-form';
import Layout from '@/components/layout/layout';
import AdjustmentJournalEssentialsForm from '@/components/pages/journals/form/adjustment-journal-essentials-form';
import JournalTransactionsContainerForm from '@/components/pages/journals/form/journal-transactions-container-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';
import { useGetAccounts } from '@/hooks/account/useGetAccounts';
import { useEditJournal } from '@/hooks/journals/useEditJournal';
import { useGetJournalDetails } from '@/hooks/journals/useGetJournalDetails';
import {
  AddJournalRequestSchema,
  JournalCategory,
  JournalInputItem,
  JournalInputItemOld,
  MutationJournalRequest,
} from '@/types/journals';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface EditAdjustmentJournalProps {
  params: { journal_id: string };
}

export default function EditAdjustmentJournal({
  params,
}: EditAdjustmentJournalProps) {
  const {
    data: details,
    isLoading: isDetailsLoading,
    refetch: refetchDetails,
  } = useGetJournalDetails({
    params,
  });

  const { toast } = useToast();
  const form = useForm<MutationJournalRequest>({
    resolver: zodResolver(AddJournalRequestSchema),
    reValidateMode: 'onSubmit',
    defaultValues: {
      description: '',
      occurred_at: undefined,
      data_transactions: [],
    },
  });
  const { formState, setValue } = form;

  const { data: accounts } = useGetAccounts();
  const {
    mutateAsync: mutateGeneralJournal,
    isPending: isMutateGeneralJournalPending,
  } = useEditJournal({
    journal_id: params.journal_id,
    category: JournalCategory.ADJUSTMENT,
  });

  const { data_transactions: data_transactions_errors } = formState.errors;

  useEffect(() => {
    if (details) {
      const dataTransactions: JournalInputItem[] =
        details.data_transactions.map((transaction) => ({
          account_id: transaction.account_id,
          debit: transaction.is_credit ? 0 : transaction.amount,
          credit: transaction.is_credit ? transaction.amount : 0,
        }));

      setValue('description', details.description);
      setValue('occurred_at', new Date(details.occurred_at));
      setValue('data_transactions', dataTransactions);
    }
  }, [details, setValue]);

  useEffect(() => {
    if (data_transactions_errors?.root) {
      toast({
        title: 'Kesalahan Input!',
        description: data_transactions_errors.root.message,
        variant: 'destructive',
        duration: 3000,
      });
    }
  }, [data_transactions_errors?.root, toast]);

  const onSubmit = async (data: MutationJournalRequest) => {
    const formData = new FormData();

    formData.append('description', data.description);
    formData.append('occurred_at', data.occurred_at?.toISOString() ?? '');

    const dataTransactionsTransformed: JournalInputItemOld[] =
      data.data_transactions.map((transaction) => ({
        account_id: transaction.account_id,
        amount: transaction.debit || transaction.credit,
        is_credit: transaction.credit > 0,
      }));

    addArrayObjectToFormData(
      formData,
      dataTransactionsTransformed,
      'data_transactions'
    );

    await mutateGeneralJournal(formData);
  };

  return (
    <Layout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Button variant={'outline'} asChild>
            <Link
              href={
                '/unit/working-trial-balance/adjustment-journal/{journal_id}/details'
              }
              as={`/unit/working-trial-balance/adjustment-journal/${params.journal_id}/details`}
            >
              Kembali
            </Link>
          </Button>

          <h5 className="text-base font-semibold pb-8 mt-4">
            Edit Jurnal Penyesuaian
          </h5>

          {isDetailsLoading && (
            <>
              <Skeleton className="w-full h-72 pt-8" />
            </>
          )}

          {!isDetailsLoading && !details && (
            <div>
              <h6>Terjadi Kesalahan</h6>
              <p>Terjadi kesalahan saat mengambil data jurnal penyesuaian</p>
            </div>
          )}

          {!isDetailsLoading && details && (
            <>
              <AdjustmentJournalEssentialsForm form={form} />

              <JournalTransactionsContainerForm
                form={form}
                accounts={accounts ?? []}
              />

              <div className="pt-8">
                <Button type="submit" disabled={isMutateGeneralJournalPending}>
                  {isMutateGeneralJournalPending ? (
                    <span>Menambahkan...</span>
                  ) : (
                    <span>Simpan Perubahan Jurnal</span>
                  )}
                </Button>
              </div>
            </>
          )}
        </form>
      </Form>
    </Layout>
  );
}
