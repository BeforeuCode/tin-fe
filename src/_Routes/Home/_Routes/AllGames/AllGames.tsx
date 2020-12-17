import { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavigationContext } from '../../NavigationContext';
import styled from '@emotion/styled';
import React from 'react';
import { Invitation } from '../../../../_Components/Invitation/Invitation';
import { TinButton } from '../../../../_Components/TinButton';
import { useTranslation } from 'react-i18next';
import { TinDialog } from '../../../../_Components/TinDialog';
import { TinInput } from '../../../../_Components/TinInput';
import { InputSection } from '../MyGames/_Components/InputSection';

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

const DialogWrapper = styled.div`
  width: 100%;
  padding: 3rem;
`;

const StyledButton = styled(TinButton)`
  && {
    margin-right: 2rem;
  }
`;

export const AllGames: FC = () => {
  const history = useHistory();
  const [games, setGames] = useState<any[]>([]);
  const [comment, setComment] = useState<string>();
  const [inviteDialogOpen, setInviteDialogOpen] = useState<boolean>(false);
  const { navBarExpanded } = useContext(NavigationContext);
  const { t } = useTranslation();

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

  const goToDetails = () => {
    history.push('games/details/0');
  };

  const handleSendInvite = () => {
    console.log(comment);
    setInviteDialogOpen(false);
  };

  useEffect(() => {
    console.log('getAllGames');
  }, []);

  return (
    <Wrapper isExpanded={navBarExpanded}>
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
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam pulvinar velit, scelerisque accumsan nulla rhoncus at. Nulla bibendum leo id posuere or, convallis urna at, ultricies lorem."
        >
          <StyledButton
            variant={'white'}
            onClick={goToDetails}
            label={t('game.details')}
            size={'small'}
          />
          <TinButton
            label={t('game.askForInvite')}
            onClick={onOpenInvitationDialog}
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
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam pulvinar velit, scelerisque accumsan nulla rhoncus at. Nulla bibendum leo id posuere or, convallis urna at, ultricies lorem."
        >
          <StyledButton
            variant={'white'}
            onClick={goToDetails}
            label={t('game.details')}
            size={'small'}
          />
          <TinButton
            label={t('game.askForInvite')}
            onClick={onOpenInvitationDialog}
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
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam pulvinar velit, scelerisque accumsan nulla rhoncus at. Nulla bibendum leo id posuere or, convallis urna at, ultricies lorem."
        >
          <StyledButton
            variant={'white'}
            onClick={goToDetails}
            label={t('game.details')}
            size={'small'}
          />
          <TinButton
            label={t('game.askForInvite')}
            onClick={onOpenInvitationDialog}
            size={'small'}
          />
        </Invitation>
      </ContentWrapper>
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
    </Wrapper>
  );
};
