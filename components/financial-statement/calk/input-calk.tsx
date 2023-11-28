import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface InputCALKProps {
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  //   required?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const InputCALK: React.FC<InputCALKProps> = ({
  label,
  name,
  placeholder,
  type,
  containerClassName,
  labelClassName,
  inputClassName,
  //   required,
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
        className={`p-2 w-full border rounded-md ml ${inputClassName || ''}`}
        // required={required}
      />
    </div>
  );
};

export default InputCALK;
