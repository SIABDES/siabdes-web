import { AxiosClientSide } from "@/common/api";
import { PermanentEmployeeBeforeDecemberFormData } from "@/types/pph21/permanent-employee/permanent-employee";
import { AddPph21Response } from "@/types/pph21/response";
import { useMutation } from "@tanstack/react-query";

export default function useAddPph21PermanentEmployee() {
  return useMutation({
    mutationKey: ["add-pph21-permanent-employee"],
    mutationFn: async (data: PermanentEmployeeBeforeDecemberFormData) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        "/pph21/permanent-employees",
        data
      );

      return res.data;
    },
  });
}
