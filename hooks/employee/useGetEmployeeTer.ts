import { AxiosClientSide } from "@/common/api";
import { GetEmployeeTerResponse } from "@/types/employees/response";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type GetEmployeeTerArgs = {
  employee_id: string;
  gross_salary: number;
  period_years: number | undefined;
  period_month: number | undefined;
};

export default function useGetEmployeeTer() {
  return useMutation({
    mutationKey: ["employee-ter"],
    mutationFn: async (data: GetEmployeeTerArgs) => {
      const res = await AxiosClientSide.get<GetEmployeeTerResponse>(
        `/employees/${data.employee_id}/ter`,
        {
          params: {
            gross_salary: data.gross_salary,
            period_years: data.period_years,
            period_month: data.period_month,
          },
        }
      );

      return res.data.data;
    },
  });
}
