import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { FormSection } from './FormSection';
import { ICommonProps } from '../../../../../_Types/props';
import styled from '@emotion/styled';
import { ISelectOption, TinSelect } from '../../../../../_Components/TinSelect';

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
  options: ISelectOption[];
  handleChange?: (
    eventOrPath: string | React.ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
  disabled?: boolean;
}

const StyledSelect = styled(TinSelect)`
  width: 100%;
  margin: 1rem 0 1rem 0;
`;

export const SelectSection: FC<IProps> = ({
  value,
  title,
  required,
  fieldName,
  placeholder,
  label,
  handleChange,
  className,
  setFieldValue,
  disabled,
  options,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (setFieldValue) {
      setFieldValue(fieldName, inputValue);
    }
    // eslint-disable-next-line
  }, [inputValue]);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setInputValue(value);
    if (handleChange) {
      handleChange(event);
    }
  };

  return (
    <FormSection className={className} title={title} required={required}>
      <StyledSelect
        disabled={disabled}
        name={fieldName}
        onChange={onChange}
        label={label}
        value={inputValue}
        placeholder={placeholder}
        options={options}
      />
    </FormSection>
  );
};
