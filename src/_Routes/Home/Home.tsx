import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import { NavigationPanel } from './Navigation /Navigation';
import { INavigationContext, NavigationContext } from './NavigationContext';
import { Route } from 'react-router-dom';
import { AddNewGame } from './_Routes/Games/AddNewGame/AddNewGame';
import { Invites } from './_Routes/Invites/Invites';
import { Games } from './_Routes/Games/Games';
import { InviteDetails } from './_Routes/Invites/InvitesDetails';
import { Gamers } from './_Routes/Gamers/Gamers';
import { GameDetail } from './_Routes/Games/GameDetail';
import { AddNewInvite } from './_Routes/Invites/AddNewInvite/AddNewInvite';
import { GamerDetails } from './_Routes/Gamers/GamerDetails';
import { AddNewGamer } from './_Routes/Gamers/AddNewGamer/AddNewGamer';

export const Home: FC = () => {
  const [navBarExpanded, setNavBarExpanded] = useState<boolean>(true);

  const HomeBody = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
  `;

  const context: INavigationContext = {
    navBarExpanded,
    onExpandClick: () => setNavBarExpanded(!navBarExpanded),
  };
  return (
    <HomeBody>
      <NavigationContext.Provider value={context}>
        <NavigationPanel />
        <Route exact path="/home/games">
          <Games />
        </Route>
        <Route exact path="/home/games/details/:id">
          <GameDetail />
        </Route>
        <Route exact path="/home/games/add">
          <AddNewGame />
        </Route>
        <Route exact path="/home/invites">
          <Invites />
        </Route>
        <Route exact path="/home/invites/details/:id">
          <InviteDetails />
        </Route>
        <Route exact path="/home/invites/add">
          <AddNewInvite />
        </Route>
        <Route exact path="/home/gamers">
          <Gamers />
        </Route>
        <Route exact path="/home/gamers/add">
          <AddNewGamer />
        </Route>
        <Route exact path="/home/gamers/details/:id">
          <GamerDetails />
        </Route>
      </NavigationContext.Provider>
    </HomeBody>
  );
};
