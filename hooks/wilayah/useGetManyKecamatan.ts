import { AxiosClientSide } from "@/common/api";
import { GetManyWilayahKecamatanResponse } from "@/types/wilayah";
import { useMutation } from "@tanstack/react-query";

type useMutateGetManyKecamatanArgs = {
  kotaKode: string;
};

export function useMutateGetManyKecamatan() {
  return useMutation({
    mutationKey: ["wilayah-kecamatan"],
    mutationFn: async ({ kotaKode }: useMutateGetManyKecamatanArgs) => {
      const res = await AxiosClientSide.get<GetManyWilayahKecamatanResponse>(
        "/wilayah/kecamatan",
        {
          params: {
            kota_kode: kotaKode,
          },
        }
      );

      return res.data;
    },
  });
}
