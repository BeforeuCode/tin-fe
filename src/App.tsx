import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import { BrowserRouter } from 'react-router-dom';
import { RoutesSwitcher } from './_Routes/RoutesSwitcher';
import { Provider } from 'react-redux';
import { store } from './_State/store';

const MainScene = styled.div`
  display: flex;
  height: 100%;
  background-color: #07071f;
`;

const MainContainer = styled.div`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #07071f;
`;

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MainScene>
            <MainContainer>
              <RoutesSwitcher />
            </MainContainer>
          </MainScene>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
