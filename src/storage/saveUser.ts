import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export async function setUser(username: string) {
  await Storage.set({
    key: 'username',
    value: username,
  });
}

export async function getUser() {
  const value = await Storage.get({ key: 'username' });
  return value;
}

export async function removeUser() {
  await Storage.remove({ key: 'username' });
}
