import type { PageMetadata } from '@kyleulman/lib';
import { content } from '../content';
import type { PageServerLoad } from './$types';
import { octokit } from '$lib/octokit';

export const load = (async ({ url }) => {
	const page: PageMetadata = {
		title: "Let's work together",
		description: 'Learn more about tools to grow your business.',
		url: url.href
	};

	const user = await getUser();
	const repos = await getRepos();

	return {
		page: page,
		content: { ...content.home, user, repos }
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
