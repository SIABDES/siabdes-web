'use client';

import Layout from '@/components/layout/layout';
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
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import useDeletePPN from '@/hooks/ppn/useDeletePPN';
import { EditIcon, TrashIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Details({ params }: { params: { tax_id: string } }) {
  const router = useRouter();
  const { toast } = useToast();

  const {
    mutateAsync: mutateDeletePPh21,
    isPending: isMutateDeletePending,
    isSuccess: isMutateDeleteSuccess,
  } = useDeletePPN({ ppn_id: params.tax_id }); // ganti pph 21

  const handleDeletePPN = (e: React.MouseEvent<HTMLButtonElement>) => {
    void mutateDeletePPh21(undefined, {
      onSuccess: () => {
        toast({
          title: 'Hapus PPh 21',
          description: 'Data PPN berhasil dihapus',
          duration: 5000,
        });
        router.push('/unit/tax/pph21');
      },
      onError: (error) => {
        toast({
          title: 'gagal Menghapus PPh 21',
          description: error.message,
          duration: 5000,
        });
      },
    });
  };

  return (
    <Layout>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold flex items-center">
          Detail PPh 21
        </h1>
        <div className="inline-flex gap-x-4 justify-end">
          <Button variant={'outline'}>
            <Link
              href={`/unit/tax/ppn/${params.tax_id}/edit`} // ganti pph 21
              className="flex items-center"
            >
              <EditIcon size={16} className="mr-2" />
              Edit PPN
            </Link>
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={'destructive'} disabled={isMutateDeletePending}>
                <TrashIcon size={16} className="mr-2" />
                {isMutateDeletePending ? 'Menghapus...' : 'Hapus Data PPh 21'}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Yakin ingin hapus Data PPh 21?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Data yang telah dihapus tidak akan bisa dikembalikan. Pastikan
                  data yang akan dihapus sudah benar.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  asChild
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  <Button
                    variant={'destructive'}
                    className="w-fit"
                    onClick={handleDeletePPN}
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
      {/* <section className="flex flex-row justify-end">
        <div>
          <Button variant="outline" asChild>
            <Link href={"/unit/tax/pph21"}>Kembali</Link>
          </Button>
        </div>
      </section> */}
    </Layout>
  );
}
