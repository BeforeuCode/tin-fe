import { ICommonProps } from '../_Types/props';
import { FC } from 'react';
import styled from '@emotion/styled';
import React from 'react';

export interface IProps extends ICommonProps {
  label?: string;
  isDisabled?: boolean;
  variant?: 'flat' | 'white' | 'transparent';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  inputType?: 'submit';
  color?: 'primary' | 'secondary' | 'default';
}

const Button = styled.a`
  font-family: 'Muli', sans-serif;
  height: 54px;
  padding: 8px;
  font-size: 1.5rem;
  font-weight: 900;
  color: #ff4655;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 0 0 1px inset rgba(236, 232, 225, 0.3);
  position: relative;
  margin: 10px 0;
  min-width: 200px;
  &:hover {
    cursor: pointer;
  }
  &.small {
    height: 30px;
    & p {
      height: 30px;
      line-height: 30px;
    }
  }
  &.white:hover > p {
    color: #ece8e1;
  }
  &.white > p {
    background: #ece8e1;
    color: #0f1923;
    & span.base {
      border: 1px solid transparent;
    }
  }
  &.transparent:hover > p {
    color: #ece8e1;
    & span.text {
      box-shadow: 0 0 0 1px #ece8e1;
    }
  }
  &.transparent > p {
    background: #0f1923;
    color: #ece8e1;
    & span.base {
      border: 1px solid #ece8e1;
    }
  }
  &:after,
  &:before {
    content: '';
    width: 1px;
    position: absolute;
    height: 8px;
    background: #0f1923;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &:before {
    right: 0;
    left: initial;
  }
  & p {
    margin: 0;
    height: 54px;
    line-height: 54px;
    box-sizing: border-box;
    z-index: 1;
    left: 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    & span.base {
      box-sizing: border-box;
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      left: 0;
      border: 1px solid #ff4655;
      &:before {
        content: '';
        width: 2px;
        height: 2px;
        left: -1px;
        top: -1px;
        background: #0f1923;
        position: absolute;
        transition: 0.3s ease-out all;
      }
    }
    & span.bg {
      left: -5%;
      position: absolute;
      background: #ff4655;
      width: 0;
      height: 100%;
      z-index: 3;
      transition: 0.3s ease-out all;
      transform: skewX(-10deg);
    }
    & span.text {
      z-index: 4;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      &:after {
        content: '';
        width: 4px;
        height: 4px;
        right: 0;
        bottom: 0;
        background: #0f1923;
        position: absolute;
        transition: 0.3s ease-out all;
        z-index: 5;
      }
    }
  }
  &:hover {
    color: #ece8e1;
    & span.bg {
      width: 110%;
    }
    & span.text:after {
      background: #ece8e1;
    }
  }
`;

export const TinButton: FC<IProps> = ({
  label,
  variant,
  onClick,
  color,
  size,
  inputType,
  className,
}) => {
  return (
    <Button
      color={color}
      className={`${className ? className : ''} ${variant ? variant : ''} ${
        size ? size : ''
      }`}
      onClick={onClick}
      type={inputType}
    >
      <p>
        <span className="bg" />
        <span className="base" />
        <span className="text">{label}</span>
      </p>
    </Button>
  );
};
