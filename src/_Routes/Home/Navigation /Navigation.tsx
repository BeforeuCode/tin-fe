import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { NavigationContext } from '../NavigationContext';
import { Divider, Drawer } from '@material-ui/core';
import { PanelSwitcher } from './PanelSwitcher/PanelSwitcher';
import { Logo } from './Logo/Logo';
import { MenuIconButton } from './MenuIconButton/MenuIconButton';
import { DashboardIcon } from './Icons/DashboardIcon';
import { navigationPanelStyles } from './styles';
import { MyGamesIcon } from './Icons/MyGamesIcon';
import { MyInvitationsIcon } from './Icons/MyInvitationsIcon';

const Wrapper = styled.div`
  display: flex;
`;

const MenuDivider = styled(Divider)`
  && {
    background-color: #2c2c40;
    height: 1px;
  }
`;

const StyledMenuIconButton = styled(MenuIconButton)`
  && {
    margin-top: 3rem;
  }
`;

const BottomMenuIconButton = styled(MenuIconButton)`
  && {
    margin-top: auto;
    margin-bottom: 5rem;
  }
`;

export const NavigationPanel: FC = () => {
  const classes = navigationPanelStyles();
  const { navBarExpanded, onExpandClick } = useContext(NavigationContext);
  const location = useLocation();
  const { t } = useTranslation();
  const isActive = (path: string): boolean => location.pathname === path;
  const stateClasses = navBarExpanded ? `${classes.open}` : `${classes.close}`;

  const drawerClasses = {
    root: `${classes.drawer} ${stateClasses}`,
    paper: stateClasses,
  };

  const handleDrawerOpen = () => {
    onExpandClick();
  };

  return (
    <Wrapper>
      <Drawer variant="permanent" role="drawer" classes={drawerClasses}>
        <Logo isExtended={navBarExpanded} />
        <MenuDivider />
        <StyledMenuIconButton
          isFocused={isActive('/home/games')}
          isExtended={navBarExpanded}
          label={t('navBar.games')}
          linkPath={'/home/games'}
        >
          <DashboardIcon isFocused={isActive('/home/games')} />
        </StyledMenuIconButton>
        <StyledMenuIconButton
          isFocused={isActive('/home/invites')}
          isExtended={navBarExpanded}
          label={t('navBar.myInvitations')}
          linkPath={'/home/invites'}
        >
          <MyInvitationsIcon isFocused={isActive('/home/invites')} />
        </StyledMenuIconButton>
        <StyledMenuIconButton
          isFocused={isActive('/home/gamers')}
          isExtended={navBarExpanded}
          label={t('navBar.users')}
          linkPath={'/home/gamers'}
        >
          <MyInvitationsIcon isFocused={isActive('/home/gamers')} />
        </StyledMenuIconButton>
      </Drawer>
      <PanelSwitcher isExtended={navBarExpanded} onClick={handleDrawerOpen} />
    </Wrapper>
  );
};
