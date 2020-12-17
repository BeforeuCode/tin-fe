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
          isFocused={isActive('/home/my-games')}
          isExtended={navBarExpanded}
          label={t('navBar.myGames')}
          linkPath={'/home/my-games'}
        >
          <MyGamesIcon isFocused={isActive('/home/my-games')} />
        </StyledMenuIconButton>
        <StyledMenuIconButton
          isFocused={isActive('/home/my-invitations')}
          isExtended={navBarExpanded}
          label={t('navBar.myInvitations')}
          linkPath={'/home/my-invitations'}
        >
          <MyInvitationsIcon isFocused={isActive('/home/my-invitations')} />
        </StyledMenuIconButton>
        <StyledMenuIconButton
          isFocused={isActive('/home/users')}
          isExtended={navBarExpanded}
          label={t('navBar.users')}
          linkPath={'/home/users'}
        >
          <MyInvitationsIcon isFocused={isActive('/home/users')} />
        </StyledMenuIconButton>
        <BottomMenuIconButton
          isFocused={isActive('/home/profile')}
          isExtended={navBarExpanded}
          label={t('navBar.profile')}
          linkPath={'/home/profile'}
        >
          <MyInvitationsIcon isFocused={isActive('/home/profile')} />
        </BottomMenuIconButton>
      </Drawer>
      <PanelSwitcher isExtended={navBarExpanded} onClick={handleDrawerOpen} />
    </Wrapper>
  );
};
