import { getBlueprintsDbConnection } from '$lib/server/db/connections';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit'; 

export const GET: RequestHandler = async ({ request }) => {

	let pool;

	try {
		pool = await getBlueprintsDbConnection();

		const blueprintQuery = await pool.request().query('SELECT * FROM blueprint');

		console.log(blueprintQuery);
	} catch (err) {
		console.log('Error establishing database connection:', err);
		return json({ error: 'Database connection failed' }, { status: 500 });
	}

	// create a JSON Response using a header we received
	return json({
		// retrieve a specific header
		userAgent: request.headers.get('user-agent'),
    allHeaders: Object.fromEntries(request.headers)
	});
};