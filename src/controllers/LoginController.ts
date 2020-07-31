import { showDialog } from './../plugins/CustomDialog';
import { isUser } from './../services/index';
import { getUser, setUser } from './../storage/saveUser';

class LoginController {
  private static instance: LoginController;

  public static getInstance(): LoginController {
    if (!LoginController.instance) {
      LoginController.instance = new LoginController();
    }
    return LoginController.instance;
  }

  private constructor() {}

  async checkIsValidUser(username: string, history: any) {
    username = username.trim();
    isUser(username)
      .then(() => {
        setUser(username);
        history.replace(`/Home/${username}`);
      })
      .catch(() => {
        showDialog('Invalid User!');
      });
  }

  async checkIsSavedUser(history: any) {
    const result = await getUser();
    if (result.value) {
      history.replace(`/Home/${result.value}`);
    }
  }
}

export default LoginController;
