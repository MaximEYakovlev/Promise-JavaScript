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

// import { Pool } from 'pg';
// const pool = new Pool();
// const res = await pool.query('SELECT $1::text as message', ['Hello world!']);
// console.log(res.rows[0].message); // Hello world!

import pg from 'pg'
const { Pool } = pg
 
const pool = new Pool()
 
// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})
 
const client = await pool.connect()
const res = await client.query('SELECT * FROM users WHERE id = $1', [1])
console.log(res.rows[0])
 
client.release()