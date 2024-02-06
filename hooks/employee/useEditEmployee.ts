import { AxiosClientSide } from '@/common/api';
import { UpdateEmployeeFormData } from '@/types/employees/dto';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useEditEmployee({
  employee_id,
}: {
  employee_id: string;
}) {
  const queryClient = useQueryClient();

  const getEmployee = useMutation({
    mutationKey: ['employee/edit', employee_id],
    mutationFn: async (data: UpdateEmployeeFormData) => {
      const res = await AxiosClientSide.put(`/employees/${employee_id}`, data);
      console.log('useedit', res.data);
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
