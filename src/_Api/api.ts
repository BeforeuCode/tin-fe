import ky from 'ky';

export interface IApiCredentials {
  token?: string;
}

const credentials: IApiCredentials = {
  token: undefined,
};

export const setCredentials = (newCredentials: IApiCredentials) => {
  Object.assign(credentials, newCredentials);
};

const authInterceptor = (request: Request) => {
  if (credentials.token) {
    request.headers.set('Authorization', `Bearer ${credentials.token}`);
  }
  return request;
};

export const tinApi = ky.create({
  prefixUrl: '/api',
  hooks: {
    beforeRequest: [authInterceptor],
  },
});
