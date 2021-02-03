import React, { FC, useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { createInvitesConfig } from './utils';
import { GameForm } from './_Components/GameForm';
import { TinCustomTable } from '../../../../_Components/TinCustomTable';
import { NavigationContext } from '../../NavigationContext';
import { getGameDetails, updateGame } from './games-api';

const Wrapper = styled.div<{
  isExpanded: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ isExpanded }) =>
    isExpanded ? 'calc(100% - 23rem)' : 'calc(100% - 8.5rem)'};
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
  justify-content: center;
  align-items: center;
  padding: 3rem 6rem;
  background: #07061f;
`;
const Title = styled.h2`
  color: #fdfdfd;
  font-family: 'Muli', sans-serif;
`;

export const GameDetail: FC = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [invites, setInvites] = useState<any[]>([]);
  const [invitesConfig, setInvitesConfig] = useState<any>();
  const [game, setGame] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();
  const { navBarExpanded } = useContext(NavigationContext);

  const seeInviteDetails = (id: string) => {
    history.push(`/home/invites/details/${id}`);
  };

  const seeGamerDetails = (id: string) => {
    history.push(`/home/gamers/details/${id}`);
  };

  const handleSubmit = (form: any) => {
    setLoading(true);
    updateGame(+id, form).then(() => {
      history.push(`/home/games`);
      setLoading(false);
    });
  };

  const fetchGameDetails = () => {
    return getGameDetails(+id).then((game) => {
      setGame(game);
      setInvites(game.invites);
    });
  };

  useEffect(() => {
    fetchGameDetails().then(() => {
      setInvitesConfig(
        createInvitesConfig(seeInviteDetails, seeGamerDetails, t)
      );
      setLoading(false);
    });
    // eslint-disable-next-line
  }, [id]);

  return (
    <Wrapper isExpanded={navBarExpanded}>
      <HeaderWrapper>
        <Label>{`${t('game.details')}: ${id}`}</Label>
      </HeaderWrapper>
      <Content>
        <GameForm game={game} onSubmit={handleSubmit} />
        <Title>{t('table.invites')}</Title>
        {!loading && <TinCustomTable data={invites} config={invitesConfig} />}
      </Content>
    </Wrapper>
  );
};
