import { getPullRequests } from './../services/index';

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
    setShowLoading: any
  ) {
    const result = await getPullRequests(owner, name);
    setPullRequests(result);
    setShowLoading(false);
  }
}

export default PullRequestsController;
