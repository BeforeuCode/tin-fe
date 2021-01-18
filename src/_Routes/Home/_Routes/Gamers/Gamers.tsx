import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { TinCustomTable } from '../../../../_Components/TinCustomTable';
import { createGamersConfig } from './utils';
import styled from '@emotion/styled';
import { GamersHeader } from './GamersHeader';
import { getGamers, removeGamer } from './gamers-api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #07061f;
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

export const Gamers: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [config, setConfig] = useState<any>();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const seeDetails = (invitationId: number) => {
    history.push(`gamers/details/${invitationId}`);
  };

  const fetchGamers = () => {
    return getGamers().then((gamers) => {
      setData(gamers);
    });
  };

  const handleRemove = (gamerId: number) => {
    return removeGamer(gamerId).then(() => {
      setLoading(true);
      fetchGamers().then(() => {
        setLoading(false);
      });
    });
  };

  const handleAddGamer = () => {
    history.push('gamers/add');
  };

  useEffect(() => {
    fetchGamers().then(() => {
      setConfig(createGamersConfig(seeDetails, handleRemove));
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <GamersHeader onAddGamer={handleAddGamer} />
      <Content>
        <Title>Gamers</Title>
        {!loading && <TinCustomTable data={data} config={config} />}
      </Content>
    </Wrapper>
  );
};
