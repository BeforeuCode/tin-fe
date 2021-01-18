import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { TinInput } from '../../../../../_Components/TinInput';
import { FormSection } from './FormSection';
import { ICommonProps } from '../../../../../_Types/props';
import styled from '@emotion/styled';

interface IProps extends ICommonProps {
  placeholder?: string;
  label?: string;
  title?: string;
  value?: any;
  fieldName: string;
  required?: boolean;
  type?: string;
  typeNumber?: boolean;
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;

  handleChange?: (
    eventOrPath: string | React.ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
  disabled?: boolean;
}

const StyledInput = styled(TinInput)`
  width: 100%;
  margin: 1rem 0 1rem 0;
`;

export const InputSection: FC<IProps> = ({
  value,
  title,
  required,
  type,
  typeNumber,
  fieldName,
  placeholder,
  label,
  handleChange,
  className,
  setFieldValue,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (value) {
      setInputValue(typeNumber ? (value as number) : value);
    }
  }, [value, typeNumber]);

  useEffect(() => {
    if (setFieldValue) {
      setFieldValue(fieldName, inputValue);
    }
    // eslint-disable-next-line
  }, [inputValue]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    if (typeNumber) {
      value = value.replace(/\D/, '');
      setInputValue(value);
      if (handleChange) {
        event.target.value = value;
        handleChange(event);
      }
    } else {
      setInputValue(value);
      if (handleChange) {
        handleChange(event);
      }
    }
  };

  return (
    <FormSection className={className} title={title} required={required}>
      <StyledInput
        disabled={disabled}
        type={type}
        value={inputValue}
        name={fieldName}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
      />
    </FormSection>
  );
};
