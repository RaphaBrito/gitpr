import { getRepos } from './../../services/index';

let validUsers = ['raphabrito'];

test('services/getRepos', async () => {
  for (let user of validUsers) {
    const result = await getRepos(user);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  }
});
