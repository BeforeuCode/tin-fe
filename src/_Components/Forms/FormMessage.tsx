import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ICommonProps } from '../../_Types/props';

const Wrapper = styled.div`
  height: 7rem;
`;

const MessageBody = styled.div<{ error: boolean }>`
  padding: 2rem 2.5rem;
  border-radius: 5px;
  background-color: ${({ error }) => (error ? '#F8F0F0' : '#EBF7EE')};
  color: ${({ error }) => (error ? '#FA4E61' : '#00AC26')};
`;

interface IProps extends ICommonProps {
  message: string;
  error?: boolean;
}

export const FormMassage: FC<IProps> = ({
  message,
  error = true,
  className,
}) => {
  return (
    <Wrapper className={className}>
      {message && (
        <MessageBody error={error}>
          <span>{message}</span>
        </MessageBody>
      )}
    </Wrapper>
  );
};
