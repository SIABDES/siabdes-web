"use client";

import { formatDateToString } from "@/common/helpers/date";
import Layout from "@/components/layout/layout";
import { PatanTable } from "@/components/patan-ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import useDeleteJournal from "@/hooks/journals/useDeleteJournal";
import { useGetJournalDetails } from "@/hooks/journals/useGetJournalDetails";
import { EditIcon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Details({
  params,
}: {
  params: { journal_id: string };
}) {
  const {
    data: details,
    isFetching,
    isLoading,
    isFetched,
  } = useGetJournalDetails({ params });

  const router = useRouter();
  const { toast } = useToast();

  const {
    mutateAsync: mutateDeleteJournal,
    isSuccess: isMutateDeleteSuccess,
    isPending: isMutateDeletePending,
  } = useDeleteJournal({
    journal_id: params.journal_id,
  });

  const handleDeleteJournal = (e: React.MouseEvent<HTMLButtonElement>) => {
    void mutateDeleteJournal(undefined, {
      onSuccess: () => {
        toast({
          title: "Hapus Jurnal",
          description: "Jurnal berhasil dihapus",
          duration: 5000,
        });
        router.push("/working-trial-balance/adjustment-journal");
      },
      onError: () => {
        toast({
          title: "Gagal menghapus jurnal",
          description: "Terjadi kesalahan saat menghapus jurnal",
          variant: "destructive",
          duration: 5000,
        });
      },
    });
  };

  return (
    <Layout>
      <h5 className="text-lg font-semibold">Jurnal Penyesuaian</h5>

      {isFetched && details && (
        <div className="inline-flex justify-between items-center w-full pb-8 pt-4">
          <table>
            <tbody>
              <tr>
                <td className="text-sm font-medium min-w-[12rem]">
                  Deskripsi:{" "}
                </td>
                <td className="text-sm">{details.description}</td>
              </tr>

              <tr>
                <td className="text-sm font-medium">Tanggal Transaksi: </td>
                <td className="text-sm">
                  {formatDateToString(details.occured_at)}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="inline-flex gap-x-4 justify-end">
            <Button variant={"outline"}>
              <EditIcon size={16} className="mr-2" />
              Edit Jurnal
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant={"destructive"}
                  disabled={isMutateDeletePending}
                >
                  <TrashIcon size={16} className="mr-2" />
                  {isMutateDeletePending ? "Menghapus..." : "Hapus Jurnal"}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Yakin ingin hapus jurnal?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Data yang telah dihapus tidak akan bisa dikembalikan.
                    Pastikan data yang akan dihapus sudah benar.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction
                    asChild
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    <Button
                      variant={"destructive"}
                      className="w-fit"
                      onClick={handleDeleteJournal}
                    >
                      Hapus Jurnal
                    </Button>
                  </AlertDialogAction>
                  <AlertDialogCancel>Batalkan</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      )}

      <PatanTable data={details?.data_transactions ?? [{}]} />
    </Layout>
  );
}
