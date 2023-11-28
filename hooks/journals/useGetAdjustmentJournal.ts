import { JournalType } from "@/types/journals";
import { JournalResponse } from "@/types/journals/response";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetAdjustmentJournal() {
  type BackendResponseSchema = {
    data: {
      statusCode: number;
      message: string;
      data: JournalResponse;
    };
  };

  const getAdjustmentJournal = useQuery({
    queryKey: ["adjustment-journals"],
    queryFn: async () => {
      const response = await axios.get<BackendResponseSchema>(
        `/api/journals/adjustment-journal`
      );
      const responseData = response.data;
      const result = responseData.data.data;

      const journals: Record<string, React.ReactNode>[] = result.journals.map(
        (journal: JournalType, index: number) => {
          return {
            No: index + 1,
            "Tanggal Transaksi": new Date(
              journal.occured_at
            ).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
            Deskripsi: journal.description,
          };
        }
      );
      return journals ?? [];
    },
  });

  return getAdjustmentJournal;
}
