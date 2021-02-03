import React, { FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileForm } from './ProfileForm';
import styled from '@emotion/styled';
import { TinCustomTable } from '../../../../_Components/TinCustomTable';
import { useHistory, useParams } from 'react-router-dom';
import { createInvitationConfig } from './utils';
import { NavigationContext } from '../../NavigationContext';
import { getGamerDetails, updateGamer } from './gamers-api';

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
  padding: 4rem;
  background: #07071f;
`;

const Title = styled.h2`
  color: #fdfdfd;
  font-family: 'Muli', sans-serif;
  justify-self: flex-start;
`;

const TablesWrapper = styled.div`
  padding: 5rem;
`;

const StyledProfileForm = styled(ProfileForm)`
  width: auto;
`;

export const GamerDetails: FC = () => {
  const { t } = useTranslation();
  const [invitationsConfig, setInvitationsConfig] = useState<any>();
  const [invitationsData, setInvitationsData] = useState<any>([]);
  const [gamerData, setGamerData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();
  const { navBarExpanded } = useContext(NavigationContext);
  const history = useHistory();

  const handleSubmit = (form: any) => {
    setLoading(true);
    return updateGamer(+id, form).then(() => {
      history.push(`/home/gamers`);
      setLoading(false);
    });
  };

  const seeInviteDetails = (id: number) => {
    history.push(`/home/invites/details/${id}`);
  };

  const seeGameDetails = (id: string) => {
    history.push(`/home/games/details/${id}`);
  };

  const fetchGamerDetails = () => {
    return getGamerDetails(+id).then((gamer) => {
      setGamerData(gamer);
      setInvitationsData(gamer.invites);
    });
  };

  useEffect(() => {
    fetchGamerDetails().then(() => {
      setInvitationsConfig(
        createInvitationConfig(seeInviteDetails, seeGameDetails)
      );
      setLoading(false);
    });
    // eslint-disable-next-line
  }, [id]);

  return (
    <Wrapper isExpanded={navBarExpanded}>
      <HeaderWrapper>
        <Label>{`${t('gamers.details')}: ${id}`}</Label>
      </HeaderWrapper>
      <Content>
        <StyledProfileForm onSubmit={handleSubmit} gamerData={gamerData} />
        <TablesWrapper>
          <Title>Invites</Title>
          {!loading && (
            <TinCustomTable data={invitationsData} config={invitationsConfig} />
          )}
        </TablesWrapper>
      </Content>
    </Wrapper>
  );
};
