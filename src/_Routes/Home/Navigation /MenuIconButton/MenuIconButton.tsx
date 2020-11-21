import React, { FC } from 'react';
import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { ICommonProps } from '../../../../_Types/props';

export const buttonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0.5rem !important',
      '&:hover': {
        background: '#17172e',
      },
    },
    expanded: {
      borderRadius: '5px',
      margin: '1rem 2rem 0 2rem;',
      height: '4.5rem',
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'start',
    },
    rolled: {
      borderRadius: '5px',
      margin: '1rem 2rem 0 2rem',
      height: '4.5rem',
      width: '4.5rem',
      display: 'flex',
      alignItems: 'center',
      padding: 0,
      justifyContent: 'start',
    },
    active: {
      background: '#252547',
      padding: '0.5rem',
      '&:hover': {
        background: '#1c1c41',
      },
    },
  })
);

export const iconStyles = makeStyles(() =>
  createStyles({
    expanded: {
      marginLeft: '1.5rem',
      width: '2rem',
      height: '2rem',
    },
    rolled: {
      margin: 'auto',
      width: '2rem',
      height: '2rem',
    },
  })
);

export const labelStyles = makeStyles(() =>
  createStyles({
    lighter: {
      color: '#A1A1A1',
    },
    active: {
      fontWeight: 600,
    },
  })
);

const Children = styled.div`
  margin-left: 1.5rem;
  display: flex;
`;

const Label = styled.div`
  color: #ffffff;
  font-size: 1.4rem;
  font-family: Work Sans, sans-serif;
  margin-left: 1.4rem;
`;

const NotificationBadge = styled.div`
  border-radius: 50%;
  background-color: #ff0000;
  color: #f4f4f4;
  height: 2.2rem;
  width: 2.2rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  font-size: 1.4rem;
  margin-left: 1rem;
`;

const NotificationBadgeAbsolute = styled.div`
  position: absolute;
  top: -1.3rem;
  right: -1rem;
  border-radius: 50%;
  background-color: #ff0000;
  color: #f4f4f4;
  height: 2.2rem;
  width: 2.2rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  font-size: 1.4rem;
`;

interface IProps extends ICommonProps {
  isExtended?: boolean;
  label?: string;
  onClick?: () => void;
  isFocused?: boolean;
  linkPath?: string;
  lighter?: boolean;
  notificationQuantity?: number;
}

export const MenuIconButton: FC<IProps> = ({
  label,
  isExtended,
  isFocused,
  onClick,
  linkPath,
  children,
  className,
  lighter = false,
  notificationQuantity,
}) => {
  const buttonClasses = buttonStyles();
  const iconClasses = iconStyles();
  const labelClasses = labelStyles();
  const history = useHistory();
  const redirectTo = (path: string) => {
    history.push(path);
  };
  const getButtonClass = () => {
    let classes = '';
    if (isFocused) {
      classes = `${buttonClasses.active} `;
    }
    const base = isExtended
      ? classes + `${buttonClasses.expanded}`
      : classes + `${buttonClasses.rolled}`;
    return `${base} ${className}`;
  };

  const getLabelClass = () => {
    let classes = '';
    if (isFocused) {
      classes = `${labelClasses.active} `;
    }
    if (lighter) {
      classes = `${labelClasses.lighter} `;
    }
    return classes;
  };

  return (
    <>
      <IconButton
        onClick={linkPath ? () => redirectTo(linkPath) : onClick}
        className={getButtonClass()}
        classes={{ root: buttonClasses.root }}
      >
        <Children
          className={isExtended ? iconClasses.expanded : iconClasses.rolled}
        >
          {children}
          {notificationQuantity && notificationQuantity > 0 && !isExtended && (
            <NotificationBadgeAbsolute>
              {notificationQuantity}
            </NotificationBadgeAbsolute>
          )}
        </Children>
        {isExtended && <Label className={getLabelClass()}>{label}</Label>}
        {notificationQuantity && notificationQuantity > 0 && isExtended && (
          <NotificationBadge>{notificationQuantity}</NotificationBadge>
        )}
      </IconButton>
    </>
  );
};
