export function addArrayObjectToFormData(
  formData: FormData,
  data: Record<string, any>[],
  name: string
) {
  data.forEach((item, index) => {
    Object.keys(item).forEach((key) => {
      formData.append(`${name}[${index}][${key}]`, item[key]);
    });
  });

  return formData;
}
