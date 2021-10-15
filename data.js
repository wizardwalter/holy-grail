var mongoose = require("mongoose");

var dataSchema = new mongoose.Schema({
	header: Number,
	left: Number,
	article: Number,
	right: Number,
	footer: Number,
});
module.exports = mongoose.model('data', dataSchema);