import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user.types';

export interface IUserState {
  user?: IUser;
}

const initialState: IUserState = {
  user: undefined,
};

type UserReducer<ActionPayload> = CaseReducer<
  IUserState,
  PayloadAction<ActionPayload>
>;

const userLogin: UserReducer<IUser> = (state, { payload: user }) => {
  state.user = user;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin,
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
