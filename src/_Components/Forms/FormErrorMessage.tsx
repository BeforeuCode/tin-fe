import React, { FC } from 'react';
import styled from '@emotion/styled';

import { ReactComponent as XCircle } from './x-circle.svg';
import { ICommonProps } from '../../_Types/props';

const ErrorMessageBody = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 1rem 0;
  color: #fa4e61;
`;

const Message = styled.div`
  margin-left: 1rem;
  line-height: 2rem;
`;

interface IProps extends ICommonProps {
  message?: string | string[] | (string | undefined)[];
}

export const FieldErrorMessage: FC<IProps> = ({ message, className }) => {
  return (
    <ErrorMessageBody className={className}>
      {((Array.isArray(message) && message.some((el) => el !== undefined)) ||
        (!Array.isArray(message) && message)) && <XCircle />}
      <Message>{message}</Message>
    </ErrorMessageBody>
  );
};
