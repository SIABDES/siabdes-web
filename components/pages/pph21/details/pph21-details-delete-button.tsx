'use client';

import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import useDeletePph21 from '@/hooks/pph21/useDeletePph21';
import { TrashIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Pph21DetailsDeleteButtonProps {
  taxId: string;
}

export default function Pph21DetailsDeleteButton({
  taxId,
}: Pph21DetailsDeleteButtonProps) {
  const router = useRouter();

  const { mutateAsync: mutateDeletePPh21, isPending: isMutateDeletePending } =
    useDeletePph21();

  const handleDeletePPN = (e: React.MouseEvent<HTMLButtonElement>) => {
    void mutateDeletePPh21(
      { taxId },
      {
        onSuccess: () => {
          toast({
            title: 'Berhasil',
            description: 'Data PPh 21 berhasil dihapus',
          });

          router.push('/unit/tax/pph21');
        },
        onError: (error) => {
          toast({
            title: 'gagal Menghapus PPh 21',
            description:
              error.message || 'Terjadi kesalahan saat menghapus data PPh 21',
            variant: 'destructive',
          });
        },
      }
    );
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'destructive'} disabled={isMutateDeletePending}>
          <TrashIcon size={16} className="mr-2" />
          {isMutateDeletePending ? 'Menghapus...' : 'Hapus Data PPh 21'}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Yakin ingin hapus Data PPh 21?</AlertDialogTitle>
          <AlertDialogDescription>
            Data yang telah dihapus tidak akan bisa dikembalikan. Pastikan data
            yang akan dihapus sudah benar.
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
              Hapus Data PPh 21
            </Button>
          </AlertDialogAction>
          <AlertDialogCancel>Batalkan</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
