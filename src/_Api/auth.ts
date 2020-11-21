import { tinApi } from './api';
import { IUser } from '../_State/User/user.types';

interface IRegisterUserPayload {
  name: string;
  email: string;
  password: string;
  nickName: string;
  age: string;
}

export const getUserInfo = (): Promise<IUser> => {
  return tinApi.get('users/self').json();
};

export const registerUser = (payload: IRegisterUserPayload) => {
  return tinApi
    .post('users/register', {
      json: payload,
    })
    .json();
};

export interface IUserLoginPayload {
  email: string;
  password: string;
}

export interface IUserLoginResponse {
  access_token: string;
  refresh_token: string;
  expires_in: string;
}

export const loginUser = ({ email, password }: IUserLoginPayload) => {
  const searchParams = new URLSearchParams();
  searchParams.set('username', email);
  searchParams.set('password', password);
  searchParams.set('grant_type', 'password');
  searchParams.set('client_id', 'tin-frontend-dev');
  searchParams.set('client_secret', 'tin-frontend-dev-s3C5et!');

  return tinApi
    .post('oauth/token', {
      headers: {
        Accept: 'application/json',
      },
      body: searchParams,
    })
    .json<IUserLoginResponse>();
};

export const checkToken = (token: string): Promise<any> => {
  const searchParams = new URLSearchParams();
  searchParams.set('token', token);

  let url = 'oauth/check_token';
  url += `?${searchParams}`;

  return tinApi.get(url).json();
};

export const getUserData = () => {
  return tinApi.get('users/self').json<IUser>();
};
