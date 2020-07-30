import { getUser, getRepos } from '../services/index';

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
    const resultRepo = await getRepos(username);
    setRepos(resultRepo);
    setShowLoading(false);
  }
}

export default HomeController;
