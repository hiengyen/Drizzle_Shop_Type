require('dotenv').config()
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

//create collection to neon serverless
const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: true,
})

export const db = drizzle(pool)
