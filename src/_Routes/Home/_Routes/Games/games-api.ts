import { tinApi } from '../../../../_Api/api';

export const getGames = (): Promise<any> => {
  return tinApi.get('game').json();
};

export const getGameDetails = (id: number): Promise<any> => {
  return tinApi.get(`game/${id}`).json();
};

export const removeGame = (id: number) => {
  return tinApi.delete(`game/${id}`);
};

export const updateGame = (id: number, form: any) => {
  return tinApi.put(`game/${id}`, { json: form });
};

export const createGame = (form: any): Promise<any> => {
  return tinApi.post('game', { json: form });
};
