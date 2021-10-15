const { Pool } = require('pg');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

let URI = '';
const options = {
    connectionString: URI,
}

if (config.isProd) {
    URI = config.dbUrl;
    options.connectionString = config.dbUrl;
    options.ssl = {
        rejectUnauthorized: false
    };
} else {
    URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
    options.connectionString = URI;
}



const pool = new Pool({ options });


module.exports = pool;