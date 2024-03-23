import { AxiosClientSide } from "@/common/api";
import { GetJournalEvidenceResponse } from "@/types/journals";
import { useQuery } from "@tanstack/react-query";

export default function useGetGeneralJournalEvidence({
  journal_id,
}: {
  journal_id: string;
}) {
  const getGeneralJournalEvidence = useQuery({
    queryKey: ["general-journal-evidence", journal_id],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetJournalEvidenceResponse>(
        `/journals/${journal_id}/evidence`
      );

      return res.data.data;
    },
  });

  return getGeneralJournalEvidence;
}
