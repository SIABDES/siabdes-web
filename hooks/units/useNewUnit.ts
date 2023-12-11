import { AxiosClientSide } from "@/common/api";
import { NewUnitRequest, NewUnitResponse } from "@/types/units";
import { useMutation } from "@tanstack/react-query";

export function useNewUnit() {
  return useMutation({
    mutationKey: ["new-unit"],
    mutationFn: async (data: NewUnitRequest) => {
      const res = await AxiosClientSide.post<NewUnitResponse>("/units", data);
      return res.data.data;
    },
  });
}
