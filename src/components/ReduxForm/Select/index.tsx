import { FieldProps } from 'formik';
import React, { ChangeEvent } from 'react';
import Select from 'react-select';
import { OptionsType, ValueType } from 'react-select';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: OptionsType<Option>;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
}

export const CSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
}: CustomSelectProps) => {
  const onChange = (option: OptionsType<Option[]>) => {
    form.setFieldValue(field.name, option as any);
  };

  const getValue = () => {
    if (options) {
      return options.find(option => option.value === field.value);
    }
    return isMulti ? [] : ('' as any);
  };

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
    />
  );
};

export default CSelect;
