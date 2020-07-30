import '@capacitor/core';

declare module '@capacitor/core' {
  interface PluginRegistry {
    CustomDialog: CustomDialogPlugin;
  }
}

export interface CustomDialogPlugin {
  show(options: { message: string }): Promise<{ message: string }>;
}
