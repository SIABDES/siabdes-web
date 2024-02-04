import { AxiosClientSide, AxiosWilayah } from "@/common/api";
import { GetManyWilayahProvinsiResponse } from "@/types/wilayah";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetManyProvinsi() {
  return useQuery({
    queryKey: ["wilayah-provinsi"],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetManyWilayahProvinsiResponse>(
        "/wilayah/provinsi"
      );

      return res.data;
    },
  });
}

export function useMutateGetManyProvinsi() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["wilayah-provinsi"],
    mutationFn: async () => {
      const res = await AxiosClientSide.get<GetManyWilayahProvinsiResponse>(
        "/wilayah/provinsi"
      );

      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wilayah-provinsi"],
      });
    },
  });
}
