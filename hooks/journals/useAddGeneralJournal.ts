'use client';

import { AxiosClientSide } from '@/common/api';
import { toast } from '@/components/ui/use-toast';
import { AddGeneralJournalResponse, JournalCategory } from '@/types/journals';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export function useAddGeneralJournal() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const getGeneralJournals = useMutation({
    mutationKey: ['general-journals/add'],
    mutationFn: async (formData: FormData) => {
      formData.append('category', JournalCategory.GENERAL);
      const res = await AxiosClientSide.post<AddGeneralJournalResponse>(
        '/journals/general-journals',
        formData
      );

      return res.data;
    },
    onMutate: () => {
      toast({
        title: 'Proses Tambah Jurnal Umum',
        description: 'Sedang menambahkan Jurnal Umum...',
        duration: 3000,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['general-journals'],
      });

      toast({
        title: 'Status Tambah Jurnal Umum',
        description: 'Jurnal umum berhasil ditambahkan',
        duration: 3000,
      });

      router.push('/unit/general-journal');
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast({
          title: 'Gagal menambahkan jurnal umum',
          description: err.response?.data.message,
          variant: 'destructive',
          duration: 3000,
        });
        return;
      }

      toast({
        title: 'Gagal menambahkan jurnal umum',
        description: err.message,
        variant: 'destructive',
        duration: 3000,
      });
    },
  });

  return getGeneralJournals;
}
