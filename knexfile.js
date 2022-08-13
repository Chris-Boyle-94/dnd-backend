/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config();
// const pg = require('pg');

module.exports = {

    development: {
        client: 'pg',
        connection: process.env.DEV_DB_URL,
        migrations: { directory: './data/migrations' },
        seeds: { directory: './data/seeds' },
        pool: {
            min: 2,
            max: 10
        }
    },

    production: {
        client: 'pg',
        connection: {
            connectionString: process.even.DATABASE_URL,
            ssl: true,
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: { directory: './data/migrations' },
        seeds: { directory: './data/seeds' }
    }

};
