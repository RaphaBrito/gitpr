import { getUser, getRepos } from '../services/index';
import { showDialog } from '../plugins/CustomDialog';
import { removeUser } from './../storage/saveUser';

class HomeController {
  private static instance: HomeController;

  public static getInstance(): HomeController {
    if (!HomeController.instance) {
      HomeController.instance = new HomeController();
    }
    return HomeController.instance;
  }

  private constructor() {}

  async loadData(
    username: string,
    setUser: any,
    setRepos: any,
    setShowLoading: any,
    history: any
  ) {
    const resultUser = await getUser(username);
    await getRepos(username)
      .then((result) => {
        setUser(resultUser);
        setRepos(result);
        setShowLoading(false);
      })
      .catch(() => {
        setShowLoading(false);
        showDialog('There are no repositories for this user!');
        removeUser();
        history.goBack();
      });
  }
}

export default HomeController;
