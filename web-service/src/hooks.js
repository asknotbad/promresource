import atob from 'atob';
import dotenv from 'dotenv';
dotenv.config();
import cookie from 'cookie';

const APP_HOST = process.env["APP_HOST"];
const API_HOST = process.env["API_HOST"];
const API_PORT = process.env["API_PORT"];

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export const handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	const jwt = cookies.jwt && cookies.jwt !== 'undefined' ? cookies.jwt : null;

  request.locals.user = jwt ? parseJwt(jwt) : null;
  request.locals.jwt = jwt ? jwt : null;

	return await resolve(request);
};

export function getSession({ locals }) {
	return {
    env: {
      APP_HOST,
      API_HOST,
      API_PORT,
    },
    jwt: locals.jwt ? locals.jwt : null,
		user: locals.user && {
      id: locals.user.id,
		}
	};
};
