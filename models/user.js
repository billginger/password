const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	password: String,
	token: String,
	fullname: String,
	email: String,
	group: Array,
	isRoot: { type: Boolean, default: false },
	isLocked: { type: Boolean, default: false },
	isDeleted: { type: Boolean, default: false }
},
{
	timestamps: true
});

module.exports = mongoose.model('User', userSchema);
