import { getUser, isUser } from './../../services/index';

let validUsers = ['raphabrito'];

test('services/getUserService', async () => {
  for (let user of validUsers) {
    const result = await getUser(user);
    expect(result).toBeDefined();
  }
});

test('services/isUserService', async () => {
  for (let user of validUsers) {
    expect(await isUser(user)).toBeUndefined();
  }
});
