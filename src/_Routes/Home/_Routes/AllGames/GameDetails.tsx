import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { createInvitationsConfig, mockData } from '../MyGames/Details/utils';
import styled from '@emotion/styled';
import { Invitation } from '../../../../_Components/Invitation/Invitation';
import { TinButton } from '../../../../_Components/TinButton';
import { TinDialog } from '../../../../_Components/TinDialog';
import { InputSection } from '../MyGames/_Components/InputSection';

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

const DialogWrapper = styled.div`
  width: 100%;
  padding: 3rem;
`;

export const GameDetail: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [config, setConfig] = useState<any>();
  const [comment, setComment] = useState<string>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [inviteDialogOpen, setInviteDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    setData(mockData);
    setLoading(false);
    // eslint-disable-next-line
  }, [id]);

  const onOpenInvitationDialog = () => {
    setInviteDialogOpen(true);
  };

  const onCloseInvitationDialog = () => {
    setInviteDialogOpen(false);
  };

  const handleCommentChange = (
    eventOrPath: string | React.ChangeEvent<any>
  ) => {
    setComment((eventOrPath as React.ChangeEvent<any>).target.value);
  };

  const handleSendInvite = () => {
    console.log(comment);
    setInviteDialogOpen(false);
  };

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
          <TinButton
            label={t('game.askForInvite')}
            onClick={onOpenInvitationDialog}
            size={'small'}
          />
        </Invitation>
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
