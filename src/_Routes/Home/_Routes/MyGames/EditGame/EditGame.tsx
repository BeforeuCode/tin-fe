import React, { FC } from 'react';
import { GameForm } from '../_Components/GameForm';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

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

export const EditGame: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Label>{t('myGames.addNewGame')}</Label>
      </HeaderWrapper>
      <Content>
        <GameForm id={id} onSubmit={handleSubmit} />
      </Content>
    </Wrapper>
  );
};
