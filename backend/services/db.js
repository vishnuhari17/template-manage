import 'dotenv/config';
import pkg from 'pg'; // Import the pg package as a default export
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export async function query(sql, params) {
    try {
        const result = await pool.query(sql, params);
        return result;
    } catch (error) {
       return error;
    }
}