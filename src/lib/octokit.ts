import { VITE_OCTOKIT_PAT } from '$env/static/private';
import { Octokit } from 'octokit';

export const octokit = new Octokit({
	auth: VITE_OCTOKIT_PAT
});
