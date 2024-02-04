import { AxiosClientSide } from "@/common/api";
import { GetManyWilayahKelurahanResponse } from "@/types/wilayah";
import { useMutation } from "@tanstack/react-query";

type useMutateGetManyKelurahanArgs = {
  kecamatanKode: string;
};

export function useMutateGetManyKelurahan() {
  return useMutation({
    mutationKey: ["wilayah-kelurahan"],
    mutationFn: async ({ kecamatanKode }: useMutateGetManyKelurahanArgs) => {
      const res = await AxiosClientSide.get<GetManyWilayahKelurahanResponse>(
        "/wilayah/kelurahan",
        {
          params: {
            kecamatan_kode: kecamatanKode,
          },
        }
      );

      return res.data;
    },
  });
}
