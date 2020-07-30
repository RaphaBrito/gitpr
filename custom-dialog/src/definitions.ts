import '@capacitor/core';

declare module '@capacitor/core' {
  interface PluginRegistry {
    CustomDialog: CustomDialogPlugin;
  }
}

export interface CustomDialogPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
