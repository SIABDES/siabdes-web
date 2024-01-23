import { AxiosClientSide } from "@/common/api";
import { GetEmployeeDetailsResponse } from "@/types/employees/response";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function useGetEmployeeDetails({
  params,
}: {
  params: { employee_id: string };
}) {
  return useQuery({
    queryKey: ["employee_details", params.employee_id],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetEmployeeDetailsResponse>(
        `/employees/${params.employee_id}`
      );
      return res.data.data;
    },
  });
}
