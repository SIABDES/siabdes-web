import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import { toast, useToast } from '@/components/ui/use-toast';
import { useEditPPN } from '@/hooks/ppn/useEditPPN';
import useGetPPNDetails from '@/hooks/ppn/useGetPPNDetails';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { use } from 'react';

export default function EditPPN({ params }: { params: { ppn_id: string } }) {
  const { toast } = useToast();
  const router = useRouter();
  const {
    data: details,
    isLoading: isDetailsLoading,
    refetch: refetchDetails,
  } = useGetPPNDetails({ params });

  const { mutateAsync: mutateEditPPN, isPending: isMutateEditPPNPending } =
    useEditPPN({ ppn_id: params.ppn_id });

  //   const handleMutation = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     const form = document.querySelector('form');
  //     const formData = new FormData(form);
  //     mutateEditPPN(formData, {
  //       onSuccess: (data) => {
  //         toast.success('Berhasil mengubah data PPN');
  //         router.push(`/unit/tax/ppn/${params.ppn_id}/details`);
  //       },
  //       onError: (error) => {
  //         toast.error('Gagal mengubah data PPN');
  //       },
  //     });
  //   };
  return (
    <Layout>
      <Link href={`/tax/ppn/${params.ppn_id}/details`} className="w-fit">
        <Button variant={'ghost'}>
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Kembali
        </Button>
      </Link>

      <h5 className="font-semibold mt-4">Edit General Journal Page</h5>
    </Layout>
  );
}
