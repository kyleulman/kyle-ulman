import { VITE_OCTOKIT_PAT } from '$env/static/private';
import { Octokit } from 'octokit';
import type { PageServerLoad } from './$types';

const octokit = new Octokit({ auth: VITE_OCTOKIT_PAT });

export const load = (async ({ url }) => {
	const page = await import('./content');

	page.home.metadata.url = url.href;

	const user = await getUser();
	const repos = await getRepos();

	return {
		content: { ...page.home, user, repos }
	};
}) satisfies PageServerLoad;

async function getUser() {
	try {
		const { data } = await octokit.request('GET /user', {
			headers: {
				'X-GitHub-Api-Version': '2022-11-28'
			},
			accept: 'application/vnd.github+json'
		});

		return data;
	} catch (err) {
		console.log(err);
	}
}

async function getRepos() {
	try {
		const { data } = await octokit.request('GET /user/repos', {
			headers: {
				'X-GitHub-Api-Version': '2022-11-28'
			},
			accept: 'application/vnd.github+json',
			visibility: 'public',
			sort: 'pushed'
		});

		return data;
	} catch (err) {
		console.log(err);
	}
}
