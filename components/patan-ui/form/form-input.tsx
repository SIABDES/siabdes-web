import { cn } from '@/lib/utils';
import React, { InputHTMLAttributes } from 'react';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  name: string;
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  ...props
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
        {...props}
      />
    </div>
  );
}
