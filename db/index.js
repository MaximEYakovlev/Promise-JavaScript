// import { Client } from 'pg';
// const client = new Client();
// await client.connect();

// try {
//     const res = await client.query('SELECT $1::text as message', [
//         'Hello world!',
//     ]);
//     console.log(res.rows[0].message); // Hello world!
// } catch (error) {
//     console.error(error);
// } finally {
//     await client.end();
// }

import { Pool } from 'pg';
const pool = new Pool();
const res = await pool.query('SELECT $1::text as message', ['Hello world!']);
console.log(res.rows[0].message); // Hello world!
