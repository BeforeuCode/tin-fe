import { tinApi } from '../../../../_Api/api';

export const getInvites = (): Promise<any> => {
  return tinApi.get('invite').json();
};

export const getInviteDetails = (id: number): Promise<any> => {
  return tinApi.get(`invite/${id}`).json();
};

export const removeInvite = (id: number) => {
  return tinApi.delete(`invite/${id}`);
};

export const updateInvite = (id: number, form: any) => {
  return tinApi.put(`invite/${id}`, { json: form });
};

export const createInvite = (form: any): Promise<any> => {
  return tinApi.post('invite', { json: form });
};
