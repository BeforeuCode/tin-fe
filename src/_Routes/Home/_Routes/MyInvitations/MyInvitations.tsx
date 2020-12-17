import { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TinCustomTable } from '../../../../_Components/TinCustomTable';
import { createMyInvitationsConfig, mockData } from './utils';
import { TinDialog } from '../../../../_Components/TinDialog';
import { InputSection } from '../MyGames/_Components/InputSection';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #07061f;
`;

const HeaderWrapper = styled.div`
  height: 3rem;
  background: #252645;
  border-bottom: 1px solid #2c2c3f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

const Label = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 3.3rem;
  color: #ffffff;
  margin-left: 3rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;

const Title = styled.h2`
  color: #fdfdfd;
  font-family: 'Muli', sans-serif;
`;

const DialogWrapper = styled.div`
  width: 100%;
  padding: 3rem;
`;

export const MyInvitations: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [config, setConfig] = useState<any>();
  const [data, setData] = useState<any>();
  const [comment, setComment] = useState<string>('Let`s Play together!');
  const [inviteDialogOpen, setInviteDialogOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const seeDetails = (invitationId: number) => {
    history.push(`my-invitations/details/${invitationId}`);
  };

  const handleRemove = (invitationId: number) => {
    console.log(`invite ${invitationId}`);
  };

  const handleEdit = (invitationId: number) => {
    setInviteDialogOpen(true);
  };

  useEffect(() => {
    setData(mockData);
    setConfig(createMyInvitationsConfig(seeDetails, handleRemove, handleEdit));
    setLoading(false);
    // eslint-disable-next-line
  }, [id]);

  const onCloseInvitationDialog = () => {
    setInviteDialogOpen(false);
  };

  const handleCommentChange = (
    eventOrPath: string | React.ChangeEvent<any>
  ) => {
    setComment((eventOrPath as React.ChangeEvent<any>).target.value);
  };

  const handleSendInvite = () => {
    console.log(comment);
    setInviteDialogOpen(false);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Label>
          {t('myGames.details')}: {id}
        </Label>
      </HeaderWrapper>
      <Content>
        <Title>Invitations</Title>
        {!loading && <TinCustomTable data={data} config={config} />}
      </Content>
      <TinDialog
        title={t('game.inviteDialog.title')}
        open={inviteDialogOpen}
        onClose={onCloseInvitationDialog}
        saveButtonLabel={t('game.inviteDialog.save')}
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
