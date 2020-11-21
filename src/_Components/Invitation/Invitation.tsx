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
  contact: string;
  description: string;
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
            <StyledInfoRow>
              <StyledInfoTitle>{t('game.contact')}:</StyledInfoTitle>
              <StyledInfoDescription>{contact}</StyledInfoDescription>
            </StyledInfoRow>
            <StyledInfoRow>
              <StyledInfoTitle>{t('game.description')}:</StyledInfoTitle>
              <StyledInfoDescription>{description}</StyledInfoDescription>
            </StyledInfoRow>
          </StyledInfoBox>
        </StyledTextColumn>
      </StyledGameInfo>
      <StyledButtons>{children}</StyledButtons>
    </StyledInvitationCard>
  );
};
