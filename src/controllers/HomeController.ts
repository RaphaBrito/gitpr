import { getUser, getRepos } from '../services/index';
import { showDialog } from '../plugins/CustomDialog';

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
    setShowLoading: any
  ) {
    const resultUser = await getUser(username);
    setUser(resultUser);
    await getRepos(username)
      .then((result) => {
        setRepos(result);
        setShowLoading(false);
      })
      .catch(() => {
        setShowLoading(false);
        showDialog('There are no repositories for this user!');
      });
  }
}

export default HomeController;
