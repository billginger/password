const mongoose = require('mongoose');
const { db_url } = require('./cfg.js');
const { log } = require('./log.js');

mongoose.connect(db_url, { useNewUrlParser: true, useFindAndModify: false });

const db = mongoose.connection;
db.on('error', log.error.bind(log, 'MongoDB connection error:'));
db.once('open', () => {
	log.info('MongoDB connection successfully');
});
