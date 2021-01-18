import styled from '@emotion/styled';
import { ICommonProps } from '../_Types/props';
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

export interface ISelectOption {
  label: string;
  value: string;
}

const Select = styled.select<{ initial: boolean }>`
  margin: 2rem 0 2rem 0;
  font-family: 'Muli', sans-serif;
  font-size: 2rem;
  color: ${({ initial }) => (initial ? 'gray' : '#fff')};
  height: 54px;
  box-shadow: 0 2px 4px rgba(14, 37, 84, 0.22);
  border-radius: 3px;
  border: 1px solid #31334a;
  background-color: #31334a;
  -webkit-appearance: none;
  option {
    color: white;
  }
  &:focus {
    outline: none;
    border-color: #919496 !important;
  }
`;

const Placeholder = styled.option`
  color: gray !important;
`;

export interface IInputProps extends ICommonProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: ISelectOption[];
  initial?: boolean;
}

export const TinSelect: FC<IInputProps> = ({
  placeholder,
  value,
  disabled,
  required,
  name,
  onChange,
  className,
  options,
}) => {
  const ref = useRef<HTMLSelectElement>(null);
  const [val, setVal] = useState('');

  useEffect(() => {
    if (ref && ref.current) {
      setVal(ref.current.value);
    }
  }, [ref]);

  useEffect(() => {
    if (value) {
      setVal(value);
    }
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setVal(event.target.value);
    onChange && onChange(event);
  };
  return (
    <Select
      ref={ref}
      placeholder={placeholder}
      value={value}
      className={className}
      disabled={disabled}
      required={required}
      name={name}
      initial={val === ''}
      onChange={handleChange}
    >
      <Placeholder label={placeholder} selected disabled />
      {options.map((option, index) => (
        <option value={option.value} key={`option ${index}`}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};
