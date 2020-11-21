import React, { FC } from 'react';
import styled from '@emotion/styled';
import SmallLogoSrc from '../../../../_Assets/images/logo.png';
import { useHistory } from 'react-router-dom';

const SmallLogo = styled.img`
  margin: 1rem auto;
  height: 6.5rem;
  cursor: pointer;
`;
interface IProps {
  isExtended?: boolean;
  className?: string;
}

export const Logo: FC<IProps> = () => {
  const history = useHistory();

  const onClick = () => {
    history.push('/home/games');
  };

  return <SmallLogo src={SmallLogoSrc} onClick={onClick} />;
};
