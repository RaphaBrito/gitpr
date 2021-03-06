import api from './api';
import IRepository from '../interfaces/Repository';

export default async function getRepos(username: string) {
  const response = await api.get(`users/${username}/repos`);
  const reposObj: IRepository[] = response.data.map((repo: any) => {
    return {
      name: repo.name,
      id: repo.id,
      owner: repo.owner.login,
    };
  });

  if (reposObj.length > 0) {
    return reposObj;
  } else {
    throw new TypeError('There are no repositories for this user!');
  }
}
