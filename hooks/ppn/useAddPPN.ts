import { AxiosClientSide } from '@/common/api';
import { CreatePPNFormData } from '@/types/ppn/dto';
import { AddPPNDataResponse } from '@/types/ppn/response';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useAddPPN() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['add-ppn'],
    mutationFn: async ({
      data,
      evidence,
    }: {
      data: CreatePPNFormData;
      evidence: File;
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

      formData.append('transaction_evidence', evidence);

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

      const res = await AxiosClientSide.post<AddPPNDataResponse>(
        '/ppn',
        formData
      );
      return res.data.data;
    },
    onMutate: async () => {
      await queryClient.invalidateQueries({ queryKey: ['ppn'] });
    },
  });
}
