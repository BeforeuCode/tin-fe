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
import { Details } from './_Routes/MyGames/Details/Details';
import { Profile } from './_Routes/Profile/Profile';
import { GameDetail } from './_Routes/AllGames/GameDetails';
import { InvitationDetail } from './_Routes/MyInvitations/InvitationDetails';
import { Users } from './_Routes/Users/Users';
import { UserDetails } from './_Routes/Users/UserDetails';

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
        <Route exact path="/home/games/details/:id">
          <GameDetail />
        </Route>
        <Route exact path="/home/my-games">
          <MyGames />
        </Route>
        <Route exact path="/home/my-invitations">
          <MyInvitations />
        </Route>
        <Route exact path="/home/my-invitations/details/:id">
          <InvitationDetail />
        </Route>
        <Route exact path="/home/my-games/add">
          <AddNewGame />
        </Route>
        <Route exact path="/home/my-games/edit/:id">
          <EditGame />
        </Route>
        <Route exact path="/home/my-games/details/:id">
          <Details />
        </Route>
        <Route exact path="/home/profile">
          <Profile />
        </Route>
        <Route exact path="/home/users">
          <Users />
        </Route>
        <Route exact path="/home/users/details/:id">
          <UserDetails />
        </Route>
      </NavigationContext.Provider>
    </HomeBody>
  );
};
