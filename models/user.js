const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	password: String,
	token: String,
	fullname: String,
	email: String,
	group: Array,
	isSuper: { type: Boolean, default: false },
	isLock: { type: Boolean, default: false },
	isDel: { type: Boolean, default: false }
},
{
	timestamps: true
});

module.exports = mongoose.model('User', userSchema);
