import { CellConfig } from '../../../../_Components/TinCustomTable';
import React, { ReactElement } from 'react';
import { TinButton } from '../../../../_Components/TinButton';
import styled from '@emotion/styled';

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledLink = styled.a`
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export const createAllGamesConfig = (
  seeDetails: (invitationId: string) => void,
  handleRemove: (invitationId: string) => void,
  t: any
): CellConfig<any>[] => {
  return [
    {
      name: 'Title',
      propKey: 'title',
    },
    {
      name: 'Game Name',
      propKey: 'gameName',
    },
    {
      name: 'Date',
      renderCell(value: any): ReactElement {
        return (
          <span>{`${new Date(value.date).toLocaleDateString()} ${new Date(
            value.date
          ).toLocaleTimeString()}`}</span>
        );
      },
    },
    {
      name: '',
      renderCell(value: any): ReactElement {
        return (
          <ButtonContainer>
            <TinButton
              size={'small'}
              variant={'transparent'}
              onClick={() => seeDetails(value.gameId)}
              label={t('table.details')}
            />
          </ButtonContainer>
        );
      },
    },
    {
      name: '',
      renderCell(value: any): ReactElement {
        return (
          <ButtonContainer>
            <TinButton
              size={'small'}
              variant={'flat'}
              onClick={() => handleRemove(value.gameId)}
              label={t('table.remove')}
            />
          </ButtonContainer>
        );
      },
    },
  ];
};

export const createInvitesConfig = (
  seeInviteDetails: (inviteId: string) => void,
  seeGamerDetails: (gamerId: string) => void,
  t: any
): CellConfig<any>[] => {
  return [
    {
      name: 'ID',
      renderCell(value: any): ReactElement {
        return (
          <StyledLink
            onClick={() => seeInviteDetails(value.inviteId)}
          >{`${value.inviteId}`}</StyledLink>
        );
      },
    },
    {
      name: 'Gamer Id',
      renderCell(value: any): ReactElement {
        return (
          <StyledLink
            onClick={() => seeGamerDetails(value.gamerId)}
          >{`${value.gamerId}`}</StyledLink>
        );
      },
    },
    {
      name: 'Sent Date',
      renderCell(value: any): ReactElement {
        return (
          <span>{`${new Date(value.sentDate).toLocaleDateString()} ${new Date(
            value.sentDate
          ).toLocaleTimeString()}`}</span>
        );
      },
    },
    {
      name: 'Comment',
      propKey: 'comment',
    },
    {
      name: 'Accepted',
      renderCell(value: any): ReactElement {
        return <span>{value.accepted ? 'Yes' : 'No'}</span>;
      },
    },
  ];
};
