import { AxiosClientSide } from "@/common/api";
import { RegisterFormData } from "@/types/auth";
import { AuthRegisterResponse } from "@/types/auth/response";
import { useMutation } from "@tanstack/react-query";

export default function useRegisterBumdes() {
  const registerBumdes = useMutation({
    mutationKey: ["register-bumdes"],
    mutationFn: async (data: RegisterFormData) => {
      const res = await AxiosClientSide.post<AuthRegisterResponse>(
        "/auth/register",
        data
      );

      return res.data.data;
    },
  });

  return registerBumdes;
}
