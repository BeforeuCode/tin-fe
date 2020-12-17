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
import { ICommonProps } from '../../_Types/props';

interface InvitationProps extends ICommonProps {
  id: number;
  title: string;
  gameName: string;
  date: string;
  maxPlayers: number;
  contact?: string;
  description: string;
  creationDate?: string;
  accepted?: boolean;
  showAccepted?: boolean;
  comment?: string;
  gameLogo: {
    src: string;
    alt: string;
  };
}

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
  accepted,
  showAccepted,
  comment,
  className,
  children,
}) => {
  const { t } = useTranslation();
  return (
    <StyledInvitationCard key={id} className={className}>
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
                {!accepted ? (
                  <StyledInfoDescription>{contact}</StyledInfoDescription>
                ) : accepted ? (
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
            {showAccepted && (
              <StyledInfoRow>
                <StyledInfoTitle>{t('game.accepted')}:</StyledInfoTitle>
                <StyledInfoDescription>
                  {accepted ? accepted.toString() : false.toString()}
                </StyledInfoDescription>
              </StyledInfoRow>
            )}
            {comment && (
              <StyledInfoRow>
                <StyledInfoTitle>{t('game.comment')}:</StyledInfoTitle>
                <StyledInfoDescription>{comment}</StyledInfoDescription>
              </StyledInfoRow>
            )}
          </StyledInfoBox>
        </StyledTextColumn>
      </StyledGameInfo>
      <StyledButtons>{children}</StyledButtons>
    </StyledInvitationCard>
  );
};
