import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ICommonProps } from '../../../_Types/props';

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const AuthPage = styled.div`
  flex-grow: 1;
  padding: 8rem;
  display: flex;
  flex-direction: column;
`;

export const AuthPageWrapper: FC<ICommonProps> = ({ children, className }) => {
  return (
    <ScrollContainer className={className}>
      <AuthPage>{children}</AuthPage>
    </ScrollContainer>
  );
};
