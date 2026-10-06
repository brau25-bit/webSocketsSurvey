import { Pool } from "pg";
import { config } from "../../config/config.js";

const pool = new Pool({
    connectionString: config.connectionString 
});

const client = await pool.connect()

export {client}