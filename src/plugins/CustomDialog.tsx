import { Plugins } from '@capacitor/core';

export async function showDialog(dialogMsg: string) {
  const { CustomDialog } = Plugins;
  const customDialog = CustomDialog;

  await customDialog
    .show({
      message: dialogMsg,
    })
    .then((res: any) => {
      console.log('CustomDialog: ' + JSON.stringify(res));
    })
    .catch((err: any) => {
      console.error('CustomDialog err: ' + err);
    });
}
