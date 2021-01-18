import { FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TinCustomTable } from '../../../../_Components/TinCustomTable';
import { createMyInvitationsConfig } from './utils';
import { InvitesHeader } from './InvitesHeader';
import { NavigationContext } from '../../NavigationContext';
import { getInvites, removeInvite } from './invites-api';

const Wrapper = styled.div<{
  isExpanded: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ isExpanded }) =>
    isExpanded ? 'calc(100% - 23rem)' : 'calc(100% - 8.5rem)'};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background: #07061f;
`;

const Title = styled.h2`
  color: #fdfdfd;
  font-family: 'Muli', sans-serif;
`;

export const Invites: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [config, setConfig] = useState<any>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const { navBarExpanded } = useContext(NavigationContext);

  const seeDetails = (invitationId: number) => {
    history.push(`invites/details/${invitationId}`);
  };

  const fetchInvites = () => {
    return getInvites().then((invites) => {
      setData(invites);
    });
  };

  const handleRemove = (invitationId: number) => {
    return removeInvite(invitationId).then(() => {
      setLoading(true);
      fetchInvites().then(() => {
        setLoading(false);
      });
    });
  };

  const addInvite = () => {
    history.push(`invites/add`);
  };

  useEffect(() => {
    fetchInvites().then(() => {
      setConfig(createMyInvitationsConfig(seeDetails, handleRemove));
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper isExpanded={navBarExpanded}>
      <InvitesHeader addInvite={addInvite} />
      <ContentWrapper>
        <Title>{t('table.invites')}</Title>
        {!loading && <TinCustomTable data={data} config={config} />}
      </ContentWrapper>
    </Wrapper>
  );
};
