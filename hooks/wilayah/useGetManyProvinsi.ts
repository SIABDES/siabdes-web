import { AxiosClientSide, AxiosWilayah } from "@/common/api";
import { GetManyWilayahProvinsiResponse } from "@/types/wilayah";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useGetManyProvinsi() {
  return useQuery({
    queryKey: ["wilayah"],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetManyWilayahProvinsiResponse>(
        "/wilayah/provinsi"
      );

      return res.data;
    },
  });
}
