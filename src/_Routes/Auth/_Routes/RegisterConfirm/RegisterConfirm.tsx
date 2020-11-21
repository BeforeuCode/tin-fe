import styled from '@emotion/styled';
import { TinButton } from '../../../../_Components/TinButton';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { AuthPageWrapper } from '../../_Components/AuthPageWrapper';
import { SuccessInfo } from '../../_Components/SuccessInfo';

const StyledAuthText = styled.span`
  color: #61657e;
  white-space: pre-line;
  font-size: 2rem;
  font-family: Mono Sans, sans-serif;
  margin-bottom: 2rem;
  margin-top: 2rem;
  line-height: 3rem;
`;

const StyledButton = styled(TinButton)`
  margin-top: 4.5rem;
`;

export const RegisterConfirm: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <AuthPageWrapper>
      <SuccessInfo text={t('auth.register.confirmTitle')} />
      <StyledAuthText>{t('auth.register.confirm')}</StyledAuthText>

      <StyledButton
        label={t('auth.register.confirmGo')}
        onClick={() => history.push('login')}
      />
    </AuthPageWrapper>
  );
};
