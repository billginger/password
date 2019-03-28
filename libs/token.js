const crypto = require('crypto');

module.exports = () => {
	const buf = crypto.randomBytes(32);
	return buf.toString('hex');
};
