import { FC } from 'react';
import { ICommonProps } from '../../../../../_Types/props';
import styled from '@emotion/styled';
import React from 'react';

const RequiredPointer = styled.span`
  color: #d24646;
`;

interface IWrapper {
  required: boolean;
}

const Wrapper = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ required }) => (required ? 1 : 4)};
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 2rem;
  margin: 1rem 0.5rem 1rem 0.5rem;
`;

interface IProps extends ICommonProps {
  title?: string;
  required?: boolean;
  tooltip?: string;
}

export const FormSection: FC<IProps> = ({
  required = false,
  title,
  children,
  className,
}) => {
  return (
    <Wrapper className={className} required={required}>
      <Title>
        {title}
        {required && <RequiredPointer>*</RequiredPointer>}
      </Title>
      <div>{children}</div>
    </Wrapper>
  );
};
