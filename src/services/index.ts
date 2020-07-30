import PullRequests from './getPullRequests';
import Repos from './getRepos';
import { getUserService, isUserService } from './getUser';

export const getRepos = Repos;
export const getUser = getUserService;
export const isUser = isUserService;
export const getPullRequests = PullRequests;
