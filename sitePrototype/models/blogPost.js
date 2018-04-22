var mongoose = require('mongoose');

var BlogPostSchema = new mongoose.Schema({
	title: String,
	content: String,
	author: String,
	date: { type: Date, default: Date.now }
});

var BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;