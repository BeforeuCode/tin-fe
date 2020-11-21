import React from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthPageWrapper } from '../../_Components/AuthPageWrapper';
import styled from '@emotion/styled';
import { AuthHeader } from '../../_Components/AuthHeader';
import { TinButton } from '../../../../_Components/TinButton';
import { LoginForm } from './LoginForm';
import { useHistory } from 'react-router-dom';

const StyledAuthHeader = styled(AuthHeader)`
  margin-bottom: 0.5rem;
  color: #fdfdfd;
`;

const SignUpInfo = styled.div`
  font-size: 2.4rem;
  font-family: 'Mono Sans', sans-serif;
  color: #fdfdfd;
  opacity: 0.5;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 2rem auto 2rem 0;
  border-top: none;
  border-bottom: 1px solid #fdfdfd47;
`;

const StyledButton = styled(TinButton)`
  margin-top: 2rem;
`;

export const Login: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <AuthPageWrapper>
      <StyledAuthHeader>{t('auth.login.title')}</StyledAuthHeader>
      <LoginForm />
      <Divider />
      <SignUpInfo>{t('auth.login.dontHaveAccount')}</SignUpInfo>
      <StyledButton
        label={t('auth.login.signUp')}
        onClick={() => history.push('register')}
      />
    </AuthPageWrapper>
  );
};
