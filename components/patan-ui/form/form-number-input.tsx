import {
  formatNumber,
  reverseFormat,
  reverseFormatNumber,
} from '@/common/helpers/number-format';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type TransformType = {
  input: (value: any) => string;
  output: (event: React.ChangeEvent<HTMLInputElement>) => number;
};

interface FormNumberInputProps<TFormType extends Record<string, any>>
  extends Omit<ComponentProps<typeof FormField<TFormType>>, 'render'> {
  label?: string;
  className?: string;
  placeholder?: string;
  transform?: TransformType;
  render?: ComponentProps<typeof FormField<TFormType>>['render'];
  readonly?: boolean;
  border?: boolean;
  variant?: 'inline' | 'horizontal';
}

export default function FormNumberInput<TFormType extends Record<string, any>>({
  render,
  className,
  label,
  placeholder,
  readonly,
  variant = 'horizontal',
  border = true,
  transform = {
    input: (value) => {
      return isNaN(value) ? '' : formatNumber(value);
    },
    output: (event) => {
      const unformattedValue = reverseFormat(event.target.value);

      const output = parseInt(unformattedValue);

      return isNaN(output) ? 0 : output;
    },
  },
  ...props
}: FormNumberInputProps<TFormType>) {
  return (
    <FormField
      {...props}
      render={
        render ??
        (({ field }) => {
          const { name, onChange, value, ...fieldProps } = field;

          return (
            <FormItem
              className={cn(
                variant === 'inline' && 'grid grid-cols-2 items-center gap-x-2',
                className
              )}
            >
              {label && (
                <FormLabel htmlFor={name} className="font-medium">
                  {label}
                </FormLabel>
              )}

              <FormControl>
                <Input
                  placeholder={placeholder}
                  type="text"
                  onChange={(e) => onChange(transform.output(e))}
                  value={transform.input(value)}
                  readOnly={readonly}
                  className={cn(
                    border && 'border border-gray-400',
                    label === undefined && 'col-span-2'
                  )}
                  {...fieldProps}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        })
      }
    />
  );
}
