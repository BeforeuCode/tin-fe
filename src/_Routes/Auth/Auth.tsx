import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthSideImage } from './AuthSideImage';
import styled from '@emotion/styled';
import { Route } from 'react-router-dom';
import { Login } from './_Routes/Login/Login';
import { Register } from './_Routes/Register/Register';
import { RegisterConfirm } from './_Routes/RegisterConfirm/RegisterConfirm';

const AuthBody = styled.div`
  height: 100%;
  width: 100%;

  display: flex;

  .side-image {
    @media (max-width: 650px) {
      display: none;
    }
  }
`;

export const Auth: FC = () => {
  const { t } = useTranslation();

  return (
    <AuthBody>
      <AuthSideImage
        title={t('auth.sidePanel.title')}
        subtitle={t('auth.sidePanel.subtitle')}
        className="side-image"
      />
      <Route exact path="/auth/login">
        <Login />
      </Route>
      <Route exact path="/auth/register">
        <Register />
      </Route>
      <Route exact path="/auth/register-confirmed">
        <RegisterConfirm />
      </Route>
    </AuthBody>
  );
};
