import { GeneralJournalType } from '@/types/journals';
import { GeneralJournalResponse } from '@/types/journals/response';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function usePostGeneralJournal() {
  type BackendResponseSchema = {
    data: {
      statusCode: number;
      message: string;
      data: GeneralJournalResponse;
    };
  };

  const postGeneralJournal = useQuery({
    queryKey: ['general-journal'],
    queryFn: async () => {
      const response = await axios.post<BackendResponseSchema>(
        `/api/journals/add-general-journal`
      );

      const responseData = response.data;
      const result = responseData.data.data;
      return result;
    },
  });
  return postGeneralJournal;
}
