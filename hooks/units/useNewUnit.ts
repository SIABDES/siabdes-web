import { AxiosClientSide } from "@/common/api";
import { NewUnitRequest, NewUnitResponse } from "@/types/units";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useNewUnit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["new-unit"],
    mutationFn: async (data: NewUnitRequest) => {
      const res = await AxiosClientSide.post<NewUnitResponse>("/units", data);
      return res.data.data;
    },
    onMutate: async () => {
      await queryClient.invalidateQueries({ queryKey: ["units"] });
    },
  });
}
