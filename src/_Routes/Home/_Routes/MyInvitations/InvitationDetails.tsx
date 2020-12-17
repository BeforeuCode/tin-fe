import React, { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Invitation } from '../../../../_Components/Invitation/Invitation';
import { TinDialog } from '../../../../_Components/TinDialog';
import { InputSection } from '../MyGames/_Components/InputSection';
import { createInvitationDetailsConfig, singleMockData } from './utils';
import { TinCustomTable } from '../../../../_Components/TinCustomTable';
import { NavigationContext } from '../../NavigationContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #07061f;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
`;

const InvitationsWrapper = styled.div`
  margin-top: 2rem;
  width: 80%;
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

const DialogWrapper = styled.div`
  width: 100%;
  padding: 3rem;
`;

const Title = styled.h2`
  color: #fdfdfd;
  font-family: 'Muli', sans-serif;
  justify-self: flex-start;
`;

const StyledInvitation = styled(Invitation)`
  width: 100%;
`;

export const InvitationDetail: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const [config, setConfig] = useState<any>();
  const [comment, setComment] = useState<string>('Let`s Play together!');
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [inviteDialogOpen, setInviteDialogOpen] = useState<boolean>(false);
  const { navBarExpanded } = useContext(NavigationContext);

  const handleRemove = (invitationId: number) => {
    console.log(`invite ${invitationId}`);
  };

  const handleEdit = (invitationId: number) => {
    setInviteDialogOpen(true);
  };

  useEffect(() => {
    setData(singleMockData);
    setConfig(createInvitationDetailsConfig(handleRemove, handleEdit));
    setLoading(false);
    // eslint-disable-next-line
  }, [id]);

  const onOpenInvitationDialog = () => {
    setInviteDialogOpen(true);
  };

  const onCloseInvitationDialog = () => {
    setInviteDialogOpen(false);
  };

  const handleSendInvite = () => {
    console.log(comment);
    setInviteDialogOpen(false);
  };

  const handleCommentChange = (
    eventOrPath: string | React.ChangeEvent<any>
  ) => {
    setComment((eventOrPath as React.ChangeEvent<any>).target.value);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Label>
          {t('invitation.details')}: {id}
        </Label>
      </HeaderWrapper>
      <Content>
        <InvitationsWrapper>
          <Title>Invitation</Title>
          {!loading && <TinCustomTable data={data} config={config} />}
        </InvitationsWrapper>
        <InvitationsWrapper>
          <Title>Game</Title>
          <StyledInvitation
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
          />
        </InvitationsWrapper>
        <TinDialog
          title={t('game.inviteDialog.title')}
          open={inviteDialogOpen}
          onClose={onCloseInvitationDialog}
          saveButtonLabel={t('game.inviteDialog.submit')}
          onSave={handleSendInvite}
        >
          <DialogWrapper>
            <InputSection
              title={t('game.inviteDialog.comment')}
              placeholder={t('game.inviteDialog.placeholder')}
              required
              fieldName={'comment'}
              handleChange={handleCommentChange}
              value={comment}
            />
          </DialogWrapper>
        </TinDialog>
      </Content>
    </Wrapper>
  );
};
