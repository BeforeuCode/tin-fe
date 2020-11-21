import { IAuthState } from './Auth/auth.state';
import { IUserState } from './User/user.state';

export interface IState {
  auth: IAuthState;
  user: IUserState;
}
