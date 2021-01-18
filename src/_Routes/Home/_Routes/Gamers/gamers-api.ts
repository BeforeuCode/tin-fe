import { tinApi } from '../../../../_Api/api';

export const getGamers = (): Promise<any> => {
  return tinApi.get('gamer').json();
};

export const getGamerDetails = (id: number): Promise<any> => {
  return tinApi.get(`gamer/${id}`).json();
};

export const removeGamer = (id: number) => {
  return tinApi.delete(`gamer/${id}`);
};

export const updateGamer = (id: number, form: any) => {
  return tinApi.put(`gamer/${id}`, { json: form });
};

export const createGamer = (form: any): Promise<any> => {
  return tinApi.post('gamer', { json: form });
};
