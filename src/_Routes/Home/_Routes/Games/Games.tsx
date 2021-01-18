import { FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavigationContext } from '../../NavigationContext';
import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TinCustomTable } from '../../../../_Components/TinCustomTable';
import { createAllGamesConfig } from './utils';
import { GamesHeader } from './GamesHeader';
import { getGames } from './games-api';

const Wrapper = styled.div<{
  isExpanded: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ isExpanded }) =>
    isExpanded ? 'calc(100% - 23rem)' : 'calc(100% - 8.5rem)'};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background: #07061f;
`;

const Title = styled.h2`
  color: #fdfdfd;
  font-family: 'Muli', sans-serif;
`;

export const Games: FC = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [games, setGames] = useState<any[]>([]);
  const [gamesConfig, setGamesConfig] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const { navBarExpanded } = useContext(NavigationContext);

  const seeDetails = (invitationId: string) => {
    history.push(`games/details/${invitationId}`);
  };

  const fetchGames = () => {
    return getGames().then((games) => {
      setGames(games);
    });
  };

  const handleRemove = (invitationId: string) => {
    console.log(`invite ${invitationId}`);
  };

  const handleAddGame = () => {
    history.push('games/add');
  };

  useEffect(() => {
    fetchGames().then(() => {
      setGamesConfig(createAllGamesConfig(seeDetails, handleRemove, t));
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log('getAllGames');
  }, []);

  return (
    <Wrapper isExpanded={navBarExpanded}>
      <GamesHeader onAddGame={handleAddGame} />
      <ContentWrapper>
        <Title>{t('table.games')}</Title>
        {!loading && <TinCustomTable data={games} config={gamesConfig} />}
      </ContentWrapper>
    </Wrapper>
  );
};
