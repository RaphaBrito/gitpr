import api from './api';
import IUser from '../models/User';

export default async function getUser(username: string) {
  const response = await api.get(`users/${username}`);
  const userObj: IUser = {
    login: response.data.login,
    avatar_url: response.data.avatar_url,
    name: response.data.name,
  };
  return userObj;
}
