import { CellConfig } from '../../../../_Components/TinCustomTable';
import React, { ReactElement } from 'react';
import { TinButton } from '../../../../_Components/TinButton';
import styled from '@emotion/styled';

const ButtonContainer = styled.div`
  display: flex;
`;

export const mockInvitationsData = [
  {
    id: 1,
    sentDate: '21.10.2020',
    comment: 'Let`s Play together!',
    accepted: true,
  },
  {
    id: 2,
    sentDate: '21.10.2020',
    comment: 'Go Go lets win this!!',
    accepted: false,
  },
  {
    id: 3,
    sentDate: '21.10.2020',
    comment: 'Coach Me!!',
    accepted: false,
  },
];

export const mockGamesData = [
  {
    id: 0,
    title: 'Looking for team for clash - Main Adc - Diamond III',
    gameName: 'League of Legends',
    creationDate: '21.10.2020',
    date: '25.10.2020 19:00',
    maxPlayers: 5,
    contact: 'http://discord.gg/HRcbkV',
    description: 'Example Description',
  },
  {
    id: 1,
    title: 'Looking for team for clash - Main Adc - Diamond III',
    gameName: 'League of Legends',
    creationDate: '21.10.2020',
    date: '25.10.2020 19:00',
    maxPlayers: 5,
    contact: 'http://discord.gg/HRcbkV',
    description: 'Example Description',
  },
];

export const mockUsersData = [
  {
    id: 1,
    name: 'Joe',
    email: 'JoeDoe20@gmail.com',
    nickname: 'JoeDoe20',
    age: 20,
  },
  {
    id: 2,
    name: 'Jane',
    email: 'JaneDoe21@gmail.com',
    nickname: 'JD21',
    age: 21,
  },
  {
    id: 3,
    name: 'Barack',
    email: 'BObama@gmail.com',
    nickname: 'BObama',
    age: 27,
  },
];

export const createUsersConfig = (
  seeDetails: (invitationId: number) => void,
  handleRemove: (invitationId: number) => void
): CellConfig<any>[] => {
  return [
    {
      name: 'ID',
      propKey: 'id',
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
              variant={'white'}
              onClick={() => seeDetails(value.id)}
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
              onClick={() => handleRemove(value.id)}
              label={'Remove'}
            />
          </ButtonContainer>
        );
      },
    },
  ];
};

export const createInvitationConfig = (
  handleRemove: (invitationId: number) => void,
  handleEdit: (invitationId: number) => void
): CellConfig<any>[] => {
  return [
    {
      name: 'ID',
      propKey: 'id',
    },
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
        return <span>{value.accepted ? 'True' : 'False'}</span>;
      },
    },
    {
      name: '',
      renderCell(value: any): ReactElement {
        return (
          <ButtonContainer>
            <TinButton
              size={'small'}
              onClick={() => handleRemove(value.id)}
              label={'Remove'}
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
              variant={'white'}
              onClick={() => handleEdit(value.id)}
              label={'Edit'}
            />
          </ButtonContainer>
        );
      },
    },
  ];
};

export const createGamesConfig = (
  handleRemove: (invitationId: number) => void,
  handleEdit: (invitationId: number) => void,
  seeDetails: (invitationId: number) => void
): CellConfig<any>[] => {
  return [
    {
      name: 'ID',
      propKey: 'id',
    },
    {
      name: 'Title',
      propKey: 'title',
    },
    {
      name: 'Game Name',
      propKey: 'gameName',
    },
    {
      name: 'Creation Date',
      propKey: 'creationDate',
    },
    {
      name: 'Date',
      propKey: 'date',
    },
    {
      name: '',
      renderCell(value: any): ReactElement {
        return (
          <ButtonContainer>
            <TinButton
              size={'small'}
              onClick={() => handleRemove(value.id)}
              label={'Remove'}
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
              variant={'transparent'}
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
              variant={'white'}
              onClick={() => seeDetails(value.id)}
              label={'Details'}
            />
          </ButtonContainer>
        );
      },
    },
  ];
};
