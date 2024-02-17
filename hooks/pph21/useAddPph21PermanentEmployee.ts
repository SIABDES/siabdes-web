import { AxiosClientSide } from "@/common/api";
import { toast } from "@/components/ui/use-toast";
import { PPh21PostPayloadRequest } from "@/types/pph21/request";
import { AddPph21Response } from "@/types/pph21/response";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function useAddPph21PermanentEmployee() {
  return useMutation({
    mutationKey: ["add-pph21-permanent-employee"],
    mutationFn: async (data: PPh21PostPayloadRequest) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        "/pph21/permanent-employees",
        data
      );

      return res.data;
    },
    onSuccess: () => {
      toast({
        title: "Berhasil",
        description: "Data PPh21 berhasil disimpan",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast({
          title: "Gagal",
          description: error.response?.data.message,
          variant: "destructive",
        });
      }
    },
  });
}
