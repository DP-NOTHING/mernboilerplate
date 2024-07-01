const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const MovieSchema = new mongoose.Schema({
	movieId: String,
	movie: Buffer,
});
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	moviewatchlist: {
		type: [String],
		require: false,
		default: null,
	},
	tvwatchlist: {
		type: [String],
		require: false,
		default: null,
	},
});
const User = mongoose.model('User', UserSchema);
module.exports = { User, Movie, Test, IdMapping };
