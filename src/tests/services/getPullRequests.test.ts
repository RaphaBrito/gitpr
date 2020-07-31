import { getPullRequests } from './../../services/index';

let validUsers = [{ owner: 'raphabrito', repo: 'tiago' }];

test('services/getPullRequests', async () => {
  for (let user of validUsers) {
    const result = await getPullRequests(user.owner, user.repo);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  }
});
