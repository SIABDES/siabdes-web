import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";

interface FormDateInputProps {
  label?: string;
  placeholder?: string;
  value?: Date;
  setValue: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export default function FormDateInput({
  setValue,
  label,
  placeholder,
  value,
}: FormDateInputProps) {
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <DatePicker
        className="w-full"
        date={value}
        setDate={setValue}
        placeholder={placeholder ?? "Pilih tanggal"}
      />
    </div>
  );
}
