import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';

// Redirect to Upwork profile
export const GET = (() => {
	throw redirect(303, 'https://www.upwork.com/freelancers/~0112b43845ad4099da');
}) satisfies RequestHandler;
