var mongoose = require('mongoose');

var IndexContentSchema = new mongoose.Schema({
	title: String,
	heading: String,
	message: String
});

var IndexContent = mongoose.model("IndexContent", IndexContentSchema);

module.exports = IndexContent;