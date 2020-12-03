import { CellConfig } from '../../../../../_Components/TinCustomTable';
import React, { ReactElement } from 'react';
import { TinButton } from '../../../../../_Components/TinButton';
import styled from '@emotion/styled';

const ButtonContainer = styled.div`
  display: flex;
`;

export const mockData = [
  {
    name: 'Gamer #1',
    invitationDate: '21.10.2020',
    age: '20',
    id: '1',
  },
  {
    name: 'Gamer #2',
    invitationDate: '21.10.2020',
    age: '21',
    id: '2',
  },
  {
    name: 'Gamer #3',
    invitationDate: '21.10.2020',
    age: '22',
    id: '3',
  },
];

export const createInvitationsConfig = (
  handleInvite: (channelId: number) => void,
  handleReject: (channelId: number) => void
): CellConfig<any>[] => {
  return [
    {
      name: 'Name',
      propKey: 'name',
    },
    {
      name: 'Date',
      propKey: 'invitationDate',
    },
    {
      name: 'Age',
      propKey: 'age',
    },
    {
      name: '',
      renderCell(value: any): ReactElement {
        return (
          <ButtonContainer>
            <TinButton
              size={'small'}
              variant={'white'}
              onClick={() => handleInvite(value.id)}
              label={'Invite'}
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
              onClick={() => handleReject(value.id)}
              label={'Reject'}
            />
          </ButtonContainer>
        );
      },
    },
  ];
};
