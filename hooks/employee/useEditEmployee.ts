import { AxiosClientSide } from '@/common/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useEditEmployee({
  employee_id,
}: {
  employee_id: string;
}) {
  const queryClient = useQueryClient();

  const getEmployee = useMutation({
    mutationKey: ['employee/edit', employee_id],
    mutationFn: async (formData: FormData) => {
      const res = await AxiosClientSide.put(
        `/employees/${employee_id}`,
        formData
      );
      return res.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['employee-details', employee_id],
      });
    },
  });
  return getEmployee;
}
