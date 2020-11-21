import { ICommonProps } from '../../_Types/props';
import { FC } from 'react';
import styled from '@emotion/styled';
import SideImageBackground from '../../_Assets/images/side-image.png';
import Logo from '../../_Assets/images/logo.png';
import React from 'react';

const Main = styled.div`
  flex-shrink: 0;
  height: 100%;
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${SideImageBackground});
`;

const LogoImg = styled.img`
  height: 12rem;
  margin-right: auto;
  margin-left: auto;
`;

const LogoContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: row;
  font-size: 2.7rem;
  height: 12rem;
`;

const TextArea = styled.div`
  margin: 2rem auto auto 2rem;
  color: #fdfdfd;
  font-family: 'Muli', sans-serif;

  div:first-of-type {
    font-weight: bold;
    font-size: 6rem;
    line-height: 5.5rem;
    font-family: 'Mono Sans', sans-serif;
  }
  div:nth-of-type(2) {
    white-space: pre-line;
    margin-top: 3rem;
    font-weight: 500;
    font-size: 4rem;
    line-height: 8rem;
    opacity: 0.8;
  }
`;

interface IProps extends ICommonProps {
  title: string;
  subtitle: string;
}

export const AuthSideImage: FC<IProps> = ({ className, title, subtitle }) => {
  return (
    <Main className={className}>
      <LogoContainer>
        <LogoImg src={Logo} />
      </LogoContainer>
      <TextArea>
        <div>{title}</div>
        <div>{subtitle}</div>
      </TextArea>
    </Main>
  );
};
