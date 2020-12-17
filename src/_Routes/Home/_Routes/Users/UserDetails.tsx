import React, { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileForm } from '../Profile/ProfileForm';
import styled from '@emotion/styled';
import { TinCustomTable } from '../../../../_Components/TinCustomTable';
import { useHistory, useParams } from 'react-router-dom';
import { TinDialog } from '../../../../_Components/TinDialog';
import { InputSection } from '../MyGames/_Components/InputSection';
import {
  createGamesConfig,
  createInvitationConfig,
  mockGamesData,
  mockInvitationsData,
} from './utils';
import { NavigationContext } from '../../NavigationContext';

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
  padding: 4rem;
  background: #07071f;
`;

const Title = styled.h2`
  color: #fdfdfd;
  font-family: 'Muli', sans-serif;
  justify-self: flex-start;
`;

const TablesWrapper = styled.div`
  padding: 5rem;
`;

const StyledProfileForm = styled(ProfileForm)`
  width: auto;
`;

export const UserDetails: FC = () => {
  const { t } = useTranslation();
  const [invitationsConfig, setInvitationsConfig] = useState<any>();
  const [gamesConfig, setGamesConfig] = useState<any>();
  const [invitationsData, setInvitationsData] = useState<any>();
  const [gamesData, setGamesData] = useState<any>();
  const [comment, setComment] = useState<string>('Let`s Play together!');
  const [loading, setLoading] = useState<boolean>(true);
  const [inviteDialogOpen, setInviteDialogOpen] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const { navBarExpanded } = useContext(NavigationContext);
  const history = useHistory();

  const handleSubmit = () => {
    console.log('submit');
  };

  const handleRemove = (invitationId: number) => {
    console.log(`invite ${invitationId}`);
  };

  const handleEdit = (invitationId: number) => {
    setInviteDialogOpen(true);
  };

  const handleEditGame = (gameId: number) => {
    history.push(`/home/my-games/edit/${gameId}`);
  };

  const onCloseInvitationDialog = () => {
    setInviteDialogOpen(false);
  };

  const handleSendInvite = () => {
    console.log(comment);
    setInviteDialogOpen(false);
  };

  const seeDetails = (invitationId: number) => {
    history.push(`/home/games/details/${invitationId}`);
  };

  const handleCommentChange = (
    eventOrPath: string | React.ChangeEvent<any>
  ) => {
    setComment((eventOrPath as React.ChangeEvent<any>).target.value);
  };

  const DialogWrapper = styled.div`
    width: 100%;
    padding: 3rem;
  `;

  useEffect(() => {
    setInvitationsData(mockInvitationsData);
    setInvitationsConfig(createInvitationConfig(handleRemove, handleEdit));
    setGamesData(mockGamesData);
    setGamesConfig(createGamesConfig(handleRemove, handleEditGame, seeDetails));
    setLoading(false);
    // eslint-disable-next-line
  }, [id]);

  return (
    <Wrapper isExpanded={navBarExpanded}>
      <HeaderWrapper>
        <Label>{t('myGames.profile')}</Label>
      </HeaderWrapper>
      <Content>
        <StyledProfileForm onSubmit={handleSubmit} id={'5'} />
        <TablesWrapper>
          <Title>Invitations</Title>
          {!loading && (
            <TinCustomTable data={invitationsData} config={invitationsConfig} />
          )}
          <Title>Games</Title>
          {!loading && <TinCustomTable data={gamesData} config={gamesConfig} />}
        </TablesWrapper>
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
