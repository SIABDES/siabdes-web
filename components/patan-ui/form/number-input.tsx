import { formatNumber, reverseFormat } from "@/common/helpers/number-format";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type TransformType = {
  input: (value: any) => string;
  output: (event: React.ChangeEvent<HTMLInputElement>) => number;
};

interface NumberInputProps {
  label?: string;
  className?: string;
  placeholder?: string;
  transform?: TransformType;
  readonly?: boolean;
  border?: boolean;
  value: number;
  onChange?: (value: number) => void;
  variant?: "inline" | "horizontal";
  classNameContainer?: string;
  disabled?: boolean;
}

export default function NumberInput({
  placeholder,
  className,
  classNameContainer,
  readonly,
  label,
  border = true,
  value,
  variant = "horizontal",
  onChange,
  disabled,
  transform = {
    input: (value) => {
      return isNaN(value) ? "" : formatNumber(value);
    },
    output: (event) => {
      const unformattedValue = reverseFormat(event.target.value);

      const output = parseInt(unformattedValue);

      return isNaN(output) ? 0 : output;
    },
  },
}: NumberInputProps) {
  return (
    <div
      className={cn(
        variant === "inline" && "grid grid-cols-2 items-center gap-x-2",
        classNameContainer
      )}
    >
      {label && <Label className="font-medium">{label}</Label>}

      <Input
        placeholder={placeholder}
        type="text"
        onChange={onChange ? (e) => onChange(transform.output(e)) : undefined}
        value={transform.input(value)}
        readOnly={readonly}
        className={cn(
          border && "border border-gray-400",
          label === undefined && "col-span-2",
          className
        )}
        disabled={disabled}
      />
    </div>
  );
}
