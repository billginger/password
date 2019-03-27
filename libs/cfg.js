const config = require('../config.js');

const env = process.env.NODE_ENV || 'local';
const cfg = config[env];
const normalizePort = val => (parseInt(val));
const port = normalizePort(process.env.PORT || cfg.port || 3000);
const db_url = cfg.db_url;

module.exports = { port, db_url };
