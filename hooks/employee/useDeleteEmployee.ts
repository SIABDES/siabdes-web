import { AxiosClientSide } from "@/common/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import React from "react";

export default function useDeleteEmployee(params: { employee_id: string }) {
  const { employee_id } = params;
  const queryClient = useQueryClient();
  const deleteEmployeeMutation = useMutation({
    mutationKey: ["delete-employee", employee_id],
    mutationFn: async () => {
      const response = await AxiosClientSide.delete(
        `/employees/${employee_id}`
      );

      return response.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["employee"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["employee-details"],
      });
    },
  });
  return deleteEmployeeMutation;
}
