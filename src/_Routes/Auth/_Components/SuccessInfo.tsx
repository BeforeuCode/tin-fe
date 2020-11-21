import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as CheckCircle } from './CheckCircle.svg';

const SuccessInfoBody = styled.div`
  display: flex;
  align-items: center;
  color: #00ac26;
  font-size: 18px;
  font-weight: 500;
`;

const Text = styled.span`
  margin-left: 1rem;
`;

interface IProps {
  text: string;
}

export const SuccessInfo: FC<IProps> = ({ text }) => {
  return (
    <SuccessInfoBody>
      <CheckCircle />
      <Text>{text}</Text>
    </SuccessInfoBody>
  );
};
