import { GeneralJournalType } from '@/types/journals';
import { GeneralJournalResponse } from '@/types/journals/response';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGetGeneralJournal() {
  type BackendResponseSchema = {
    data: {
      statusCode: number;
      message: string;
      data: GeneralJournalResponse;
    };
  };

  const getGeneralJournal = useQuery({
    queryKey: ['general-journal'],
    queryFn: async () => {
      const response = await axios.get<BackendResponseSchema>(
        `/api/journals/general-journal`
      );
      const responseData = response.data;
      const result = responseData.data.data;

      const journals: Record<string, React.ReactNode>[] = result.journals.map(
        (journal: GeneralJournalType, index: number) => {
          return {
            No: index + 1,
            'Tanggal Transaksi': new Date(
              journal.occured_at
            ).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }),
            Deskripsi: journal.description,
          };
        }
      );
      return journals ?? [];
    },
  });

  return getGeneralJournal;
}
