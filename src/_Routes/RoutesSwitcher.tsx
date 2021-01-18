import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import React, { FC } from 'react';
import { IState } from '../_State';
import { useSelector } from 'react-redux';
import { Auth } from './Auth/Auth';
import { Home } from './Home/Home';

export const RoutesSwitcher: FC = () => {
  const location = useLocation();
  const { token } = useSelector((state: IState) => state.auth);

  return (
    <Switch>
      {token && (
        <>
          <Route path="/home">
            <Home />
          </Route>
        </>
      )}
      <Route path="/auth">
        <Auth />
      </Route>
      <Route>
        <Redirect
          to={{
            pathname: '/auth/login',
            state: { from: location },
          }}
        />
      </Route>
    </Switch>
  );
};
