const { Pool } = require('pg');
const fs = require('fs');
const itemsPool = new Pool({
    user: 'urls_6eml_user',
    password: 'MilA7zShptE8GsTrQL6pR2cY7SCmp4mV',
    database: 'urls_6eml',
    host: process.env.DBHost,
    port: 5432,
    ssl: {
        rejectUnauthorized : false,
        //ca   : fs.readFileSync("server-ca.pem").toString(),
        key  : fs.readFileSync("rootCAKey.pem").toString(),
        cert : fs.readFileSync("rootCACert.pem").toString(),
    }
    });
module.exports = itemsPool;
