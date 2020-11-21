import { FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavigationContext } from '../../NavigationContext';
import styled from '@emotion/styled';
import { MyGamesHeader } from './MyGamesHeader';
import React from 'react';
import { Invitation } from '../../../../_Components/Invitation/Invitation';
import { TinButton } from '../../../../_Components/TinButton';
import { useTranslation } from 'react-i18next';

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

const StyledButton = styled(TinButton)`
  margin-right: 2rem;
`;

export const MyGames: FC = () => {
  const history = useHistory();
  const [myGames, setMyGames] = useState<any[]>([]);
  const { navBarExpanded } = useContext(NavigationContext);
  const { t } = useTranslation();

  useEffect(() => {
    console.log('getGames');
  }, []);

  const handleAddGame = () => {
    history.push('my-games/add');
  };

  return (
    <Wrapper isExpanded={navBarExpanded}>
      <MyGamesHeader onAddGame={handleAddGame} />
      <ContentWrapper>
        <Invitation
          id={0}
          title="Looking for team for clash - Main Adc - Diamond III"
          gameName="League of Legends"
          gameLogo={{
            src:
              'https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg',
            alt: 'Photo of LoL',
          }}
          date="25.10.2020 19:00"
          maxPlayers={5}
          contact="http://discord.gg/HRcbkV"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam pulvinar velit, scelerisque accumsan nulla rhoncus at. Nulla bibendum leo id posuere or, convallis urna at, ultricies lorem."
        >
          <StyledButton
            label={t('game.remove')}
            onClick={() => console.log('remove')}
            size={'small'}
          />
          <TinButton
            label={t('game.edit')}
            variant={'white'}
            onClick={() => history.push('my-games/edit/2')}
            size={'small'}
          />
        </Invitation>
        <Invitation
          id={0}
          title="Looking for team for clash - Main Adc - Diamond III"
          gameName="League of Legends"
          gameLogo={{
            src:
              'https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg',
            alt: 'Photo of LoL',
          }}
          date="25.10.2020 19:00"
          maxPlayers={5}
          contact="http://discord.gg/HRcbkV"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam pulvinar velit, scelerisque accumsan nulla rhoncus at. Nulla bibendum leo id posuere or, convallis urna at, ultricies lorem."
        >
          <StyledButton
            label={t('game.remove')}
            onClick={() => console.log('remove')}
            size={'small'}
          />
          <TinButton
            label={t('game.edit')}
            variant={'white'}
            onClick={() => history.push('my-games/edit/2')}
            size={'small'}
          />
        </Invitation>
        <Invitation
          id={0}
          title="Looking for team for clash - Main Adc - Diamond III"
          gameName="League of Legends"
          gameLogo={{
            src:
              'https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg',
            alt: 'Photo of LoL',
          }}
          date="25.10.2020 19:00"
          maxPlayers={5}
          contact="http://discord.gg/HRcbkV"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam pulvinar velit, scelerisque accumsan nulla rhoncus at. Nulla bibendum leo id posuere or, convallis urna at, ultricies lorem."
        >
          <StyledButton
            label={t('game.remove')}
            onClick={() => console.log('remove')}
            size={'small'}
          />
          <TinButton
            label={t('game.edit')}
            variant={'white'}
            onClick={() => history.push('my-games/edit/2')}
            size={'small'}
          />
        </Invitation>
      </ContentWrapper>
    </Wrapper>
  );
};
