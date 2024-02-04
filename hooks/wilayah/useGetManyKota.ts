import { AxiosClientSide } from "@/common/api";
import { GetManyWilayahKotaResponse } from "@/types/wilayah";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";

type useMutateGetManyKotaArgs = {
  provinsiKode: string;
};

export default function useMutateGetManyKota() {
  return useMutation({
    mutationKey: ["wilayah-kota"],
    mutationFn: async ({ provinsiKode }: useMutateGetManyKotaArgs) => {
      const res = await AxiosClientSide.get<GetManyWilayahKotaResponse>(
        "/wilayah/kota",
        {
          params: {
            provinsi_kode: provinsiKode,
          },
        }
      );

      return res.data;
    },
  });
}
