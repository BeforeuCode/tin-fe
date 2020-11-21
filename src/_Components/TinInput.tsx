import React, { ChangeEvent, FC } from 'react';
import styled from '@emotion/styled';
import { ICommonProps } from '../_Types/props';

const Input = styled.input`
  margin: 2rem 0 2rem 0;
  font-family: 'Muli', sans-serif;
  font-size: 2rem;
  color: #fff;
  height: 54px;
  box-shadow: 0 2px 4px rgba(14, 37, 84, 0.22);
  border-radius: 3px;
  border: 1px solid #31334a;
  background-color: #31334a;
  ::-webkit-calendar-picker-indicator {
    filter: invert(100%);
    margin-right: 2rem;
  }
  &:focus {
    outline: none;
    border-color: #919496 !important;
  }
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
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TinInput: FC<IInputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  required,
  name,
  onChange,
  className,
}) => {
  return (
    <Input
      className={className}
      placeholder={placeholder}
      value={value}
      type={type}
      disabled={disabled}
      required={required}
      name={name}
      onChange={onChange}
    />
  );
};
