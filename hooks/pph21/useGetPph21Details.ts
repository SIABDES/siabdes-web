import { AxiosClientSide } from "@/common/api";
import { GetDetailsPph21Response } from "@/types/pph21/response";
import { useMutation, useQuery } from "@tanstack/react-query";

interface Pph21DetailsPayload {
  taxId: string;
}

async function fetchDetails({
  taxId,
}: Pph21DetailsPayload): Promise<GetDetailsPph21Response> {
  const res = await AxiosClientSide.get<GetDetailsPph21Response>(
    `/pph21/${taxId}`
  );
  return res.data;
}

export function useGetQueryPph21Details({ taxId }: Pph21DetailsPayload) {
  return useQuery({
    queryKey: ["pph21-details", taxId],
    queryFn: async () => await fetchDetails({ taxId }),
  });
}

export function useGetMutationPph212Details() {
  return useMutation({
    mutationKey: ["pph21-details"],
    mutationFn: async ({ taxId }: Pph21DetailsPayload) =>
      await fetchDetails({ taxId }),
  });
}
