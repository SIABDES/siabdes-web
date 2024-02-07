"use client";

import { AxiosClientSide } from "@/common/api";
import { GetEmployeesResponse } from "@/types/employees/response";
import { useQuery } from "@tanstack/react-query";

export default function useGetEmployees() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetEmployeesResponse>("/employees");
      return res.data;
    },
  });
}
