import api from './api';
import IPullRequest from '../interfaces/PullRequest';

export default async function getPulls(owner: string, name: string) {
  const response = await api.get(`/repos/${owner}/${name}/pulls`);

  const pullsObj: IPullRequest[] = response.data.map((pull: any) => {
    return {
      title: pull.title,
      id: pull.id,
      state: pull.state,
    };
  });

  if (pullsObj.length > 0) {
    return pullsObj;
  } else {
    throw new TypeError('There are no pull requests for this repository!');
  }
}
