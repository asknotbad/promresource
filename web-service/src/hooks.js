/** @type {import('@sveltejs/kit').ServerFetch} */
import dotenv from 'dotenv';
dotenv.config();
import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';

const API_HOST = process.env["API_HOST"];
const API_PORT = process.env["API_PORT"];

export const handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();

	// TODO https://github.com/sveltejs/kit/issues/1046
	if (request.query.has('_method')) {
		request.method = request.query.get('_method').toUpperCase();
	}

	const response = await resolve(request);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
	}

	return response;
};

export function getSession({ locals }) {
	return {
    env: {
      API_HOST,
      API_PORT,
    },
	};
};
