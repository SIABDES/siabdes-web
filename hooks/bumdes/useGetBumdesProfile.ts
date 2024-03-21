import { AxiosClientSide } from "@/common/api";
import { GetBumdesProfileResponse } from "@/types/bumdes";
import { useQuery } from "@tanstack/react-query";

export default function useGetBumdesProfile() {
  return useQuery({
    queryKey: ["bumdes-profile"],
    queryFn: async () => {
      const res = await AxiosClientSide.get<GetBumdesProfileResponse>(
        "/bumdes/profile"
      );

      return res.data;
    },
  });
}
