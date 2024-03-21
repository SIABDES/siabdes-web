"use client";

import { AxiosClientSide } from "@/common/api";
import { GetEmployeeTaxesResponse } from "@/types/employees/response";
import { useMutation } from "@tanstack/react-query";

type GetEmployeeTaxesMutationPayload = {
  employee_id: string;
  min_period_month?: number;
  max_period_month?: number;
  min_period_years?: number;
  max_period_years?: number;
};

export function useGetEmployeeTaxesMutation() {
  return useMutation({
    mutationKey: ["get-employee-taxes"],
    mutationFn: async (payload: GetEmployeeTaxesMutationPayload) => {
      const res = await AxiosClientSide.get<GetEmployeeTaxesResponse>(
        `/employees/${payload.employee_id}/pph21`,
        {
          params: {
            min_period_month: payload.min_period_month,
            max_period_month: payload.max_period_month,
            min_period_years: payload.min_period_years,
            max_period_years: payload.max_period_years,
          },
        }
      );

      return res.data;
    },
  });
}
