import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { CellConfig } from '../../../../_Components/TinCustomTable';
import { TinButton } from '../../../../_Components/TinButton';

const ButtonContainer = styled.div`
  display: flex;
`;

export const createMyInvitationsConfig = (
  seeDetails: (invitationId: number) => void,
  handleRemove: (invitationId: number) => void
): CellConfig<any>[] => {
  return [
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
        return <span>{value.isAccepted ? 'True' : 'False'}</span>;
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
              onClick={() => seeDetails(value.inviteId)}
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
              variant={'flat'}
              onClick={() => handleRemove(value.inviteId)}
              label={'Remove'}
            />
          </ButtonContainer>
        );
      },
    },
  ];
};

export const createInvitationDetailsConfig = (
  handleRemove: (invitationId: number) => void,
  handleEdit: (invitationId: number) => void
): CellConfig<any>[] => {
  return [
    {
      name: 'Sent Date',
      propKey: 'sentDate',
    },
    {
      name: 'Comment',
      propKey: 'comment',
    },
    {
      name: 'Accepted',
      renderCell(value: any): ReactElement {
        return <span>{value.isAccepted ? 'True' : 'False'}</span>;
      },
    },
    {
      name: '',
      renderCell(value: any): ReactElement {
        return (
          <ButtonContainer>
            <TinButton
              size={'small'}
              variant={'white'}
              onClick={() => handleEdit(value.id)}
              label={'Edit'}
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
              onClick={() => handleRemove(value.id)}
              label={'Remove'}
            />
          </ButtonContainer>
        );
      },
    },
  ];
};
