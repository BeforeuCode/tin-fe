import React, { FC, useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { NavigationContext } from '../../NavigationContext';
import { InviteForm } from './_Components/InviteForm';
import { getInviteDetails, updateInvite } from './invites-api';

const Wrapper = styled.div<{
  isExpanded: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ isExpanded }) =>
    isExpanded ? 'calc(100% - 23rem)' : 'calc(100% - 8.5rem)'};
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
  justify-content: center;
  align-items: center;
  padding: 3rem 6rem;
  background: #07061f;
`;

export const InviteDetails: FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState();
  const { id } = useParams<{ id: string }>();
  const { navBarExpanded } = useContext(NavigationContext);

  const fetchInviteDetails = () => {
    return getInviteDetails(+id).then((invite) => {
      setData(invite);
    });
  };

  const handleSubmit = (form: any) => {
    setLoading(true);
    const mappedForm = {
      gamerId: form.gamer,
      gameId: form.game,
      sentDate: form.sentDate,
      comment: form.comment,
      isAccepted: form.isAccepted === 'YES',
    };

    return updateInvite(+id, mappedForm).then(() => {
      fetchInviteDetails().then(() => {
        setLoading(false);
      });
    });
  };

  useEffect(() => {
    fetchInviteDetails().then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line
  }, [id]);

  return (
    <Wrapper isExpanded={navBarExpanded}>
      <HeaderWrapper>
        <Label>{`${t('invite.details')}: ${id}`}</Label>
      </HeaderWrapper>
      <Content>
        {!loading && (
          <InviteForm data={data} onSubmit={handleSubmit} newInvite={false} />
        )}
      </Content>
    </Wrapper>
  );
};
