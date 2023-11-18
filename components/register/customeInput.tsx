import React from 'react';

interface CustomInputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-2 py-1 text-black bg-[#ffffff] border border-[#2a2a2b] rounded-lg"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
