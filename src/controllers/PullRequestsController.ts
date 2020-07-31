import { getPullRequests } from './../services/index';
import { showDialog } from '../plugins/CustomDialog';

class PullRequestsController {
  private static instance: PullRequestsController;

  public static getInstance(): PullRequestsController {
    if (!PullRequestsController.instance) {
      PullRequestsController.instance = new PullRequestsController();
    }
    return PullRequestsController.instance;
  }

  private constructor() {}

  async loadData(
    owner: string,
    name: string,
    setPullRequests: any,
    setShowLoading: any,
    history: any
  ) {
    await getPullRequests(owner, name)
      .then((result) => {
        setPullRequests(result);
        setShowLoading(false);
      })
      .catch(() => {
        setShowLoading(false);
        showDialog('There are no pull requests for this repository!');
        history.goBack();
      });
  }
}

export default PullRequestsController;
