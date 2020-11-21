import React from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthHeader } from '../../_Components/AuthHeader';
import { AuthPageWrapper } from '../../_Components/AuthPageWrapper';
import { RegisterForm } from './RegisterForm';
import styled from '@emotion/styled';

const StyledAuthText = styled.span`
  color: #61657e;
  white-space: pre-line;
  font-size: 2rem;
  font-family: Mono Sans, sans-serif;
  margin-bottom: 2rem;
`;
export const Register: FC = () => {
  const { t } = useTranslation();
  return (
    <AuthPageWrapper>
      <AuthHeader>{t('auth.register.singUpTitle')}</AuthHeader>
      <StyledAuthText>{t('auth.register.singUpSubtitle')}</StyledAuthText>
      <RegisterForm />
    </AuthPageWrapper>
  );
};
