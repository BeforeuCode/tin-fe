import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { ProfileForm } from '../ProfileForm';
import { useHistory } from 'react-router-dom';
import { createGamer, updateGamer } from '../gamers-api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const HeaderWrapper = styled.div`
  height: 3rem;
  background: #252645;
  border-bottom: 1px solid #2c2c3f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;
const Label = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 3.3rem;
  color: #ffffff;
  margin-left: 3rem;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
`;

export const AddNewGamer: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleSubmit = (form: any) => {
    return createGamer(form).then(() => {
      history.push(`/home/gamers`);
    });
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Label>{t('gamers.addNewGamer')}</Label>
      </HeaderWrapper>
      <Content>
        <ProfileForm onSubmit={handleSubmit} />
      </Content>
    </Wrapper>
  );
};
