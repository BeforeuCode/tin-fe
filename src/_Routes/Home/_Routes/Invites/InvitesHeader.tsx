import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TinButton } from '../../../../_Components/TinButton';

const Wrapper = styled.div`
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
const LaunchButton = styled(TinButton)`
  && {
    margin-right: 3rem;
  }
`;

interface IProps {
  addInvite?: () => void;
}

export const InvitesHeader: FC<IProps> = ({ addInvite }) => {
  const { t } = useTranslation();
  const handleAddInvite = () => {
    addInvite && addInvite();
  };
  return (
    <Wrapper>
      <Label>{t('invite.label')}</Label>
      <LaunchButton
        size={'small'}
        variant={'white'}
        label={t('invite.button')}
        onClick={handleAddInvite}
      />
    </Wrapper>
  );
};
