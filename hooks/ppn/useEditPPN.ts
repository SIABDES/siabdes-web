import { AxiosClientSide } from '@/common/api';
import { UpdatePPNFormData } from '@/types/ppn/dto';
import { UpdatePPNResponse } from '@/types/ppn/response';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useEditPPN({ ppn_id }: { ppn_id: string }) {
  const queryClient = useQueryClient();

  const getPPN = useMutation({
    mutationKey: ['ppn/edit', ppn_id],
    mutationFn: async ({
      data,
      evidence,
    }: {
      data: UpdatePPNFormData;
      evidence: File | null;
    }) => {
      const formData = new FormData();

      formData.append('given_to', data.given_to);
      formData.append('item_type', data.item_type);
      formData.append(
        'transaction_date',
        new Date(data.transaction_date).toISOString()
      );
      formData.append('transaction_type', data.transaction_type);
      formData.append('transaction_number', data.transaction_number);
      formData.append('tax_object', data.tax_object);

      if (evidence) {
        formData.append('transaction_evidence', evidence);
      }

      data.object_items.forEach((item, index) => {
        formData.append(`object_items[${index}][name]`, item.name);
        formData.append(
          `object_items[${index}][quantity]`,
          item.quantity.toString()
        );
        formData.append(`object_items[${index}][price]`, item.price.toString());
        formData.append(
          `object_items[${index}][discount]`,
          item.discount.toString()
        );
        formData.append(
          `object_items[${index}][total_price]`,
          item.total_price.toString()
        );

        formData.append(`object_items[${index}][dpp]`, item.dpp.toString());
        formData.append(`object_items[${index}][ppn]`, item.ppn.toString());
      });

      const res = await AxiosClientSide.put<UpdatePPNResponse>(
        `/ppn/${ppn_id}`,
        formData
      );

      return res.data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['ppn-details', ppn_id],
      });
    },
  });

  return getPPN;
}
