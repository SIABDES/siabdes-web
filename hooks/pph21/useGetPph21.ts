import { AxiosClientSide } from "@/common/api";
import { GetManyPph21Response } from "@/types/pph21/response";
import { useQuery } from "@tanstack/react-query";

export default function useGetPph21() {
  return useQuery({
    queryKey: ["pph21"],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetManyPph21Response>("/pph21");

      return res.data;
    },
  });
}
