import { AxiosClientSide } from "@/common/api";
import { EmployeeFormDataType } from "@/types/employees/dto";
import { AddEmployeeDataResponse } from "@/types/employees/response";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAddEmployee() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-employee"],
    mutationFn: async (data: EmployeeFormDataType) => {
      const res = await AxiosClientSide.post<AddEmployeeDataResponse>(
        "/employees",
        data
      );
      return res.data.data;
    },
    onMutate: async () => {
      await queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });
}
