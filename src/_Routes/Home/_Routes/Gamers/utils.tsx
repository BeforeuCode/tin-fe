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
export const createGamersConfig = (
  seeDetails: (invitationId: number) => void,
  handleRemove: (invitationId: number) => void
): CellConfig<any>[] => {
  return [
    {
      name: 'Name',
      propKey: 'name',
    },
    {
      name: 'Email',
      propKey: 'email',
    },
    {
      name: 'Nickname',
      propKey: 'nickname',
    },
    {
      name: '',
      renderCell(value: any): ReactElement {
        return (
          <ButtonContainer>
            <TinButton
              size={'small'}
              variant={'transparent'}
              onClick={() => seeDetails(value.gamerId)}
              label={'Details'}
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
              onClick={() => handleRemove(value.gamerId)}
              label={'Remove'}
            />
          </ButtonContainer>
        );
      },
    },
  ];
};

export const createInvitationConfig = (
  seeInviteDetails: (inviteId: number) => void,
  seeGameDetails: (gameId: string) => void
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
      name: 'Game Id',
      renderCell(value: any): ReactElement {
        return (
          <StyledLink
            onClick={() => seeGameDetails(value.gameId)}
          >{`${value.gameId}`}</StyledLink>
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
