import React, { FC } from 'react';
import { IconButton, createStyles, makeStyles, Theme } from '@material-ui/core';
import styled from '@emotion/styled';
import Arrow from './Arrow.svg';
import { ICommonProps } from '../../../../_Types/props';

interface IProps extends ICommonProps {
  isExtended: boolean;
  onClick?: () => void;
}

export const iconStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      position: 'fixed',
      background: '#17172e',
      borderRadius: '0 5px 5px 0',
      boxShadow: '1px 0px 7px rgba(45, 59, 71, 0.19)',
      top: theme.spacing(1.5),
      height: '3.5rem',
      width: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      zIndex: 1000,
      '&:hover': {
        backgroundColor: '#252547',
      },
    },
  })
);

const StyledPanelSwitcher = styled.div`
  width: 0;
`;

const ArrowForward = styled.img`
  transform: rotate(180deg);
`;
const ArrowBack = styled.img`
  transform: none;
`;
export const PanelSwitcher: FC<IProps> = ({ isExtended, onClick }) => {
  const classes = iconStyles();

  return (
    <StyledPanelSwitcher>
      <IconButton
        role="extending-icon"
        className={classes.icon}
        onClick={onClick}
      >
        {isExtended ? <ArrowBack src={Arrow} /> : <ArrowForward src={Arrow} />}
      </IconButton>
    </StyledPanelSwitcher>
  );
};
