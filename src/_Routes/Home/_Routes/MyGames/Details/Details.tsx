import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { useHistory, useParams } from 'react-router-dom';
import { Invitation } from '../../../../../_Components/Invitation/Invitation';
import { TinButton } from '../../../../../_Components/TinButton';
import { TinCustomTable } from '../../../../../_Components/TinCustomTable';
import { createInvitationsConfig, mockData } from './utils';

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
  align-items: center;
  padding: 4rem;
`;

const StyledButton = styled(TinButton)`
  margin-right: 2rem;
`;

const InvitationsWrapper = styled.div`
  margin-top: 2rem;
  width: 80%;
`;

const Title = styled.h2`
  color: #fdfdfd;
  font-family: 'Muli', sans-serif;
`;

const handleReject = (invitationId: number) => {
  console.log(`reject ${invitationId}`);
};

const handleInvite = (invitationId: number) => {
  console.log(`invite ${invitationId}`);
};

export const Details: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [config, setConfig] = useState<any>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setData(mockData);
    setConfig(createInvitationsConfig(handleInvite, handleReject));
    setLoading(false);
    // eslint-disable-next-line
  }, [id]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Label>
          {t('myGames.details')}: {id}
        </Label>
      </HeaderWrapper>
      <Content>
        <Invitation
          id={0}
          title="Looking for team for clash - Main Adc - Diamond III"
          gameName="League of Legends"
          creationDate={'21.10.2020'}
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
            onClick={() => history.push('/home/my-games/edit/2')}
            size={'small'}
          />
        </Invitation>
        <InvitationsWrapper>
          <Title>Invitations</Title>
          {!loading && <TinCustomTable data={data} config={config} />}
        </InvitationsWrapper>
      </Content>
    </Wrapper>
  );
};
