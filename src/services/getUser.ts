import api from './api';
import IUser from '../models/User';

export async function getUserService(username: string) {
  const response = await api.get(`users/${username}`);
  const userObj: IUser = {
    login: response.data.login,
    avatar_url: response.data.avatar_url,
    name: response.data.name,
  };
  return userObj;
}

export async function isUserService(username: string) {
  await api
    .get(`users/${username}`)
    .then((res) => {
      Promise.resolve(true);
    })
    .catch((err) => {
      throw new TypeError('Invalid User.');
    });
}
