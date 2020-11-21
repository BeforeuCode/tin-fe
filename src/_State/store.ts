import { combineReducers } from 'redux';
import { authReducer } from './Auth/auth.state';
import { userReducer } from './User/user.state';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
