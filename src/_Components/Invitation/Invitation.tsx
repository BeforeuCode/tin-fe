import React, { FC } from 'react';
import {
  StyledButtons,
  StyledGameInfo,
  StyledGameName,
  StyledInfoBox,
  StyledInfoDescription,
  StyledInfoRow,
  StyledInfoTitle,
  StyledInvitationCard,
  StyledLogo,
  StyledLogoColumn,
  StyledTextColumn,
  StyledTitle,
} from './Invitation.styles';
import { useTranslation } from 'react-i18next';

type InvitationProps = {
  id: number;
  title: string;
  gameName: string;
  date: string;
  maxPlayers: number;
  contact?: string;
  description: string;
  creationDate?: string;
  invitationStatus?: string;
  gameLogo: {
    src: string;
    alt: string;
  };
};

export const Invitation: FC<InvitationProps> = ({
  id,
  title,
  gameName,
  date,
  maxPlayers,
  contact,
  description,
  gameLogo,
  creationDate,
  invitationStatus,
  children,
}) => {
  const { t } = useTranslation();
  return (
    <StyledInvitationCard key={id}>
      <StyledGameInfo>
        <StyledLogoColumn>
          <StyledLogo src={gameLogo.src} alt={gameLogo.alt} />
          <StyledGameName>{gameName}</StyledGameName>
        </StyledLogoColumn>
        <StyledTextColumn>
          <StyledTitle>{title}</StyledTitle>
          <StyledInfoBox>
            <StyledInfoRow>
              <StyledInfoTitle>{t('game.date')}:</StyledInfoTitle>
              <StyledInfoDescription>{date}</StyledInfoDescription>
            </StyledInfoRow>
            <StyledInfoRow>
              <StyledInfoTitle>{t('game.players')}:</StyledInfoTitle>
              <StyledInfoDescription>2/{maxPlayers}</StyledInfoDescription>
            </StyledInfoRow>
            {contact && (
              <StyledInfoRow>
                <StyledInfoTitle>{t('game.contact')}:</StyledInfoTitle>
                {!invitationStatus ? (
                  <StyledInfoDescription>{contact}</StyledInfoDescription>
                ) : invitationStatus === 'ACCEPTED' ? (
                  <StyledInfoDescription>{contact}</StyledInfoDescription>
                ) : (
                  <StyledInfoDescription>*******</StyledInfoDescription>
                )}
              </StyledInfoRow>
            )}
            <StyledInfoRow>
              <StyledInfoTitle>{t('game.description')}:</StyledInfoTitle>
              <StyledInfoDescription>{description}</StyledInfoDescription>
            </StyledInfoRow>
            {creationDate && (
              <StyledInfoRow>
                <StyledInfoTitle>{t('game.creationDate')}:</StyledInfoTitle>
                <StyledInfoDescription>{creationDate}</StyledInfoDescription>
              </StyledInfoRow>
            )}
            {invitationStatus && (
              <StyledInfoRow>
                <StyledInfoTitle>{t('game.invitationStatus')}:</StyledInfoTitle>
                <StyledInfoDescription>
                  {invitationStatus}
                </StyledInfoDescription>
              </StyledInfoRow>
            )}
          </StyledInfoBox>
        </StyledTextColumn>
      </StyledGameInfo>
      <StyledButtons>{children}</StyledButtons>
    </StyledInvitationCard>
  );
};
