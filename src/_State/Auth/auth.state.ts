import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { ICredentials } from './auth.types';

export interface IAuthState {
  token?: string;
  refreshToken?: string;
}

const initialState: IAuthState = {
  token: undefined,
  refreshToken: undefined,
};

type AuthReducer<PayloadType> = CaseReducer<
  IAuthState,
  PayloadAction<PayloadType>
>;

const saveCredentials: AuthReducer<ICredentials> = (
  state,
  { payload: credentials }
) => {
  const { token, refreshToken } = credentials;
  state.token = token;
  state.refreshToken = refreshToken;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveCredentials,
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
