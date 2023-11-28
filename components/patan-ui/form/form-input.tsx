import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { cn } from "@/lib/utils";

interface FormInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function FormInput({
  label,
  name,
  placeholder,
  onChange,
  type,
  value,
  disabled = false,
  className,
}: FormInputProps) {
  return (
    <div className={cn(className)}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        className="mt-1"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
