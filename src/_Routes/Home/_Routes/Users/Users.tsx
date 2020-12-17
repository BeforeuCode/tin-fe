import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { TinCustomTable } from '../../../../_Components/TinCustomTable';
import { TinDialog } from '../../../../_Components/TinDialog';
import { InputSection } from '../MyGames/_Components/InputSection';
import { createUsersConfig, mockUsersData } from './utils';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #07061f;
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
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;

const Title = styled.h2`
  color: #fdfdfd;
  font-family: 'Muli', sans-serif;
`;

export const Users: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [config, setConfig] = useState<any>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const seeDetails = (invitationId: number) => {
    history.push(`users/details/${invitationId}`);
  };

  const handleRemove = (invitationId: number) => {
    console.log(`invite ${invitationId}`);
  };

  useEffect(() => {
    setData(mockUsersData);
    setConfig(createUsersConfig(seeDetails, handleRemove));
    setLoading(false);
    // eslint-disable-next-line
  }, [id]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Label>
          {t('users.details')}: {id}
        </Label>
      </HeaderWrapper>
      <Content>
        <Title>Users</Title>
        {!loading && <TinCustomTable data={data} config={config} />}
      </Content>
    </Wrapper>
  );
};
