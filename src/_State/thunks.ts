import { IUserLoginPayload } from '../_Api/auth';
import { Dispatch } from 'redux';
import { authActions } from './Auth/auth.state';
import { setCredentials } from '../_Api/api';
import { userActions } from './User/user.state';
import { IUser } from './User/user.types';

export const login = (
  loginPayload: IUserLoginPayload,
  onLoginSuccess: () => void,
  onLoginFailure: () => void
) => {
  return (dispatch: Dispatch) => {
    try {
      const mockLogin = {
        accessToken: 'asd',
        refreshToken: 'asd',
        expiresIn: 'asd',
      };

      const mockUser: IUser = {
        id: 1,
        age: '25',
        email: 'user@tingamers.com',
        name: 'Joe',
        nickName: 'JoeDoe3000',
      };
      dispatch(
        authActions.saveCredentials({
          token: mockLogin.accessToken,
          refreshToken: mockLogin.refreshToken,
        })
      );
      setCredentials({ token: mockLogin.accessToken });
      sessionStorage.setItem('access_token', mockLogin.accessToken);
      sessionStorage.setItem('refresh_token', mockLogin.refreshToken);
      sessionStorage.setItem('expires', mockLogin.expiresIn);
      dispatch(userActions.userLogin(mockUser));
      onLoginSuccess();
    } catch (httpError) {
      onLoginFailure();
      console.log(httpError);
    }
  };
};
