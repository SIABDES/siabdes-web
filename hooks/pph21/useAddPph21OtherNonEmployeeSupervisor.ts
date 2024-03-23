import { AxiosClientSide } from "@/common/api";
import { PPh21PostPayloadRequest } from "@/types/pph21/request";
import { AddPph21Response } from "@/types/pph21/response";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export default function useAddPph21OtherNonEmployeeSupervisor() {
  return useMutation({
    mutationKey: ["add-pph21-other-non-employee-supervisor"],
    mutationFn: async (data: PPh21PostPayloadRequest) => {
      const res = await AxiosClientSide.post<AddPph21Response>(
        "/pph21/pph21-other/non-employee-supervisor",
        data
      );

      return res.data;
    },
    onSuccess: () => {
      // toast({
      //   title: 'Berhasil',
      //   description: 'Data PPh21 berhasil disimpan',
      // });
      toast.success("Data PPh21 berhasil disimpan", {
        description: "Memuat ulang data PPh21...",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error("Gagal menyimpan data PPh21", {
          description: error.response?.data.message,
        });
      }
    },
  });
}
