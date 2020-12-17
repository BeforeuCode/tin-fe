import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { CellConfig } from '../../../../_Components/TinCustomTable';
import { TinButton } from '../../../../_Components/TinButton';

const ButtonContainer = styled.div`
  display: flex;
`;

export const mockData = [
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

export const singleMockData = [
  {
    id: 1,
    sentDate: '21.10.2020',
    comment: 'Let`s Play together!',
    accepted: true,
  },
];

export const createMyInvitationsConfig = (
  seeDetails: (invitationId: number) => void,
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
              variant={'transparent'}
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
