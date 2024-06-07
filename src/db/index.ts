require('dotenv').config()
import * as schema from './schema'
const { drizzle } = require('drizzle-orm/node-postgres')
const { Pool } = require('pg')

//create collection to neon serverless
const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: true,
})

const db = drizzle(pool, { schema })

module.exports = db
