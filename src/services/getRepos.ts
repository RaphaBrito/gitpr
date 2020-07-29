import api from './api';
import IRepository from '../models/Repository';

export default async function getRepos(username: string) {
  const response = await api.get(`users/${username}/repos`);
  const reposObj = response.data.map((repo: any) => {
    return {
      name: repo.name,
      id: repo.id,
      owner: repo.owner.login,
    };
  });

  return reposObj as IRepository[];
}
