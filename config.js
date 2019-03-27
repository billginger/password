module.exports = {
	local: {
		port: 3000,
		db_url: 'mongodb://localhost:27017/lazypass'
	},
	prod: {
		port: 80,
		db_url: 'mongodb://localhost:27017/lazypass'
	}
};
