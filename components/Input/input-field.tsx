import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface InputFieldProps {
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  //   required?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type,
  value,
  containerClassName,
  labelClassName,
  inputClassName,
  //   required,
  disabled,
  onChange,
}) => {
  return (
    <div className={`flex ${containerClassName || ''}`}>
      <Label
        htmlFor={name}
        className={`p-2 block text-sm font-medium text-black w-full ${
          labelClassName || ''
        }}`}
      >
        {label}
      </Label>
      <h1 className="p-2 text-sm font-medium text-black">:</h1>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className={`p-2 w-full border rounded-md ml ${inputClassName || ''}`}
        // required={required}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
