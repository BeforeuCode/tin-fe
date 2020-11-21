import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import { NavigationPanel } from './Navigation /Navigation';
import { INavigationContext, NavigationContext } from './NavigationContext';
import { Route } from 'react-router-dom';
import { MyGames } from './_Routes/MyGames/MyGames';
import { AddNewGame } from './_Routes/MyGames/AddNewGame/AddNewGame';
import { MyInvitations } from './_Routes/MyInvitations/MyInvitations';
import { EditGame } from './_Routes/MyGames/EditGame/EditGame';
import { AllGames } from './_Routes/AllGames/AllGames';

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
          <AllGames />
        </Route>
        <Route exact path="/home/my-games">
          <MyGames />
        </Route>
        <Route exact path="/home/my-invitations">
          <MyInvitations />
        </Route>
        <Route exact path="/home/my-games/add">
          <AddNewGame />
        </Route>
        <Route exact path="/home/my-games/edit/:id">
          <EditGame />
        </Route>
      </NavigationContext.Provider>
    </HomeBody>
  );
};
