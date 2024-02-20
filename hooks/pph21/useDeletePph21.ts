import { AxiosClientSide } from "@/common/api";
import { useMutation } from "@tanstack/react-query";

export default function useDeletePph21() {
  return useMutation({
    mutationKey: ["delete-pph21"],
    mutationFn: async ({ taxId }: { taxId: string }) => {
      const response = await AxiosClientSide.delete(`/pph21/${taxId}`);
      return response.data;
    },
  });
}
