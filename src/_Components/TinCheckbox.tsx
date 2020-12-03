import React, { FC } from 'react';
import styled from '@emotion/styled';
import Checkbox from '@material-ui/core/Checkbox';
import { SwitchBaseProps } from '@material-ui/core/internal/SwitchBase';
import { ICommonProps } from '../_Types/props';

const TinCheckboxBody = styled.div`
  display: inline-flex;
  align-items: flex-start;
`;

const TextWrapper = styled.div`
  padding: 1.2rem 0;
  color: #61657e;
  line-height: 2rem;
`;

interface IProps extends ICommonProps {
  label?: string;
  name?: string;
  value?: boolean;
  indeterminate?: boolean;
  required?: boolean;
  onChange?: SwitchBaseProps['onChange'];
  isDisabled?: boolean;
}

export const TinCheckbox: FC<IProps> = ({
  value,
  label,
  onChange,
  isDisabled,
  required,
  name,
  className,
  children,
  indeterminate,
}) => {
  return (
    <TinCheckboxBody className={className}>
      <Checkbox
        indeterminate={indeterminate}
        color="primary"
        required={required}
        checked={value}
        disabled={isDisabled}
        onChange={onChange}
        name={name}
      />
      <TextWrapper>
        <span>{label}</span>
        {children}
      </TextWrapper>
    </TinCheckboxBody>
  );
};
